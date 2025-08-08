import { HamburgerIcon } from "../Icons/hamburgericon";
import { Logo } from "../Icons/Logo";
import { UserIcon } from "../Icons/UserIcon";
import { AccountUsername } from "./Username";

interface NavbarProps {
  onHamburgerClick: () => void;
}

export function Navbar({ onHamburgerClick }: NavbarProps) {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-gray-100  shadow-sm md:hidden">
      {/* Top Row */}
      <div className="flex items-center justify-between px-2 py-2">
        {/* Left: User Icon + Username */}
        <div
          className="flex items-center gap-2 px-3 py-1 rounded-full 
                     backdrop-blur-sm 
                     transition duration-200 hover:bg-gray-100 
                     select-none cursor-default"
        >
          <div className="p-1 bg-indigo-100 rounded-full text-indigo-600">
            <UserIcon />
          </div>
          <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
            <AccountUsername />
          </span>
        </div>

        {/* Right: About + FAQ + Hamburger */}
        <div className="flex items-center gap-3">
          <button className="px-1 py-1 text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 active:scale-95 transition">
            About
          </button>
          <button className="px-1 py-1 text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 active:scale-95 transition">
            FAQ
          </button>
          <button
            onClick={onHamburgerClick}
            className="p-2 rounded-full hover:bg-gray-200 active:scale-95 transition"
          >
            <HamburgerIcon />
          </button>
        </div>
      </div>

      {/* Bottom Row: Logo + Text + Tagline */}
      <div className="flex flex-col items-center py-3">
        <div className="flex items-center gap-2">
          <div className="text-indigo-600 w-8 h-8">
            <Logo />
          </div>
          <span className="text-2xl font-bold font-poppins italic text-gray-900 tracking-tight">
            Second<span className="text-indigo-500">Brain</span>
          </span>
        </div>

        {/* Divider Line */}
        <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent my-1"></div>

        {/* Tagline */}
        <span className="text-xs text-gray-500 tracking-wide">
          Your Personal Knowledge Vault
        </span>
      </div>
    </div>
  );
}
