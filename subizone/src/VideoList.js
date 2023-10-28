import React from 'react';

function VideoList({ videos, onSelectVideo }) {
  return (
    <ul>
      {videos.map(video => (
        <li key={video.id} onClick={() => onSelectVideo(video)}>
          {video.name}
        </li>
      ))}
    </ul>
  );
}

export default VideoList;
