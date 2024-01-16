import React, { useEffect, useState } from "react";
import { Grid, Dialog, Pagination } from "@mui/material";
import { getDownloadURL, ref, listAll, getMetadata } from "firebase/storage";
import storage from "../../../firebase";

const IMAGES_PER_PAGE = 21; // 1ページあたりの画像数

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const fireStorage = storage;
  const gsReference = ref(
    fireStorage,
    "gs://image-iploader-a08c8.appspot.com/image"
  );

  useEffect(() => {
    listAll(gsReference)
      .then((res) => {
        const metadataPromises = res.items.map((item) =>
          getMetadata(item).then((metadata) => {
            if (
              metadata.customMetadata &&
              metadata.customMetadata.tag !== "test"
            ) {
              return getDownloadURL(item).then((url) => ({
                url,
                tag: metadata.customMetadata.tag,
              }));
            }
            return null;
          })
        );

        Promise.all(metadataPromises).then((items) => {
          const validItems = items.filter((item) => item !== null);
          setImages(validItems);
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleImageClick = (imgUrl) => {
    setSelectedImage(imgUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const displayedImages = images.slice(
    (currentPage - 1) * IMAGES_PER_PAGE,
    currentPage * IMAGES_PER_PAGE
  );

  return (
    <>
      <Grid container spacing={0} style={{ padding: "0", margin: "0" }}>
        {displayedImages.map((image, index) => (
          <Grid item xs={4} key={index}>
            <img
              src={image.url}
              alt={`Tagged as ${image.tag}`}
              style={{
                width: "100%",
                aspectRatio: "1/1",
                objectFit: "cover",
                display: "block",
                border: "0.1px solid #333333",
              }}
              onClick={() => handleImageClick(image.url)}
            />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(images.length / IMAGES_PER_PAGE)}
        page={currentPage}
        onChange={(event, value) => setCurrentPage(value)}
        style={{
          marginTop: "1rem",
          justifyContent: "center",
          display: "flex",
        }}
      />
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <img src={selectedImage} alt="Selected" style={{ width: "100%" }} />
      </Dialog>
    </>
  );
};

export default ImageGallery;
