// Import React library and Material-UI components
import React from "react";
import {
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Button,
  Menu,
} from "@mui/material";

// Import Material-UI icons for social media platforms
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import RedditIcon from "@mui/icons-material/Reddit";
import LinkIcon from "@mui/icons-material/Link";

// Define the functional component named ShareBtn
export default function ShareBtn() {
  // Declare state variables for managing the menu's anchor element and its open state
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openBtn = Boolean(anchorEl);

  // Function to handle opening the menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Function to handle closing the menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Function to handle sharing the workout on social media platforms or copying the link
  const handleShare = (e) => {
    e.preventDefault();

    // Get the current page URL and encode it for use in social media share links
    const ahref = window.location.href;
    const encodedAhref = encodeURIComponent(ahref);
    var link;

    // Create the share link based on the clicked social media platform
    switch (e.currentTarget.id) {
      case "facebook":
        link = `https://www.facebook.com/sharer/sharer.php?u=${ahref}`;
        open(link);
        break;

      case "twitter":
        link = `https://twitter.com/intent/tweet?url=${encodedAhref}`;
        open(link);
        break;

      case "reddit":
        link = `https://www.reddit.com/submit?url=${encodedAhref}`;
        open(link);
        break;

      case "copy":
        // Copy the URL to the clipboard
        navigator.clipboard.writeText(ahref);
        break;

      default:
        break;
    }
  };

  // Function to open a social media link in a new tab or window
  const open = (socialLink) => {
    window.open(socialLink, "_blank");
  };

  // Return the JSX code for the component
  return (
    <>
      {/* Share Workout button */}
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Share Workout
      </Button>

      {/* Share Workout menu */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={openBtn}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuList dense={true}>
          {/* Menu item for sharing on Facebook */}
          <MenuItem button id="facebook" onClick={handleShare}>
            <ListItemIcon>
              <FacebookIcon />
            </ListItemIcon>
            <ListItemText primary="Facebook" />
          </MenuItem>

          {/* Menu item for sharing on Twitter */}
          <MenuItem button id="twitter" onClick={handleShare}>
            <ListItemIcon>
              <TwitterIcon />
            </ListItemIcon>
            <ListItemText primary="Twitter" />
          </MenuItem>

          {/* Menu item for sharing on Reddit */}
          <MenuItem button id="reddit" onClick={handleShare}>
            <ListItemIcon>
              <RedditIcon />
            </ListItemIcon>
            <ListItemText primary="Reddit" />
          </MenuItem>

          {/* Menu item for copying the link */}
          <MenuItem button id="copy" onClick={handleShare}>
            <ListItemIcon>
              <LinkIcon />
            </ListItemIcon>
            <ListItemText primary="Copy Link" />
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
