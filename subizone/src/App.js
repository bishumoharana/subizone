import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';

function App() {
  const [selectedVideo, setSelectedVideo] = useState({ url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'default video' });

  const handleSelectVideo = (url, name) => {
    setSelectedVideo({ url, name });
    toast.success(`Selected video: ${name}`);
  };

  return (
    <div className="App">
      <ToastContainer />
      <VideoList onSelectVideo={handleSelectVideo} />
      <VideoPlayer videoUrl={selectedVideo.url} videoName={selectedVideo.name} />
    </div>
  );
}

export default App;
