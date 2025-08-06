import { Logo } from "../Icons/Logo";
// import { TwitterIcon } from "../Icons/Twitter"; // Optional social icons
// import { YoutubeIcon } from "../Icons/Youtube";

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-10 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <div className="text-brand-600">
            <Logo />
          </div>
          <span className="text-lg font-semibold italic font-poppins">Brainly</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="/about" className="hover:underline hover:text-brand-600 transition">
            About
          </a>
          <a href="#" className="hover:underline hover:text-brand-600 transition">
            Privacy
          </a>
          <a href="#" className="hover:underline hover:text-brand-600 transition">
            Contact
          </a>
        </div>

        {/* Social Icons (Optional) */}
        {/* <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-brand-600">
            <TwitterIcon />
          </a>
          <a href="#" className="hover:text-red-600">
            <YoutubeIcon />
          </a>
        </div> */}
      </div>

      {/* Bottom */}
      <div className="text-xs text-center text-gray-500 mt-4">
        © {new Date().getFullYear()} Brainly. All rights reserved.
      </div>
    </footer>
  );
}
