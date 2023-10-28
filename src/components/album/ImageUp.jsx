import React from "react";
import { Button } from "@mui/material";
import "./ImageUp.css";
import storage from "../../firebase";
import { ref } from "firebase/storage";

const ImageUp = () => {
  const OnFileUploadToFirebase = (e) => {
    console.log(e.target.files);
    const storageRev = ref(storage, "image/");
  };

  return (
    <>
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
    </>
  );
};

export default ImageUp;
