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
    const files = e.target.files;
    if (!selectedTag) {
      alert("Please select a tag before uploading.");
      return;
    }
    if (files.length === 0) {
      alert("Please select one or more files to upload.");
      return;
    }

    // Set loading to true and isUploaded to false at the start of the upload process
    setLoading(true);
    setIsUploaded(false);

    // Convert the FileList to an array and iterate over it
    Array.from(files).forEach((file) => {
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
          // This will be called for each successful upload
          // If you want to track when all files are uploaded you'll need to implement additional logic
          console.log(`${file.name} uploaded successfully`);
        }
      );
    });

    // Once all the files are being uploaded, you could set loading to false
    // However, if you want to track the actual completion of all uploads, you'll need a more complex state management
    setLoading(false);
    setIsUploaded(true);
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
