import axios from "axios";
import { useEffect, useState } from "react";
import { RANDOM_USER_API_ENDPOINT } from "../constant";
import { AppBar, Toolbar, Box, Typography, Avatar } from "@mui/material";
import winHomeLogo from "../assets/win-home.svg";
import addList from "../assets/add-list.svg";
import { steps } from "../constant";

const Header = ({ setStep }) => {
  const [userData, setUserData] = useState([]);

  const getUserData = async (url) => {
    await axios.get(url).then((res) => setUserData(res.data));
  };

  useEffect(() => {
    getUserData(RANDOM_USER_API_ENDPOINT);
  }, []);

  const { results } = userData || {};
  const [firstElement] = results || [];
  const { name, picture } = firstElement || {};

  const handleClick = () => {
    setStep(steps.AddTask);
  };

  return (
    <>
      <AppBar
        enableColorOnDark
        sx={{
          backgroundColor: "#005981",
          position: "fixed",
          zIndex: 99,
          top: "0",
          backgroundImage: "none",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            height: "135px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img
              src={winHomeLogo}
              width={121.44}
              height={55.6}
              alt="Win Home Logo"
            />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={addList}
              alt="Add List"
              style={{ cursor: "pointer" }}
              onClick={handleClick}
            />
            {picture && (
              <Avatar
                alt="User Avatar"
                src={picture?.medium}
                sx={{
                  width: { xs: 40, sm: 68 },
                  height: { xs: 40, sm: 68 },
                  mr: 1,
                  ml: 3,
                }}
              />
            )}
            {name && <Typography>{`${name?.first} ${name?.last}`}</Typography>}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
