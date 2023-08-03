// YouTubeVideo.js

import React from "react";
import './App.css';

function YouTubeVideo() {
  return (
    <div className="YouTubeVideoContainer">
    
      <img id="source" src="https://thumbs.dreamstime.com/z/healthy-food-menu-fish-meat-vegetables-fruits-diet-183993563.jpg?w=992.png" alt="nope" />

      <div id="frame">
      <iframe width="500" height="400" src="https://www.youtube.com/embed/8BKbu_s8p1Q" title="How To Eat To Build Muscle &amp; Lose Fat (Lean Bulking Full Day Of Eating)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="500" height="400" src="https://www.youtube.com/embed/CxktmQ3zJOA" title="The Best Science-Based Diet for Fat Loss (ALL MEALS SHOWN!)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default YouTubeVideo;
