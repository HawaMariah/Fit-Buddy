// Import React library and Material-UI components
import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// Define the functional component named UserInput
function UserInput({ bodyPartDD, setBodyPart, bodyPart, label }) {

    // Function to handle changes in the Select input
    const handleChange = (event) => {
      setBodyPart(event.target.value);
    };
  
    // Return JSX code for rendering the UserInput component
    return (
      // Container to manage the width of the form control
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          {/* Input label for the Select component */}
          <InputLabel id="bodyPart">{label}</InputLabel>
          {/* Select component */}
          <Select
            labelId="bodyPart"
            id="bodyPart"
            value={bodyPart}
            label="bodyPart"
            // Attach the handleChange function to handle changes in the Select component
            onChange={handleChange}
          >
            {/* Placeholder menu item to display when no option is selected */}
            <MenuItem key='blank' value="">--</MenuItem>
            {/* Dynamically generate MenuItem components from the bodyPartDD array */}
            {[...bodyPartDD].map((value) => <MenuItem key={value} value={value}>{value}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>
    );
  }
  
  // Export the UserInput component to use it in other parts of the application
  export default UserInput;