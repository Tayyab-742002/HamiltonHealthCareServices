"use client";

import { useEffect, useRef, useState } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
}

export default function VideoPlayer({ src, poster, title, className = "" }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<Plyr>();
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!videoRef.current) return;

    // Initialize Plyr
    playerRef.current = new Plyr(videoRef.current, {
      controls: [
        'play-large',
        'play',
        'progress',
        'current-time',
        'mute',
        'volume',
        'fullscreen'
      ],
      hideControls: false, // Changed to false for debugging
      resetOnEnd: true,
      keyboard: { focused: true, global: false },
      tooltips: { controls: true, seek: true },
      debug: true, // Enable debug mode
    });

    // Add event listeners for debugging
    const video = videoRef.current;

    video.addEventListener('error', (e) => {
      console.error('Video Error:', e);
      const error = video.error;
      setError(error ? `Error: ${error.message}` : 'Unknown error occurred');
    });

    video.addEventListener('loadeddata', () => {
      console.log('Video loaded successfully');
    });

    // Cleanup
    return () => {
      playerRef.current?.destroy();
      video.removeEventListener('error', () => {});
      video.removeEventListener('loadeddata', () => {});
    };
  }, []);

  return (
    <div className={`video-player-wrapper ${className}`}>
      {error && (
        <div className="error-message bg-red-100 text-red-600 p-2 mb-2 rounded">
          {error}
        </div>
      )}

      <video
        ref={videoRef}
        className="video-player"
        poster={poster}
        preload="metadata"
        playsInline
        controls // Added native controls for debugging
      >
        <source src={src} type="video/mp4" />
        {/* Add more source formats for better compatibility */}
        <source src={src.replace('.mp4', '.webm')} type="video/webm" />
        <source src={src.replace('.mp4', '.ogg')} type="video/ogg" />
        Your browser does not support the video tag.
      </video>

      {/* Debug info */}
      <div className="debug-info text-xs text-gray-500 mt-2">
        Video source: {src}
      </div>

      <style jsx global>{`
        .video-player-wrapper {
          position: relative;
          border-radius: 1rem;
          overflow: hidden;
        }

        .video-player-wrapper .plyr {
          --plyr-color-main: #0891b2;
          --plyr-border-radius: 1rem;
          --plyr-video-controls-background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8));
        }

        .video-player-wrapper .plyr--video {
          border-radius: 1rem;
          overflow: hidden;
        }

        .video-player {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Show controls by default for debugging */
        .plyr__controls {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}

