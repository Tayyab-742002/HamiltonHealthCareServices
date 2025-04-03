"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type Plyr from "plyr";
import "plyr/dist/plyr.css";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
}

export default function VideoPlayer({
  src,
  poster,
  title,
  className = "",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<Plyr | null>(null);
  const [error, setError] = useState<string>("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !videoRef.current) return;

    const initializePlyr = async () => {
      try {
        // Dynamically import Plyr only on the client side
        const PlyrModule = await import("plyr");
        const PlyrClass = PlyrModule.default;

        if (!videoRef.current) return;

        playerRef.current = new PlyrClass(videoRef.current, {
          controls: [
            "play-large",
            "play",
            "progress",
            "current-time",
            "mute",
            "volume",
            "fullscreen",
          ],
          hideControls: false,
          resetOnEnd: true,
          keyboard: { focused: true, global: false },
          tooltips: { controls: true, seek: true },
          debug: true,
        });

        // Add event listeners for debugging
        const video = videoRef.current;

        const handleError = (e: Event) => {
          console.error("Video Error:", e);
          if (!video) return;

          const videoError = video.error;
          setError(videoError ? `Error: ${videoError.message}` : "Unknown error occurred");
        };

        const handleLoaded = () => {
          console.log("Video loaded successfully");
        };

        video.addEventListener("error", handleError);
        video.addEventListener("loadeddata", handleLoaded);

        return () => {
          video.removeEventListener("error", handleError);
          video.removeEventListener("loadeddata", handleLoaded);
          if (playerRef.current) {
            playerRef.current.destroy();
          }
        };
      } catch (error) {
        console.error("Error initializing Plyr:", error);
        setError("Failed to initialize video player");
      }
    };

    initializePlyr();
  }, [isClient]);

  if (!isClient) {
    // Server-side or initial render
    return (
      <div className={`video-player-wrapper ${className}`}>
        <video
          className="video-player"
          poster={poster}
          preload="none"
          playsInline
          controls
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

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
        controls
      >
        <source src={src} type="video/mp4" />
        <source src={src.replace(".mp4", ".webm")} type="video/webm" />
        <source src={src.replace(".mp4", ".ogg")} type="video/ogg" />
        Your browser does not support the video tag.
      </video>

      {process.env.NODE_ENV === "development" && (
        <div className="debug-info text-xs text-gray-500 mt-2">
          Video source: {src}
        </div>
      )}

      <style jsx global>{`
        .video-player-wrapper {
          position: relative;
          border-radius: 1rem;
          overflow: hidden;
          width: 100%;
          height: 100%;
          aspect-ratio: 16/9;
        }

        .video-player-wrapper .plyr {
          --plyr-color-main: #0891b2;
          --plyr-border-radius: 1rem;
          --plyr-video-controls-background: linear-gradient(
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.8)
          );
          width: 100%;
          height: 100%;
        }

        .video-player-wrapper .plyr--video {
          border-radius: 1rem;
          overflow: hidden;
          width: 100%;
          height: 100%;
        }

        .video-player {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Add poster styles */
        .plyr__poster {
          background-size: cover;
          background-position: center;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }

        video[poster] {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        .plyr__video-wrapper {
          height: 100%;
          width: 100%;
        }

        .plyr__controls {
          opacity: 1 !important;
        }

        .plyr__control--overlaid {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: var(--plyr-color-main);
          border: 0;
          border-radius: 100%;
          padding: 1.5rem;
          width: auto;
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .plyr__control--overlaid svg {
          width: 1.5rem;
          height: 1.5rem;
          left: 1px;
          position: relative;
        }

        .plyr__control--overlaid:hover {
          background: var(--plyr-color-main);
          opacity: 0.9;
          transform: translate(-50%, -50%) scale(1.1);
        }

        .plyr--video .plyr__controls {
          padding: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        @media (max-width: 768px) {
          .plyr__control--overlaid {
            padding: 1.25rem;
          }

          .plyr__control--overlaid svg {
            width: 1.25rem;
            height: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .plyr__control--overlaid {
            padding: 1rem;
          }

          .plyr__control--overlaid svg {
            width: 1rem;
            height: 1rem;
          }
        }
      `}</style>
    </div>
  );
}






