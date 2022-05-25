import { Dispatch } from "react";
import { UserAction, USER_LOGIN, USER_LOGOUT } from "../types/userTypes";

function userLogin(): UserAction {
  return {
    type: USER_LOGIN,
  };
}

function userLogout(): UserAction {
  return {
    type: USER_LOGOUT,
  };
}

export function login() {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch(userLogin());
  };
}

export function logout() {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch(userLogout());
  };
}
