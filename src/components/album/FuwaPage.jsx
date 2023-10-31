import React, { useEffect, useState } from "react";
import storage from "../../firebase";
import { Grid, Dialog, Pagination, CircularProgress } from "@mui/material";
import { getDownloadURL, ref, listAll, getMetadata } from "firebase/storage";
import Header from "./Header";

const fireStorage = storage;
const gsReference = ref(
  fireStorage,
  "gs://image-iploader-a08c8.appspot.com/image"
);

const IMAGES_PER_PAGE = 10;

const FuwaPage = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listAll(gsReference)
      .then((res) => {
        const metadataPromises = res.items.map((item) =>
          getMetadata(item).then((metadata) => {
            if (
              metadata.customMetadata &&
              metadata.customMetadata.tag === "fuwa"
            ) {
              return getDownloadURL(item);
            }
            return null;
          })
        );

        Promise.all(metadataPromises).then((urls) => {
          const validUrls = urls.filter((url) => url !== null);
          setImages(validUrls.reverse());
        });
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
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
      <Header />
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15rem",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <div style={{ maxWidth: "800px", margin: "auto", marginTop: "10rem" }}>
          <Grid container spacing={3} style={{ padding: "2rem" }}>
            {displayedImages.map((imgUrl, index) => (
              <Grid item xs={6} md={3} key={index}>
                <img
                  src={imgUrl}
                  alt={`Image ${index}`}
                  style={{ width: "100%" }}
                  onClick={() => handleImageClick(imgUrl)}
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
        </div>
      )}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <img src={selectedImage} alt="Selected" style={{ width: "100%" }} />
      </Dialog>
    </>
  );
};

export default FuwaPage;
