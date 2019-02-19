import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addAdminUser,
  getPermissions
} from "../../../../Redux/Actions/Admin/ManageUserActions";

class UserForm extends Component {
  state = {
    user: {
      FirstName: "",
      LastName: "",
      Email: "",
      LastLogin: "",
      Phone: "",
      Permissions: [
        {
          PermissionID: 0,
          Description: ""
        }
      ],
      IsActive: true,
      Roles: {
        Events: false,
        Inventory: false,
        Accounting: false,
        Membership: false,
        Sponsorship: false,
        Admin: false
      }
    }
  };
  componentDidMount() {
    // this.props.getPermissions();
  }

  handlePermission = e => {
    const oldState = { ...this.state };
    oldState.user.Roles[e.target.name] = e.target.checked;
    this.setState({
      user: oldState.user
    });
  };

  handleInput = e => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const now = new Date();
    const loginDate = `${now.getMonth() +
      1}/${now.getDate()}/${now.getFullYear()}`;
    const permissionsArray = [];
    for (let role in this.state.user.Roles) {
      if (this.state.user.Roles[role]) {
        permissionsArray.push({
          PermissionID: 0,
          Description: role
        });
      }
    }
    const oldState = { ...this.state };
    // oldState.user.Permissions.Description = desc.toString().trim();
    oldState.user.Permissions = permissionsArray;
    oldState.user.LastLogin = loginDate;
    this.setState({
      user: oldState.user
    });
    this.props.addAdminUser(this.state.user);
    this.props.closeForm();
    document.getElementById("admin-staff-form").reset();
  };

  render() {
    console.log(this.state);
    const {
      FirstName,
      LastName,
      Email,
      Phone,
      Permissions,
      IsActive,
      Roles
    } = this.state.user;
    const permissions = [
      "Events",
      "Inventory",
      "Accounting",
      "Membership",
      "Sponsorship",
      "Admin"
    ].map((role, i) => {
      return (
        <label key={i} htmlFor={role}>
          {role}
          <input
            type="checkbox"
            name={role}
            checked={Roles[role]}
            onChange={this.handlePermission}
          />
        </label>
      );
    });
    return (
      <form
        id="admin-staff-form"
        onSubmit={
          this.handleSubmit
          // () =>
          // this.props.selectedUser
          //   ? this.props.updateAdminUser(
          //       this.props.selectedUser.UserID,
          //       this.props.selectedUser
          //     )
          //   :
          // this.handleSubmit()
        }
      >
        <label htmlFor="">
          First name:
          <input
            type="text"
            name="FirstName"
            defaultValue={this.props.selectedUser.FirstName || FirstName}
            value={FirstName}
            onChange={this.handleInput}
          />
        </label>
        <label htmlFor="">
          Last name:
          <input
            type="text"
            name="LastName"
            value={LastName}
            onChange={this.handleInput}
          />
        </label>
        <label htmlFor="">
          Email:
          <input
            type="text"
            name="Email"
            value={Email}
            onChange={this.handleInput}
          />
        </label>
        <label htmlFor="">
          Phone number:
          <input
            type="text"
            name="Phone"
            value={Phone}
            onChange={this.handleInput}
          />
        </label>
        <label htmlFor="">
          Permissions: {permissions}
          {/* <input type="text" value={Permissions.Description} onChange={this.handleInput}/> */}
        </label>
        <label htmlFor="">
          IsActive:
          <input
            type="checkbox"
            name="IsActive"
            checked={IsActive}
            onChange={this.handleInput}
          />
        </label>
        <button className="modal-btn" type="submit">
          SAVE <i className="fas fa-save" />
        </button>
        {/* <button className="modal-btn" onClick={this.props.closeForm}>
          CANCEL <i className="fas fa-ban" />
        </button> */}
      </form>
    );
  }
}

const mapStateToProps = state => state.user;

export default connect(
  mapStateToProps,
  { getPermissions, addAdminUser }
)(UserForm);
