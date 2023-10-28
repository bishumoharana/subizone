import React, { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('/api/videos')
      .then(response => response.json())
      .then(setVideos);
  }, []);

  function handleSelectVideo(video) {
    setSelectedVideo(video);
  }

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: '30%', borderRight: '1px solid black', padding: '10px', overflow: 'auto' }}>
        <h2>Video List</h2>
        <VideoList videos={videos} onSelectVideo={handleSelectVideo} />
      </div>
      <div style={{ flex: '70%', padding: '10px' }}>
        <h2>Video Player</h2>
        <VideoPlayer src={selectedVideo ? selectedVideo.url : ''} />
      </div>
    </div>
  );
}

export default App;
