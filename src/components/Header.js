// Import the React library to use JSX syntax and create React components
import React from 'react';

// Import the custom CSS styles for the Header component
import './Header.css';

// Create a functional component named Header
const Header = () => {
    // The component's return statement containing JSX
    return (
      // Outer div with a class name "Header-containerf"
      <div className="Header-containerf">
        {/* Inner div with a class name "content-containerf" */}
        <div className="content-containerf">
          {/* Heading 1 with class name "h1fit-f" */}
          <h1 className="h1fit-f">Fit<span className="span-f">Buddy+</span></h1>
          {/* Heading 3 with class name "h3-f" */}
          <h3 className="h3-f">Your Ultimate Fitness<br /> And Nutrition Companion</h3>
          {/* Paragraph with class name "p-f" */}
          <p className="p-f">Explore Fitness! Discover Your Workout Journey.</p>
        </div>
  
        {/* Inner div with a class name "image-containerf" */}
        <div className="image-containerf">
          {/* Image tag with source "../Assets/workoutt.jpg", alt text "logo", and class name "Header-imagef" */}
          <img
            src='../Assets/workoutt.jpg'
            alt="logo"
            className="Header-imagef"
          />
        </div>
      </div>
      
    );
  };

  // Export the Header component so it can be used in other parts of the application
export default Header;