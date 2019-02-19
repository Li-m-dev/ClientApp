import React, { Component } from "react";
import {
  Grid,
  GridColumn as Column,
  GridToolbar
} from "@progress/kendo-react-grid";
import "@progress/kendo-theme-default/dist/all.css";
import { filterBy } from "@progress/kendo-data-query";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { connect } from "react-redux";
import {
  fetchUsers,
  addAdminUser,
  getPermissions
} from "../../../../Redux/Actions/Admin/ManageUserActions";
import { Switch } from "@progress/kendo-react-inputs";
import AdminHeader from "../../AdminHeader";
import cellWithEditing from "./CellWithEditing";
import UserForm from "./UserForm";

class MangeUsers extends Component {
  state = {
    toggled: true,
    filter: {
      logic: "and",
      filters: [
        { field: "IsActive", operator: "eq", value: true, ignoreCase: true }
      ]
    },
    skip: 0,
    take: 10,
    userInEdit: undefined
  };

  componentDidMount() {
    this.props.fetchUsers();
    this.props.getPermissions();
    console.log("manage user page:", this.props);
  }

  // export grid data to excel
  _export;
  export = () => {
    this._export.save();
  };

  handleChange = event => {
    this.setState({ toggled: !this.state.toggled });
    this.setState({
      filter: {
        logic: "and",
        filters: [
          {
            field: "IsActive",
            operator: "eq",
            value: !this.state.toggled,
            ignoreCase: true
          }
        ]
      }
    });
  };
  pageChange = event => {
    this.setState({
      skip: event.page.skip,
      take: event.page.take
    });
  };
  edit = dataItem => {
    // debugger;
    this.setState({ userInEdit: this.cloneUser(dataItem) });
  };

  remove = dataItem => {
    const users = this.props.user.users.slice();
    const index = users.findIndex(p => p.UserID === dataItem.UserID);
    if (index !== -1) {
      this.props.user.users.splice(index, 1);
      // this.setState({
      //     products: products
      // });
    }
  };
  cloneUser(user) {
    return Object.assign({}, user);
  }
  dialogTitle() {
    return `${
      this.state.userInEdit.UserID === undefined ? "Add" : "Edit"
    } user`;
  }
  cancel = () => {
    this.setState({ userInEdit: undefined });
  };
  insert = () => {
    this.setState({
      userInEdit: {
        UserID: "",
        FirstName: "",
        LastName: "",
        PerimissionID: "",
        Email: "",
        LastLogin: Date.now(),
        Phone: "",
        Permission: {
          PerimissionID: 1,
          Description: ""
        },
        IsActive: true
      }
    });
  };

  // save = () => {
  //     this.props.addAdminUser()
  // }

  headerSelectionChange = event => {
    const checked = event.syntheticEvent.target.checked;
    this.props.user.users.forEach(item => (item.selected = checked));
    this.forceUpdate();
  };

  render() {
    // console.log(this.state)
    // console.log(this.props.user)
    return (
      <div>
        <AdminHeader />
        <ExcelExport
          data={this.props.user.users}
          ref={exporter => {
            this._export = exporter;
          }}
        >
          <Grid
            style={{ height: "80vh" }}
            data={filterBy(this.props.user.users, this.state.filter).slice(
              this.state.skip,
              this.state.take + this.state.skip
            )}
            filterable
            filter={this.state.filter}
            onFilterChange={e => {
              this.setState({
                filter: e.filter
              });
            }}
            skip={this.state.skip}
            take={this.state.take}
            total={this.props.user.users.length}
            pageable={true}
            onPageChange={this.pageChange}
          >
            <GridToolbar>
              <button onClick={this.insert} className="k-button">
                Add New
              </button>
              <button
                title="Export PDF"
                className="k-button"
                onClick={this.export}
              >
                Export to Excel
              </button>

              <Switch
                filter="boolean"
                onChange={this.handleChange}
                onLabel={"Active"}
                offLabel={"InActive"}
                checked={this.state.toggled}
              />
            </GridToolbar>
            {/* {console.log(this.state.data)} */}
            <Column
              field="FirstName"
              title="First Name"
              width="130px"
              filter="text"
            />
            <Column
              field="LastName"
              title="Last Name"
              width="130px"
              filter="text"
            />
            <Column
              field="Permission.Description"
              title="Permission"
              width="130px"
              filter="text"
            />
            <Column field="Email" width="130px" filter="text" format="{0:c}" />
            <Column
              field="LastLogin"
              width="130px"
              filter="date"
              format="{0:d}"
            />
            <Column field="Phone" width="130px" filter="text" />
            <Column
              field="IsActive"
              title="Active User"
              width="130px"
              filterable={false}
            />
            <Column
              field="Edit"
              filterable={false}
              cell={cellWithEditing(this.edit, this.remove)}
            />
          </Grid>
        </ExcelExport>
        {this.state.userInEdit && (
          <UserForm
            dataItem={this.state.userInEdit}
            save={this.save}
            cancel={this.cancel}
            addAdminUser={this.props.addAdminUser}
            permissions={this.props.user.permissions}
          />
        )}
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
  { fetchUsers, addAdminUser, getPermissions }
)(MangeUsers);
