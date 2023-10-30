import React, { useState } from "react";
import { Button } from "@mui/material";
import "./ImageUp.css";
import storage from "../../firebase";
import { ref, uploadBytes, uploadBytesResumable } from "firebase/storage";

const ImageUp = () => {
  const [loading, setLoading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const OnFileUploadToFirebase = (e) => {
    // console.log(e.target.files[0].name);
    const file = e.target.files[0];
    const storageRef = ref(storage, "image/" + file.name);
    // uploadBytes(storageRef, file).then((snapshot) => {
    //   console.log("Uploaded a blob or file!");
    // });
    const uploadImage = uploadBytesResumable(storageRef, file);

    uploadImage.on(
      "state_change",
      (snapshot) => {
        setLoading(true);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setLoading(false);
        setIsUploaded(true);
      }
    );
  };

  return (
    <>
      {loading ? (
        <h2>uploading.....</h2>
      ) : (
        <>
          {isUploaded ? (
            <h2>uploaded</h2>
          ) : (
            <div className="outerBox">
              <div className="title">
                <h2>Image uploader</h2>
                <p>Jpeg or Png file</p>
              </div>
              <div className="imageUplodeBox">
                <div className="imageLogoAndText">
                  <img alt="imagelogo" />
                  <p>drag＆drop</p>
                </div>
                <input
                  className="imageUploadInput"
                  multiple
                  name="imageURL"
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  onChange={OnFileUploadToFirebase}
                />
              </div>
              <p>Or</p>
              <Button variant="contained">
                Select file
                <input
                  className="imageUploadInput"
                  multiple
                  type="file"
                  onChange={OnFileUploadToFirebase}
                />
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ImageUp;
