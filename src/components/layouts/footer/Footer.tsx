import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="text-white bg-[#070F2B] text-[0.8rem]" data-aos="fade">
      {/* Top Section */}
      <div className="container-xl pb-8 px-4  sm:px-6 lg:px-8">
        <div className="flex flex-col items-start">
          {/* <Link href="#" className="bg-white p-4 mb-8 -translate-y-1/2">
            <Image
              width={56}
              height={89}
              src="/logo.png"
              alt="Carecor Health Services"
              className="w-56 sm:w-64 md:w-52 lg:w-50"
              // decoding="async"
              // loading="lazy"
            />
          </Link> */}
          <Link href="/" className="bg-white p-4 mb-8 -translate-y-1/2">
            <Image
              src="/logo.png"
              alt="Carecor Health Services"
              width={200}
              height={200}
              className="w-56 sm:w-64 md:w-52 lg:w-50"
            />
          </Link>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:justify-items-center">
            {/* Contact Column */}
            <div className="space-y-4 mt-4">
              <h3 className="text-lg font-semibold">Get In Touch</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://www.carecor.com/contact/"
                    className="hover:text-primary transition-colors"
                  >
                    Our Offices
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:info@carecor.com"
                    className="hover:text-primary transition-colors"
                  >
                    info@carecor.com
                  </Link>
                </li>
              </ul>
            </div>

            {/* Jobseekers Column */}
            <div className="space-y-4 md:border-l mt-4 md:border-primary md:pl-8 ">
              <h3 className="text-lg font-semibold">
                <Link
                  href="https://www.carecor.com"
                  className="hover:text-primary transition-colors"
                >
                  Jobseekers
                </Link>
              </h3>
              <ul className="space-y-2">
                {[
                  ["Where We Hire", "/locations/"],
                  ["Who We Hire", "/who-we-hire/"],
                  ["How to Apply", "/howtoapply/"],
                  ["About Us", "/about/"],
                ].map(([title, url]) => (
                  <li key={title}>
                    <Link
                      href={`https://www.carecor.com${url}`}
                      className="hover:text-primary transition-colors"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clients Column */}
            <div className="space-y-4 md:border-l mt-4 md:border-primary md:pl-8 ">
              <h3 className="text-lg font-semibold">
                <Link
                  href="https://www.carecor.com/clients/"
                  className="hover:text-primary transition-colors"
                >
                  Clients
                </Link>
              </h3>
              <ul className="space-y-2">
                {[
                  ["Where We Operate", "/clients/operations/"],
                  ["Roles We Staff", "/clients/staffing/"],
                  ["About Us", "/clients/about/"],
                ].map(([title, url]) => (
                  <li key={title}>
                    <Link
                      href={`https://www.carecor.com${url}`}
                      className="hover:text-primary transition-colors"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accreditation Logo */}
            <div className="hidden lg:flex justify-end justify-self-end">
              <Image
                width={376}
                height={376}
                src="https://www.carecor.com/wp-content/uploads/2020/09/acseal.svg"
                alt="Accreditation Canada"
                className="w-28 h-28"
                decoding="async"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-dark-blue py-6">
        <div className="container-xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-around gap-2">
            {/* Social Links */}
            <div className="flex space-x-2">
              {[
                {
                  name: "Facebook",
                  url: "https://www.facebook.com/CarecorHealth/",
                  icon: (
                    <svg
                      className="lg:w-6 lg:h-6 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  name: "Instagram",
                  url: "https://www.instagram.com/carecorhealth/",
                  icon: (
                    <svg
                      className="lg:w-6 lg:h-6 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ),
                },
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/company/carecor-health-services/",
                  icon: (
                    <svg
                      className="lg:w-6 lg:h-6 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            {/* Policy Links */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                ["Site Map", "/sitemap/"],
                ["Privacy Policy", "/privacy-policy/"],
                ["Cookie Policy", "/cookie-policy/"],
                ["Accessibility", "/accessibility/"],
              ].map(([title, url]) => (
                <Link
                  key={title}
                  href={`https://www.carecor.com${url}`}
                  className="text-sm hover:text-primary-foreground transition-colors underline"
                >
                  {title}
                </Link>
              ))}
            </div>
            {/* Copyright */}
            <div className="text-center md:text-left">
              Carecor Health Services Ltd 2025
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
