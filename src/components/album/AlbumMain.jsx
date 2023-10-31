import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Typography, Box } from "@mui/material";
import Header from "./Header";
import fuwaAvatar from "../../assets/IMG_6639.jpeg";
import lucyAvatar from "../../assets/lucy.jpg";

const AlbumMain = () => {
  return (
    <>
      <Header />
      <Box display="flex" flexDirection="column" alignItems="center" mt={20}>
        <Typography variant="h4">Select your love:)</Typography>
        <Box display="flex" flexDirection="row" mt={3}>
          <Box mx={2}>
            <Link
              to="./lucypage"
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
              to="./fuwapage"
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
      </Box>
    </>
  );
};

export default AlbumMain;
