import React, { useRef, useState } from 'react';
import './index.css';
import FloatingSkipButton from '../SkipButton';

const FullscreenVideo = ({ video, onEnded }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlay = () => {
    setIsPlaying(true);
    setIsMuted(false);
    videoRef.current.play(); // Play the video when button is clicked
  };

  return (
    <div className="fullscreen-video-container">
      {isPlaying && <FloatingSkipButton onSkip={onEnded} />}
      <video
        ref={videoRef}
        className="fullscreen-video"
        muted={isMuted}
        onEnded={onEnded}
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!isPlaying && (
        <button onClick={handlePlay} className="play-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"  /* Icon size */
            height="50" /* Icon size */
            viewBox="0 0 24 24"
            fill="white"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default FullscreenVideo;
