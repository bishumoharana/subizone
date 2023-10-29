import React, { useEffect, useState } from 'react';
import './VideoList.css';

function VideoList({ onSelectVideo }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/videos')
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  return (
    <div className="video-list">
      <h2>Video List</h2>
      {videos.map((video, index) => (
        <div key={video.id} className={`video-item ${index % 2 === 0 ? 'even' : 'odd'}`} onClick={() => onSelectVideo(video.url, video.name)}>
          <h3>{video.name}</h3>
          <p>URL: {video.url}</p>
        </div>
      ))}
    </div>
  );
}

export default VideoList;
