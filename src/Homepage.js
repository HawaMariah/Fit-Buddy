import React from "react";
import myImage from "../src/images/home.jpg";
import YouTubeVideo from "./Youtube";

const Homepage = () => {
  const videoUrls = [
    "https://www.youtube.com/watch?v=v7AYKMP6rOE",
    "https://www.youtube.com/watch?v=itZMM5gCboo&ab_channel=Goodful",
    "https://www.youtube.com/watch?v=z_xEzYVCqWk&ab_channel=MadFit",
    "https://www.youtube.com/watch?v=LCyECbA3pUw&ab_channel=JeremyEthier",
    "https://www.youtube.com/watch?v=ruX4Le0kBng&ab_channel=Muscle%26Brawn",
    "https://www.youtube.com/watch?v=bTo4NrSriWw&ab_channel=TRAINWITHGAINSBYBRAINS",
  "https://www.youtube.com/watch?v=g47n-5DJcwo&ab_channel=NoCopyrightSoundFans",
  ];

  return (
    <div className="homepage">
      <div className="home-top">
        <div className="image-container">
          <div className="image-hover-effect">
            <div className="image-wrapper">
            <img className="image" src={myImage} alt="Home" />
            </div>
            <div className="hover-text">
              Get Fitty
              <br />
              With
              <br />
              FitBuddy!!
            </div>
          </div>
        </div>
        {/* Flip Box */}
        <div className="flip-box-container">
          <div class="flip-bx">
            <div class="front">
              <div class="inner">
                <div class="media">
                  <p>
                    Discover a variety of engaging workout routines: cardio,
                    yoga, and more...With detailed instructions and video
                    demonstrations to ensure awesome results.
                    <br />
                    <br />
                    Take control of your nutrition with healthy recipes,
                    designed to fuel your body and support your fitness journey.
                  </p>
                </div>
              </div>
            </div>
            <div class="back">
              <div class="inner">
                <div class="content">
                  <span class="name">FitBuddy</span>
                  <br />
                  <span class="position">
                    Ultimate fitness
                    <br />
                    <br />
                    and
                    <br />
                    <br />
                    wellness Choice
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Flip Box */}
      </div>

      <div className="videos-container">
        {videoUrls.map((url, index) => (
          <YouTubeVideo key={index} videoUrl={url} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
