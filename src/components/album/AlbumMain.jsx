import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Typography, Box } from "@mui/material";
import Header from "./Header";
import fuwaAvatar from "../../assets/IMG_6639.jpeg";
import lucyAvatar from "../../assets/lucy.jpg";
import youtubeIcon from "../../assets/yotubeicon.png";
import sorenAvatar from "../../assets/soren.jpg";

const AlbumMain = () => {
  return (
    <>
      <Header />
      <Box display="flex" flexDirection="column" alignItems="center" mt={20}>
        <Typography variant="h4">Select your love:)</Typography>
        <Box display="flex" flexDirection="row" mt={3}>
          <Box mx={2}>
            <Link
              to="./soren"
              style={{
                textDecoration: "none",
                textAlign: "center",
                display: "block",
              }}
            >
              <Avatar style={{ width: 80, height: 80 }} src={sorenAvatar} />
              <Typography variant="h6" style={{ marginTop: 8 }}>
                Soren
              </Typography>
            </Link>
          </Box>
          <Box mx={2}>
            <Link
              to="./lucy"
              style={{
                textDecoration: "none",
                textAlign: "center",
                display: "block",
              }}
            >
              <Avatar style={{ width: 80, height: 80 }} src={lucyAvatar} />
              <Typography variant="h6" style={{ marginTop: 8 }}>
                Lucy
              </Typography>
            </Link>
          </Box>
          <Box mx={2}>
            <Link
              to="./fuwa"
              style={{
                textDecoration: "none",
                textAlign: "center",
                display: "block",
              }}
            >
              <Avatar style={{ width: 80, height: 80 }} src={fuwaAvatar} />
              <Typography variant="h6" style={{ marginTop: 8 }}>
                Fuwa
              </Typography>
            </Link>
          </Box>
        </Box>
        <Box style={{ marginTop: "5rem" }}>
          <Link
            to="https://www.youtube.com/@daisukjp1"
            style={{
              textDecoration: "none",
              textAlign: "center",
              display: "block",
            }}
            target="_blank"
          >
            <img style={{ width: 90, height: 60 }} src={youtubeIcon} />
            {/* <Typography variant="h6" style={{ marginTop: 8 }}>
            
            </Typography> */}
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default AlbumMain;
