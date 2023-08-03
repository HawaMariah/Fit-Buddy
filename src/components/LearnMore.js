// Import the React library to use JSX syntax and create React components
import React from 'react';

// Import the Button component from MUI (Material-UI) library
import Button from "@mui/material/Button";

// Define the functional component named LearnMore and accept a prop named "name"
export default function LearnMore({ name }) {

    // Define a base URL for the search query
    const baseUrl = "https://www.google.com/search?"
  
    // Create a URLSearchParams object with the "q" parameter set to the value of the "name" prop
    const params = new URLSearchParams([
      ["q", name],
    ]);
  
    // Define a function named "handleClick" that will be triggered when the button is clicked
    function handleClick() {
      // Build the search link by combining the base URL and the search parameters
      let link = `${baseUrl}${params.toString()}`
      // Open the link in a new tab or window using "_blank" target
      window.open(link, "_blank");
    }
  
    // Return the JSX code, which is a Button component with "Learn More" label and an onClick event
    return (
      <Button size="medium" onClick={handleClick}>Learn More</Button>
    )
  }