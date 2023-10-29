import React from 'react';
import './VideoPlayer.css';

function VideoPlayer() {
  return (
    <div className="video-player">
      <h2>Video Player</h2>
      <video controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
