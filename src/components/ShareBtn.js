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
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import RedditIcon from '@mui/icons-material/Reddit';
import LinkIcon from '@mui/icons-material/Link';

// Define the functional component named DropdownShareButton
export default function DropdownShareButton() {
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
  