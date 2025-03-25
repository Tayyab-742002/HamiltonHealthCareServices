"use client";

export default function ReferralProgram() {
  const steps = [
    {
      title: "Refer a Qualified Candidate",
      description:
        "Share our job openings with your network. You can post it on Facebook, LinkedIn, TikTok, Instagram, or refer healthcare colleagues at your workplace.",
    },
    {
      title: "Candidate Applies & Gets Selected",
      description:
        "The referred candidate must apply, meet the eligibility criteria, and pass the hiring process.",
    },
    {
      title: "Candidate Receives a Job Offer",
      description:
        "Once your referred candidate secures a job offer from Hamilton Healthcare, you qualify for the referral bonus.",
    },
    {
      title: "Receive Your $200 CAD Reward",
      description:
        "You will be paid once the referred candidate has accepted the job offer.",
    },
  ];

  const eligibleParticipants = [
    "Nurses, caregivers, and other healthcare professionals",
    "Healthcare recruiters",
    "Social media content creators",
    "Anyone who knows a qualified candidate!",
  ];

  const terms = [
    "The referred candidate must be qualified and eligible to work in Canada under Home Care Worker Immigration pilots.",
    "The referral bonus is only paid if the referred candidate receives and accepts a job offer from us.",
    "The referral partner must provide accurate contact details for both themselves and the referred candidate.",
    "A candidate can only be referred once. If multiple people refer the same candidate, the reward will go to the first referrer who submitted their details.",
    "Our referral partners are welcome to refer as many candidates as possible. However, referral limits will be determined at our discretion.",
    "Payments will be made via e-transfer or another agreed-upon method within 30 days of the candidate's job offer acceptance.",
    "Hamilton Healthcare reserves the right to modify or terminate the terms and conditions of the referral program at any time.",
  ];

  return (
    <>
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hamilton Healthcare is actively recruiting overseas nurses,
              caregivers and healthcare professionals through the Canada Home
              Care Worker Immigration pilots providing job opportunities for
              qualified overseas caregivers to join our team in Canada.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              In line with our recruitment process, we invite healthcare
              professionals, recruiters, and social media content creators to
              join our Referral Recruitment Program and earn $200 CAD for each
              candidate you refer who successfully secures a job offer to work
              for our healthcare establishment.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">
            HOW IT WORKS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 flex flex-col place-items-center  rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-950  text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-blue-950 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-16">
            <h2 className="text-2xl font-bold text-blue-950 mb-6 text-center">
              Who Can Join Our Referral Program?
            </h2>
            <ul className="space-y-3">
              {eligibleParticipants.map((participant, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="text-blue-950 mr-2">•</span>
                  {participant}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-16">
            <h2 className="text-2xl font-bold text-blue-950 mb-6 text-center">
              Terms & Conditions
            </h2>
            <ul className="space-y-3">
              {terms.map((term, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="text-blue-950 mr-2">{index + 1}.</span>
                  {term}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-950 mb-6">
              Start Referring Today!
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Help someone achieve their dream of working in Canada while
              earning extra cash for yourself. Start sharing this opportunity
              now!
            </p>
            <p className="text-lg">
              To join our referral program contact us at{" "}
              <a
                href="mailto:referrals@hamiltonhealthcareservices.com"
                className="text-blue-950 font-semibold hover:underline"
              >
                referrals@hamiltonhealthcareservices.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
