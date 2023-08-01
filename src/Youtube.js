
import React from "react";
import ReactPlayer from "react-player";

const YouTubeVideo = ({ videoUrl }) => {
  return (
    <div className="youtube-video-wrapper">
      <ReactPlayer
        url={videoUrl}
        controls={true}
        width="100%"
        height="10cm"
        className="youtube-video"
      />
    </div>
  );
};

export default YouTubeVideo;
