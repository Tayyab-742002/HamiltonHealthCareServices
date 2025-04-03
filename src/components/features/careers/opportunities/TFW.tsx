"use client";

import VideoPlayer from "@/components/shared/VideoPlayer";

export default function ImmigrationProgram() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Content remains the same */}

          {/* Video Section */}
          <div className="mt-8">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(8,_112,_184,_0.4)] transform transition-all duration-300 hover:shadow-[0_10px_30px_rgba(8,_112,_184,_0.3)]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 animate-pulse"></div>
              <VideoPlayer
                src="/recruite.mp4"
                poster="/recruite-poster.jpg"
                title="TFW Program"
                className="aspect-video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none z-20"></div>
            </div>
            <p className="text-center text-gray-600 mt-4 text-sm italic">
              Learn more about our TFW Program opportunities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
