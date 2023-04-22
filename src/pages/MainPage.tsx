import { Button, DatePicker, Form, Input, Modal } from "antd";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { InfoBlock } from "../components/InfoBlock";
import { useAppDispatch, useAppSelector } from "../store";
import { login, logout } from "../store/actions/userAction";

const { RangePicker } = DatePicker;

const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();
  const user = useAppSelector((state) => state.user);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [form] = Form.useForm();

  const onLoginClick = () => {
    dispatch(login());
  };

  const onLogoutClick = () => {
    dispatch(logout());
  };

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log("Success:", values);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  return (
    <>
      <InfoBlock info={user.info} />
      <Button onClick={() => onLoginClick()}>Login</Button>{" "}
      <Button onClick={() => onLogoutClick()}>Logout</Button>{" "}
      <Button onClick={() => setIsModalVisible(true)}>Open modal</Button>
      <br />
      <Button
        onClick={() => {
          i18n.changeLanguage("ET");
        }}
      >
        Lang: ET
      </Button>
      /
      <Button
        onClick={() => {
          i18n.changeLanguage("EN");
        }}
      >
        Lang: EN
      </Button>
      : {t("welcome")} <br />
      login status: {user.isLoggedIn === true ? "in" : "out"}
      <br />
      <RangePicker
        format={"DD.MM.YYYY hh:mm"}
        showTime={{
          minuteStep: 5,
        }}
      />      
      <Modal
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={() => setIsModalVisible(false)}
      >
        <Form form={form} name="dynamic_rule">
          <Form.Item
            name="username"
            label={t("test")}
            rules={[
              {
                required: true,
                message: t("test"),
              },
              {
                type: "email",
                message: t("test2"),
              },
            ]}
          >
            <Input placeholder="Please input your name" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={() => onCheck()}>
              Check
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default MainPage;
