import React from 'react';
import './VideoPlayer.css';

function VideoPlayer({ videoUrl, videoName }) {
  return (
    <div className="video-player">
      <h2>Video Player</h2>
      {videoName && <h3>Now Playing: {videoName}</h3>}
      <video controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
