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
  