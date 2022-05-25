import {
  UserAction,
  UserState,
  USER_LOGIN,
  USER_LOGOUT,
} from "../types/userTypes";

const initialState: UserState = {
  isLoggedIn: false,
};

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
