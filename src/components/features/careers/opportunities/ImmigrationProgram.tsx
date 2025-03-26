"use client";

export default function ImmigrationProgram() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mx-4 sm:mx-0">
      {/* Header Section */}
      <div className="p-4 sm:p-8 bg-blue-950 text-white">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          New Immigration Program 2025
        </h3>
        <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
          On March 31, 2025, Canada will launch two new streams, the Home Care Worker Immigration Pilots (HCWP), offering a path to permanent residence for foreign caregivers upon arrival, replacing the previous pilot programs.
        </p>
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-8">
        <div className="space-y-6 sm:space-y-8">
          {/* Program Breakdown */}
          <div className="border-b border-gray-100 pb-6 sm:pb-8">
            <h4 className="text-lg sm:text-xl font-semibold text-blue-950 mb-4 sm:mb-6">
              Program Breakdown
            </h4>
            <div className="grid gap-4 sm:gap-6">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                <h5 className="font-semibold text-blue-950 mb-2">New Pilot Programs</h5>
                <p className="text-sm sm:text-base text-gray-700">
                  The Home Care Worker Immigration Pilots (HCWP) will replace the "Home Child Care Provider" and "Home Support Worker" pilot programs, which ended in 2024.
                </p>
              </div>

              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                <h5 className="font-semibold text-blue-950 mb-2">Launch Timeline</h5>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-sm sm:text-base text-gray-700">• Workers in Canada Stream - March, 2025</p>
                  <p className="text-sm sm:text-base text-gray-700">• Applicants not working in Canada - June, 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-r-xl">
            <p className="text-sm sm:text-base text-blue-900 font-medium">
              We are currently accepting applications for both streams. Applicants from outside Canada can apply now and start their application process for the second stream which will launch later in June.
            </p>
          </div>

          {/* Eligibility Requirements */}
          <div>
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
                  <span className="mr-3">•</span>
                  A credential equivalent to a Canadian high school diploma
                </li>
                <li className="flex items-center">
                  <span className="mr-3">•</span>
                  Proof of relevant experience or training in a home care occupation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
