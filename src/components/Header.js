import React from "react";

import "./Header.css";

// Create a functional component named Header

const Header = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="all-header">
      <button className="go-back-button" onClick={handleGoBack}>
        Go Back
      </button>
      <div className="Header-containerf">
        {/* Inner div with a class name "content-containerf" */}
        <div className="content-containerf">
          <h1 className="h1fit-f">
            Fit<span className="span-f">Buddy+</span>
          </h1>
          {/* Heading 3 with class name "h3-f" */}
          <h3 className="h3-f">
            Your Ultimate Fitness
            <br /> And Nutrition Companion
          </h3>
          {/* Paragraph with class name "p-f" */}
          <p className="p-f">Explore Fitness! Discover Your Workout Journey.</p>
          <br />
          <br />
          <br />
          <br />

          <br />
          <br />
          <br />
          <br />
          <h4 className="p1-f">Exercises To Keep You Fit🦾</h4>
        </div>

        {/* Inner div with a class name "image-containerf" */}
        <div className="image-containerf">
          {/* Image tag with source "../Assets/workoutt.jpg", alt text "logo", and class name "Header-imagef" */}
          <img
            src="../Assets/workoutt.jpg"
            alt="logo"
            className="Header-imagef"
          />
        </div>
      </div>
    </div>
  );
};

// Export the Header component so it can be used in other parts of the application
export default Header;
