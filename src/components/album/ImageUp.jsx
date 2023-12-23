import React, { useState } from "react";
import {
  Upload,
  Button,
  Select,
  Typography,
  Alert,
  Spin,
  Space,
  Divider,
} from "antd";
import {
  UploadOutlined,
  InstagramOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

import storage from "../../firebase";
import { ref, uploadBytesResumable } from "firebase/storage";

const { Option } = Select;

const ImageUp = () => {
  const [loading, setLoading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const OnFileUploadToFirebase = () => {
    if (!selectedTag || selectedTag === "") {
      setErrorMessage("Please select a tag before uploading.");
      return;
    }

    if (selectedFiles.length === 0) {
      setErrorMessage("Please select files before uploading.");
      return;
    }

    setLoading(true);
    setIsUploaded(false);

    selectedFiles.forEach((file) => {
      const storageRef = ref(storage, "image/" + file.name);

      const metadata = {
        contentType: file.type,
        customMetadata: {
          tag: selectedTag,
        },
      };

      const uploadImage = uploadBytesResumable(storageRef, file, metadata);

      uploadImage.on(
        "state_changed",
        (snapshot) => {
          // Handle progress updates here if you wish
        },
        (err) => {
          console.error(err);
          // If any upload fails, you could set a failed state here
        },
        () => {
          console.log(`${file.name} uploaded successfully`);
          setLoading(false);
          setIsUploaded(true);
          setErrorMessage(""); // Clear the error message
        }
      );
    });
  };

  const resetUpload = () => {
    setSelectedFiles([]);
    setIsUploaded(false);
    setErrorMessage("");
  };

  const onFileSelect = (file) => {
    setSelectedFiles((prevFiles) => [...prevFiles, file]);
    return false;
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "5rem",
        backgroundColor: "#fafafa",
        padding: "2rem",
        borderRadius: "1rem",
        boxShadow: "0 0 1rem rgba(0,0,0,0.1)",
        maxWidth: "500px",
        margin: "5rem auto",
      }}
    >
      <Typography.Title level={2} style={{ color: "#262626" }}>
        <InstagramOutlined /> Image Uploader
      </Typography.Title>
      <Divider />
      <Space direction="vertical" size="large">
        {errorMessage && <Alert message={errorMessage} type="error" />}
        {loading ? (
          <Spin tip="Uploading...">
            <Alert
              message="Please wait while we upload your images"
              description="This might take a few seconds."
              type="info"
            />
          </Spin>
        ) : (
          <>
            {isUploaded ? (
              <>
                <Alert
                  message={
                    <span>
                      <CheckCircleOutlined style={{ color: "lightgreen" }} />{" "}
                      Images uploaded successfully!
                    </span>
                  }
                  type="success"
                />
                <Button
                  style={{
                    backgroundColor: "#0095f6",
                    borderColor: "#0095f6",
                    color: "#fff",
                    marginTop: "1rem",
                    width: "100%",
                  }}
                  onClick={resetUpload}
                >
                  Upload More
                </Button>
              </>
            ) : (
              <div>
                <Typography.Text type="secondary" style={{ color: "#8e8e8e" }}>
                  JPEG or PNG files
                </Typography.Text>
                <Select
                  placeholder="Select a tag"
                  style={{ width: "100%", marginTop: 20 }}
                  onChange={(value) => setSelectedTag(value)}
                >
                  <Option value="fuwa">Fuwa</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="soren">Soren</Option>
                  <Option value="test">test</Option>
                </Select>
                <Upload
                  accept=".png, .jpg, .jpeg"
                  multiple
                  beforeUpload={onFileSelect}
                  showUploadList={false}
                >
                  <Button
                    icon={<UploadOutlined />}
                    style={{
                      backgroundColor: "#0095f6",
                      borderColor: "#0095f6",
                      color: "#fff",
                      marginTop: "1rem",
                      width: "100%",
                    }}
                  >
                    Select Files
                  </Button>
                </Upload>
                <Button
                  style={{
                    backgroundColor: "#0095f6",
                    borderColor: "#0095f6",
                    color: "#fff",
                    marginTop: "1rem",
                    width: "100%",
                  }}
                  onClick={OnFileUploadToFirebase}
                >
                  Upload Files
                </Button>
              </div>
            )}
          </>
        )}
      </Space>
    </div>
  );
};

export default ImageUp;
