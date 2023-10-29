import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './components/Navbar';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';

function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState({ url: 'https://www.w3schools.com/html/mov_bbb.mp4', name: '' });

  const handleSelectVideo = (url, name) => {
    setSelectedVideo({ url, name });
    toast.success(`Selected video: ${name}`);
  };

  return (
    <div className="content">
      <VideoList onSelectVideo={handleSelectVideo} />
      <VideoPlayer videoUrl={selectedVideo.url} videoName={selectedVideo.name} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<div>Welcome to the main page!</div>} index />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/files" element={<div>Files page content goes here</div>} />
          <Route path="/others" element={<div>Others page content goes here</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
