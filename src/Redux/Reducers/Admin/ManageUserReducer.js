import {
  GET_USERS,
  ADD_ADMIN_USER,
  GET_PERMISSIONS,
  UPDATE_ADMIN_USER
} from "../../Actions/Admin/ManageUserActions";

const initialState = {
  users: [],
  permissions: []
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.users
      };
    case ADD_ADMIN_USER:
      return {
        ...state,
        users: action.users
      };
    case GET_PERMISSIONS:
      return {
        ...state,
        permissions: action.permissions
      };
    case UPDATE_ADMIN_USER:
      return {
        ...state,
        users: action.users
      };
    default:
      return state;
  }
};
