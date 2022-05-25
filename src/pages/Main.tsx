import { Button } from "antd";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { login, logout } from "../store/actions/userAction";

const Main: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const onLoginClick = () => {
    dispatch(login());
  };

  const onLogoutClick = () => {
    dispatch(logout());
  };
  return (
    <>
      <Button onClick={() => onLoginClick()}>Login</Button>{" "}
      <Button onClick={() => onLogoutClick()}>Logout</Button>
      <br />
      login status: {user.isLoggedIn === true ? "in" : "out"}
    </>
  );
};

export default Main;
