import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { UserAction, USER_LOGIN, USER_LOGOUT } from "../types/userTypes";

type UserThunk = ThunkAction<void, RootState, unknown, UserAction>;

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

export const login2 = (): UserThunk => async (dispatch) => {
  dispatch(userLogin());
};

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
