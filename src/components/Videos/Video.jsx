import React, { useRef, useEffect } from 'react';

export const Video = ({ videoId }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const currentVideoRef = videoRef.current;

    if (currentVideoRef) {
      currentVideoRef.addEventListener('load', () => {
        console.log('Video loaded');
      });
    }

    return () => {
      if (currentVideoRef) {
        currentVideoRef.removeEventListener('load', () => {
          console.log('Video unloaded');
        });
      }
    };
  }, [videoId]);

  return (
    <div>
      <iframe
        ref={videoRef}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
      ></iframe>
    </div>
  );
};

