import logo from "./logo.svg";
import "./App.css";
import {
  Layout,
  Divider,
  Calendar,
  Form,
  Button,
  Input,
  InputNumber,
  Image,
  Col,
  Row,
  Progress,
} from "antd";
import React from "react";

const { Header } = Layout;
const onFinish = (values) => {
  console.log(values);
};

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 12,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} 必須介於 ${min} 和 ${max}之間",
  },
};

function App() {
  const [complete, setcomplete] = React.useState(0);
  const [formValid, setFormValid] = React.useState(true);

  function onFieldsChange(changedFields, allFields) {
    let result = 25;
    let isValid = true;
    allFields.forEach((element) => {
      if (element.value) {
        result += 25;
      }
      setcomplete(result);
    });
    allFields.forEach((field) => {
      if (!field.validating && field.errors.length > 0) {
        isValid = false;
      }
    });
    setFormValid(isValid);
  }
  return (
    <div>
      <Header style={{ color: "white" }}>餐廳訂餐系統</Header>
      <div style={{ display: "flex" }}>
        <Image
          style={{ flex: 1 }}
          src="https://s.yimg.com/ny/api/res/1.2/qvli2rWlA7tg6_AOeh8hRg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/zh-Hant-TW/homerun/nownews.com/b618a9f4d4119633d8a09a7e4e810c43"
          preview={false}
        />

        <Image
          style={{ flex: 1, transform: "scaleX(-1)" }}
          src="https://s.yimg.com/ny/api/res/1.2/qvli2rWlA7tg6_AOeh8hRg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/zh-Hant-TW/homerun/nownews.com/b618a9f4d4119633d8a09a7e4e810c43"
          preview={false}
        />
      </div>

      <Divider orientation="left">請選擇日期</Divider>
      <Calendar fullscreen={false} />
      <Divider orientation="left">請填寫資訊</Divider>
      <Row>
        <Col
          xs={24}
          md={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Progress type="circle" percent={complete} size={250} />
        </Col>
        <Col xs={24} md={12} style={{ padding: "10px" }}>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            onFieldsChange={onFieldsChange}
            style={{
              maxWidth: "100%",
            }}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "name"]}
              label="姓名"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="請輸入姓名" />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[
                {
                  required: true,

                  type: "email",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "people"]}
              label="人數"
              rules={[
                {
                  required: true,

                  type: "number",
                  min: 1,
                  max: 99,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>

            <Form.Item name={["user", "comment"]} label="備註">
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                disabled={!formValid || complete !== 100}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default App;
