"use client";

import dynamic from "next/dynamic";

// Dynamically import VideoPlayer with no SSR
const VideoPlayer = dynamic(() => import("@/components/shared/VideoPlayer"), {
  ssr: false,
  loading: () => (
    <div className="aspect-video bg-gray-200 animate-pulse rounded-2xl">
      <div className="w-full h-full flex items-center justify-center">
        <span className="text-gray-400">Loading video player...</span>
      </div>
    </div>
  ),
});

export default function ImmigrationProgram() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto ">
          <div className="p-4 sm:p-8 bg-blue-950 text-white">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              The Temporary Foreign Worker (TFW) Program
            </h3>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              This program allows Canadian employers to hire foreign workers to
              fill jobs with significant labour shortages.
            </p>
          </div>

          {/* Main Content */}
          <div className="p-4 sm:p-8">
            <div className="space-y-6 sm:space-y-8">
              {/* Program Breakdown */}
              <div className="border-b border-gray-100 pb-6 sm:pb-8">
                <div className="grid gap-4 sm:gap-6">
                  <div className="bg-gray-50 p-4 text-left sm:p-6 rounded-xl">
                    <h5 className="font-semibold text-blue-950 mb-2">
                      New Pilot Programs
                    </h5>
                    <p className="text-sm text-left  text-gray-700">
                      We are currently hiring qualified overseas caregivers and
                      nurses through the Temporary Foreign Workers Program.
                    </p>
                  </div>
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-r-xl">
                <p className="text-sm sm:text-base text-blue-900 font-medium">
                  We are now accepting applications and overseas candidates
                  outside Canada can apply now to start their application
                  process.
                </p>
              </div>

              {/* Video Section */}
              <div className="mt-8">
                <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(8,_112,_184,_0.4)] transform transition-all duration-300 hover:shadow-[0_10px_30px_rgba(8,_112,_184,_0.3)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 animate-pulse"></div>
                  <VideoPlayer
                    src="https://pub-20f982007aa54df4849bcd969b89a1bf.r2.dev/recruite.mp4"
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
      </div>
    </div>
  );
}
