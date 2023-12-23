import React, { useEffect, useState } from "react";
import storage from "../../../firebase";
import { useParams } from "react-router-dom";
import { Grid, Dialog, Pagination } from "@mui/material";
import { getDownloadURL, ref, listAll, getMetadata } from "firebase/storage";
import Header from "../Header";
import ProfileCard from "../profile/ProfileCard";
import { tagInfo } from "../AlbumMain";

const fireStorage = storage;
const gsReference = ref(
  fireStorage,
  "gs://image-iploader-a08c8.appspot.com/image"
);

const IMAGES_PER_PAGE = 20;

const TaggedImagePage = ({ match }) => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const { tag } = useParams();
  const profile = tagInfo[tag];
  console.log(profile);

  useEffect(() => {
    listAll(gsReference)
      .then((res) => {
        const metadataPromises = res.items.map((item) =>
          getMetadata(item).then((metadata) => {
            // Only proceed if the tag matches
            if (
              metadata.customMetadata &&
              metadata.customMetadata.tag === tag
            ) {
              // Return an object with both the URL and the update time
              return getDownloadURL(item).then((url) => ({
                url,
                updated: metadata.updated,
              }));
            }
            return null;
          })
        );

        Promise.all(metadataPromises).then((items) => {
          // Filter out nulls and sort by the updated time in descending order
          const validItems = items.filter((item) => item !== null);
          validItems.sort((a, b) => new Date(b.updated) - new Date(a.updated));

          // Extract the URLs for display
          const sortedUrls = validItems.map((item) => item.url);
          setImages(sortedUrls);
        });
      })
      .catch((err) => console.log(err));
  }, [tag]); // Add the tag to the dependency array

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
      <div style={{ maxWidth: "800px", margin: "auto", marginTop: "8rem" }}>
        <ProfileCard
          avatar={profile.avatar}
          name={profile.name}
          gender={profile.gender}
          repositoryStars={1000}
          blogViews={10185}
          youtubeSubscribers={53300}
        />
        <Grid container spacing={0} style={{ padding: "0", margin: "0" }}>
          {displayedImages.map((imgUrl, index) => (
            <Grid item xs={4} key={index}>
              <img
                src={imgUrl}
                alt={`Image ${index}`}
                style={{
                  width: "100%",
                  aspectRatio: "1/1",
                  objectFit: "cover",
                  display: "block",
                  border: "0.1px solid #333333",
                }}
                onClick={() => handleImageClick(imgUrl)}
              />
            </Grid>
          ))}
        </Grid>

        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <img
            src={selectedImage}
            alt="Selected"
            style={{ width: "auto", height: "auto" }}
          />
        </Dialog>
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
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <img src={selectedImage} alt="Selected" style={{ width: "100%" }} />
      </Dialog>
    </>
  );
};

export default TaggedImagePage;
