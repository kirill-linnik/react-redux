import { Button, DatePicker, Modal } from "antd";
import React, { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { login2, logout } from "../store/actions/userAction";

const { RangePicker } = DatePicker;

const Main: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const onLoginClick = () => {
    dispatch(login2());
  };

  const onLogoutClick = () => {
    dispatch(logout());
  };
  return (
    <>
      <Button onClick={() => onLoginClick()}>Login</Button>{" "}
      <Button onClick={() => onLogoutClick()}>Logout</Button>{" "}
      <Button onClick={() => setIsModalVisible(true)}>Open modal</Button>
      <br />
      login status: {user.isLoggedIn === true ? "in" : "out"}
      <br />
      <RangePicker />
      <Modal
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={() => setIsModalVisible(false)}
      >
        test modal
      </Modal>
    </>
  );
};

export default Main;
