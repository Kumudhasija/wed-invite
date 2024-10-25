import { useState } from 'react';
import './App.css';
import video from './assests/main.mp4'
import FullscreenVideo from './components/FullscreenVideo';
import Envelope from './components/Envelope';

function App() {
  const [showVideo, setShowVideo] = useState(true);
  return (
    <div className="App">
      {
        showVideo
        ? <FullscreenVideo onEnded={() => setShowVideo(false)} video={video} />
        : 
        <Envelope />
      }
    </div>
  );
}

export default App;
