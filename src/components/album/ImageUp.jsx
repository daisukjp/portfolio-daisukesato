import React, { useState } from "react";
import {
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import storage from "../../firebase";
import { ref, uploadBytesResumable } from "firebase/storage";

const ImageUp = () => {
  const [loading, setLoading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [selectedTag, setSelectedTag] = useState("");

  const OnFileUploadToFirebase = (e) => {
    if (!selectedTag) {
      alert("Please select a tag before uploading.");
      return;
    }

    const file = e.target.files[0];
    const storageRef = ref(storage, "image/" + file.name);

    const metadata = {
      contentType: file.type,
      customMetadata: {
        tag: selectedTag,
      },
    };

    const uploadImage = uploadBytesResumable(storageRef, file, metadata);

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
    <Box mt={5} textAlign="center">
      {loading ? (
        <Typography variant="h5">Uploading...</Typography>
      ) : (
        <>
          {isUploaded ? (
            <Typography variant="h5">Uploaded</Typography>
          ) : (
            <Box>
              <Typography variant="h4">Image Uploader</Typography>
              <Typography variant="subtitle1">JPEG or PNG file</Typography>
              <FormControl variant="outlined" style={{ marginTop: 20 }}>
                <InputLabel id="tag-label">Tag</InputLabel>
                <Select
                  labelId="tag-label"
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  label="Tag"
                  style={{ width: "200px" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="fuwa">Fuwa</MenuItem>
                  <MenuItem value="lucy">Lucy</MenuItem>
                </Select>
              </FormControl>
              <Box mt={3}>
                <input
                  accept=".png, .jpg, .jpeg"
                  style={{ display: "none" }}
                  id="raised-button-file"
                  multiple
                  type="file"
                  onChange={OnFileUploadToFirebase}
                />
                <label htmlFor="raised-button-file">
                  <Button variant="contained" component="span">
                    Select File
                  </Button>
                </label>
              </Box>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default ImageUp;
