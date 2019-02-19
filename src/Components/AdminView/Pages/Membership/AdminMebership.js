import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch } from "@progress/kendo-react-inputs";
import AdminHeader from "../../AdminHeader";
import Modal from "../../Modal";
import UserForm from "../Forms/UserForm";
import {
  fetchUsers,
  updateAdminUser
} from "../../../../Redux/Actions/Admin/ManageUserActions";

class AdminMembership extends Component {
  state = {
    showModal: false,
    active: true,
    selectedUser: {}
  };
  componentDidMount() {
    this.props.fetchUsers();
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  toggleActive = () => {
    // this.setState({
    //   active: !this.state.active
    // });
  };

  handleUpdateUser = (id, user) => {
    this.props.updateAdminUser(id, user);
    this.props.fetchUsers();
  };

  render() {
    // console.log(this.props);
    const staffs = this.props.user.users.map(staff => {
      return (
        <tr key={staff.UserID}>
          <td>{staff.FirstName}</td>
          <td>{staff.LastName}</td>
          <td>{staff.Permissions[0].Description}</td>
          {/* <td>
            {staff.Permissions.map(role => {
              role.Description.toString();
            })}
          </td> */}
          <td>{staff.Email}</td>
          <td>{staff.Phone}</td>
          <td>{staff.IsActive ? "YES" : "NO"}</td>
          <td>
            <button
              // onClick={() => {
              //   this.handleUpdateUser(staff.UserID, staff);
              // }}
              onClick={() => {
                this.toggleModal();
                this.setState({ selectedUser: staff });
              }}
            >
              Edit
            </button>
            <Switch
              filter="boolean"
              onChange={this.toggleActive}
              onLabel={"Activate"}
              offLabel={"Deactivate"}
              checked={!staff.IsActive}
            />
          </td>
          <td>{staff.LastLogin}</td>
        </tr>
      );
    });
    return (
      <div>
        <AdminHeader />
        <div>
          Search <input type="text" />
          <button onClick={this.toggleModal}>Add New</button>
          <button>Export to Excel</button>
        </div>
        <table>
          <tbody>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Permission</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Active</th>
              <th>Activate/Deactivate</th>
              <th>Last Login</th>
            </tr>
            {staffs}
          </tbody>
        </table>
        <Modal
          show={this.state.showModal}
          closeCallback={this.toggleModal}
          customClass="admin-user-form"
        >
          <UserForm
            selectedUser={this.state.selectedUser}
            updateAdminUser={this.props.updateAdminUser}
            closeForm={this.toggleModal}
          />
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  { fetchUsers, updateAdminUser }
)(AdminMembership);
