import axios from "axios";
import data from "../../../Components/AdminView/Pages/Administration/Users.json";

export const GET_USERS = "GET_USERS";
export const SELECT_USER = "SELECT_USER";
export const ADD_ADMIN_USER = "ADD_ADMIN_USER";
export const GET_PERMISSIONS = "GET_PERMISSIONS";
export const UPDATE_ADMIN_USER = "UPDATE_ADMIN_USER";

const ROOT_API_URL = "https://localhost:44350/api";
//`https://tscramembershipportalapi-dev.azurewebsites.net/api`;

export function fetchUsers() {
  return function(dispatch) {
    // axios.get(`${ROOT_API_URL}/GetMembershipTypes`)
    //     .then((response) => dispatch({
    //         type: GET_MEMBERSHIPTYPES,
    //         membershipTypes: response.data
    //     })).catch((response) => {
    //         console.log(response);
    //     })
    dispatch({
      type: GET_USERS,
      users: data
    });
  };
}

export function getPermissions() {
  // return {
  //     type: GET_PERMISSIONS,
  //     payload: axios.get('https://tscramembershipportalapi-dev.azurewebsites.net/api/ManageUsers/GetPermissions')
  // }
  return function(dispatch) {
    axios
      .get(
        "https://tscramembershipportalapi-dev.azurewebsites.net/api/ManageUsers/GetPermissions"
      )
      .then(response =>
        dispatch({
          type: GET_PERMISSIONS,
          permissions: response.data
        })
      )
      .catch(response => {
        console.log(response);
      });
  };
}

export function addAdminUser(user) {
  data.push(user);
  return {
    type: ADD_ADMIN_USER,
    // payload: axios.post('', newUser)
    users: data
  };
}

export function updateAdminUser(id, updatedUser) {
  // return function(dispatch) {
  //   axios
  //     .put(
  //       "url",{is,updatedUser}
  //     )
  //     .then(response =>
  //       dispatch({
  //         type: GET_PERMISSIONS,
  //         users: response.data
  //       })
  //     )
  // };
  let index = data.findIndex(user => {
    return user.UserID === id;
  });
  data[index] = updatedUser;
  return {
    type: UPDATE_ADMIN_USER,
    users: data
  };
}
