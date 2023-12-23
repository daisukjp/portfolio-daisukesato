import React from "react";
import { Avatar, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { WomanOutlined, ManOutlined, SmileOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";

const { Title, Paragraph } = Typography;

const ProfileCard = ({ avatar, name, gender }) => {
  return (
    <Row align="center" style={{ textAlign: "center" }}>
      <Col
        style={{
          marginBottom: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar size={84} icon={<UserOutlined />} src={avatar} />
        <Paragraph style={{ marginBottom: 8, marginTop: 8 }}>
          <strong>{name}</strong>
        </Paragraph>
        <Paragraph style={{ marginBottom: 1 }}>
          {gender === "male" ? <ManOutlined /> : <WomanOutlined />}{" "}
          <strong>{gender}</strong>
        </Paragraph>
      </Col>
    </Row>
  );
};

export default ProfileCard;
