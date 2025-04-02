"use client";

export default function ImmigrationProgram() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mx-4 sm:mx-0">
      {/* Header Section */}
      <div className="p-4 sm:p-8 bg-blue-950 text-white">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          The Temporary Foreign Worker (TFW) Program
        </h3>
        <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
          This program allows Canadian employers to hire foreign workers to fill
          jobs with significant labour shortages.
        </p>
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-8">
        <div className="space-y-6 sm:space-y-8">
          {/* Program Breakdown */}
          <div className="border-b border-gray-100 pb-6 sm:pb-8">
            {/* <h4 className="text-lg sm:text-xl font-semibold text-blue-950 mb-4 sm:mb-6">
              Program Breakdown
            </h4> */}
            <div className="grid gap-4 sm:gap-6">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                <h5 className="font-semibold text-blue-950 mb-2">
                  New Pilot Programs
                </h5>
                <p className="text-sm sm:text-base text-gray-700">
                  We are currently hiring qualified overseas caregivers and
                  nurses through the Temporary Foreign Workers Program.
                </p>
              </div>

              {/* <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                <h5 className="font-semibold text-blue-950 mb-2">
                  Launch Timeline
                </h5>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-sm sm:text-base text-gray-700">
                    • Workers in Canada Stream - March 31, 2025
                  </p>
                  <p className="text-sm sm:text-base text-gray-700">
                    • Applicants not working in Canada - June, 2025
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-r-xl">
            <p className="text-sm sm:text-base text-blue-900 font-medium">
            We are now accepting applications and overseas candidates outside Canada can apply now to start their application process.
            </p>
          </div>

          {/* Eligibility Requirements */}
          {/* <div>
            <h4 className="text-lg sm:text-xl font-semibold text-blue-950 mb-4 sm:mb-6">
              Eligibility Requirements
            </h4>
            <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
              <p className="text-sm sm:text-base font-medium text-blue-950 mb-4">
                To qualify for permanent residence, applicants must meet:
              </p>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                <li className="flex items-center">
                  <span className="mr-3">•</span>
                  Minimum language proficiency (CLB 4 in English or French)
                </li>
                <li className="flex items-center">
                  <span className="mr-3">•</span>A credential equivalent to a
                  Canadian high school diploma
                </li>
                <li className="flex items-center">
                  <span className="mr-3">•</span>
                  Proof of relevant experience or training in a home care
                  occupation
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
