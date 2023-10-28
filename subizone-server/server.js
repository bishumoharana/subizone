// We start by importing the necessary modules
const express = require('express');
const fs = require('fs');
const path = require('path');

// We initialize our Express application
const app = express();
const port = 3001;

// Specify the directory where your videos are stored
// Replace '/path/to/your/videos' with the actual path to your videos
const videosDir = '/Users/beetit/Documents/tigSpore';

// We define a new route '/api/videos' that the client will fetch the video list from
app.get('/api/videos', (req, res) => {
  // We use fs.readdir to read the contents of the video directory
  fs.readdir(videosDir, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred while reading the video directory.');
      return;
    }

    // For each file in the directory, we create a video object with an id, name, and url
    const videos = files.map(file => ({
      id: file,
      name: path.basename(file, path.extname(file)),
      url: `/videos/${file}`
    }));

    // We send the list of video objects back to the client
    res.json(videos);
  });
});

// We use express.static middleware to serve the video files under the '/videos' URL
app.use('/videos', express.static(videosDir));

// Finally, we start our server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
