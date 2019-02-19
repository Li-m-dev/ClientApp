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
import AdminSearch from "../../AdminSearch";

class AdminMembership extends Component {
  state = {
    showModal: false,
    active: true,
    selectedUser: {},
    staff: []
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

  filterStaff = searchTerm => {
    const filteredStaff = this.props.user.users.filter(staff => {
      return (
        staff.FirstName.toLowerCase().includes(searchTerm) ||
        staff.LastName.toLowerCase().includes(searchTerm) ||
        staff.Email.toLowerCase().includes(searchTerm) ||
        staff.Phone.toLowerCase().includes(searchTerm)
      );
    });
    this.setState({ staff: filteredStaff });
  };

  render() {
    // console.log(this.props);
    const mapList = this.state.staff.length
      ? this.state.staff
      : this.props.user.users;
    const staffs = mapList.map(staff => {
      const rolesToDisplay = staff.Permissions.map(
        role => " " + role.Description
      )
        .toString()
        .trim();
      return (
        <tr key={staff.UserID}>
          <td>{staff.FirstName}</td>
          <td>{staff.LastName}</td>
          <td>{rolesToDisplay}</td>
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
            {/* <Switch
              filter="boolean"
              onChange={this.toggleActive}
              onLabel={"Activate"}
              offLabel={"Deactivate"}
              checked={!staff.IsActive}
            /> */}
          </td>
          <td>{staff.LastLogin}</td>
        </tr>
      );
    });
    return (
      <div>
        <AdminHeader staffs={this.props.user.users} />
        <div>
          <AdminSearch
            staffs={this.props.user.users}
            customFunc={this.filterStaff}
          />
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
              <th>Edit</th>
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
