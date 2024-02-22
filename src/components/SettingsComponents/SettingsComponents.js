import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Avatar,
  Button,
  Paper,
  Typography,
  Switch,
  IconButton,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(3),
  margin: theme.spacing(3),
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[3],
  backgroundColor: theme.palette.background.paper,
}));

const ProfileWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(2),
}));

const ProfileImage = styled("div")(({ theme }) => ({
  marginRight: theme.spacing(2),
  width: theme.spacing(10),
  height: theme.spacing(10),
  borderRadius: "50%",
  background: theme.palette.primary.main,
}));

const OtherSettingsWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(3),
}));

const ContentWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const Header = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const Category = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

const Option = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.grey[200],
  },
}));

const SettingsComponents = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <StyledPaper elevation={3}>
      <ProfileWrapper>
        <ProfileImage></ProfileImage>
        <div className="profile_info">
          <Typography variant="h6">James</Typography>
          <Typography variant="body1">james123@gmail.com</Typography>
          <Typography variant="body2">Occupation</Typography>
        </div>
        <Button variant="contained" color="secondary">
          Upgrade Now - Go Pro
        </Button>
      </ProfileWrapper>

      <OtherSettingsWrapper>
        <ContentWrapper>
          <Header>
            <Typography variant="h5">Settings</Typography>
          </Header>
          <div className="options">
            <Category>
              <Option>
                <Typography variant="body1">Dark Mode</Typography>
                <Switch
                  checked={darkMode}
                  onChange={handleDarkModeToggle}
                  color="primary"
                />
              </Option>
            </Category>

            <Category>
              <Option>
                <Typography variant="body1">Notification</Typography>
                <IconButton aria-label="toggle-notification">
                  <KeyboardArrowRightIcon />
                </IconButton>
              </Option>
              <Option>
                <Typography variant="body1">Privacy</Typography>
                <IconButton aria-label="toggle-privacy">
                  <KeyboardArrowRightIcon />
                </IconButton>
              </Option>
              <Option>
                <Typography variant="body1">Security</Typography>
                <IconButton aria-label="toggle-security">
                  <KeyboardArrowRightIcon />
                </IconButton>
              </Option>
            </Category>

            <Category>
              <Option>
                <Typography variant="body1">Account</Typography>
                <IconButton aria-label="toggle-account">
                  <KeyboardArrowRightIcon />
                </IconButton>
              </Option>
              <Option>
                <Typography variant="body1">Help</Typography>
                <IconButton aria-label="toggle-help">
                  <KeyboardArrowRightIcon />
                </IconButton>
              </Option>
              <Option>
                <Typography variant="body1">About</Typography>
                <IconButton aria-label="toggle-about">
                  <KeyboardArrowRightIcon />
                </IconButton>
              </Option>
            </Category>
          </div>
        </ContentWrapper>
      </OtherSettingsWrapper>
    </StyledPaper>
  );
};

export default SettingsComponents;
