export const USER_LOGIN = "@USER/LOGIN";
export const USER_LOGOUT = "@USER/LOGOUT";

export type UserState = {
  isLoggedIn: boolean;
};

type UserLoginAction = {
  type: typeof USER_LOGIN;
};

type UserLogoutAction = {
  type: typeof USER_LOGOUT;
};

export type UserAction = UserLoginAction | UserLogoutAction;
