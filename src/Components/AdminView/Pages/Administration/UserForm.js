import React, { Component } from "react";
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import { Input, NumericTextBox } from "@progress/kendo-react-inputs";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInEdit: this.props.dataItem || null
    };
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  onDialogInputChange = event => {
    let target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.props ? target.props.name : target.name;

    const edited = this.state.userInEdit;
    edited[name] = value;

    this.setState({
      userInEdit: edited
    });
  };

  handlePermission = e => {
    // this.setState({
    //     ...this.state.userInEdit,
    //     Permission:{
    //         // PerimissionID: PerimissionID++,
    //         Description: e.target.value}

    // })

    let cloneState = Object.assign({}, this.state);
    cloneState.userInEdit.Permission.Description = e.target.value;
    // cloneState.userInEdit.Permission.PermissionID++;
    this.setState({ userInEdit: cloneState.userInEdit });
  };

  render() {
    console.log("state: ", this.state);
    console.log("props:", this.props);
    const {
      Email,
      FirstName,
      IsActive,
      LastName,
      Permission,
      Phone
    } = this.state.userInEdit;
    // const permissions = this.props.permissions.map(permission => {
    //     return (
    //         <label key={permission.claimID} >
    //             {permission.claimName}
    //             <input type="checkbox"
    //                 name="Description"
    //                 value={permission.claim || ''}
    //                 // value={this.state.userInEdit.Permission && this.state.userInEdit.Permission.Description || ''}
    //                 onChange={this.handlePermission}
    //             />
    //         </label>
    //     )
    // })
    return (
      <Dialog className="user-form" onClose={this.props.cancel}>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label>
              First Name
              <br />
              <Input
                type="text"
                name="FirstName"
                value={this.state.userInEdit.FirstName || ""}
                onChange={this.onDialogInputChange}
              />
            </label>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>
              Last Name
              <br />
              <Input
                type="text"
                name="LastName"
                value={this.state.userInEdit.LastName || ""}
                onChange={this.onDialogInputChange}
              />
            </label>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>
              Email
              <br />
              <Input
                type="text"
                name="Email"
                value={this.state.userInEdit.Email || ""}
                onChange={this.onDialogInputChange}
              />
            </label>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>
              Phone
              <br />
              <Input
                type="text"
                name="Phone"
                value={this.state.userInEdit.Phone || ""}
                onChange={this.onDialogInputChange}
              />
            </label>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>
              Permission
              <br />
              <input
                type="text"
                name="Permission.Description"
                value={
                  (this.state.userInEdit.Permission &&
                    this.state.userInEdit.Permission.Description) ||
                  ""
                }
                onChange={this.handlePermission}
              />
            </label>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>
              IsActive
              <input
                type="checkbox"
                name="IsActive"
                checked={this.state.userInEdit.IsActive || false}
                onChange={this.onDialogInputChange}
              />
            </label>
          </div>

          {/* <div style={{ marginBottom: '1rem' }}>
                        <label>
                            Last Name<br />
                            <NumericTextBox
                                name="LastName"
                                value={this.state.userInEdit.LastName || 0}
                                onChange={this.onDialogInputChange}
                            />
                        </label>
                    </div> */}
        </form>
        <DialogActionsBar>
          <button className="k-button" onClick={this.props.cancel}>
            Cancel
          </button>
          <button
            className="k-button k-primary"
            onClick={() => {
              this.props.addAdminUser(this.state.userInEdit);
              this.props.cancel();
            }}
          >
            Save
          </button>
        </DialogActionsBar>
      </Dialog>
    );
  }
}

export default UserForm;
