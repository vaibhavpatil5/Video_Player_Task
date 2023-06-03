import "./styles.css";

import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoPage = () => {
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  );

  const videos = [
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "https://www.youtube.com/watch?v=9bZkp7q19f0",
    "https://www.youtube.com/watch?v=kXYiU_JCYtU"
  ];

  const handleVideoClick = (url) => {
    setVideoUrl(url);
  };

  return (
    <div>
      <div className="video-player">
        <ReactPlayer
          url={videoUrl}
          controls={true}
          width="100%"
          height="auto"
        />
      </div>
      <div className="thumbnail-container">
        {videos.map((url, index) => (
          <div
            className="thumbnail-circle"
            key={index}
            onClick={() => handleVideoClick(url)}
          >
            <img
              src={`https://img.youtube.com/vi/${url.slice(-11)}/mqdefault.jpg`}
              alt={`Thumbnail ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
