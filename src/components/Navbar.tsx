import { useState } from "react";
import { HamburgerIcon } from "../Icons/hamburgericon";
import { Logo } from "../Icons/Logo";
import { UserIcon } from "../Icons/UserIcon";
import { AccountUsername } from "./Username";

interface NavbarProps {
  onHamburgerClick: () => void;
}

export function Navbar({ onHamburgerClick }: NavbarProps) {
  const [showUsername, setShowUsername] = useState(false);

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white shadow-md md:hidden relative">
      {/* Left: Logo + Name */}
      <div className="flex items-center gap-2">
        <div className="text-brand-600 scale-110">
          <Logo />
        </div>
        <span className="text-xl font-semibold font-poppins italic text-gray-800 tracking-tight">
           Brainly
        </span>
      </div>

      {/* Right: Hamburger + UserIcon */}
      <div className="flex items-center gap-1">
        {/* Hamburger */}
        <button
          onClick={onHamburgerClick}
          className="p-1 rounded hover:bg-gray-100 active:scale-95 transition"
        >
          <HamburgerIcon />
        </button>

        {/* User Icon */}
        <button
          onClick={() => setShowUsername((prev) => !prev)}
          className="p-2 rounded hover:bg-gray-100 active:scale-95 transition"
        >
          <UserIcon />
        </button>
      </div>

      {/* Username Popup */}
      {showUsername && (
        <div className="absolute right-4 top-16 z-50 bg-white border border-gray-200 rounded-lg shadow-lg min-w-24 animate-fade-in">
          {/* Tail */}
          <div className="absolute -top-2 right-4 w-3 h-3 bg-white border-l border-t border-gray-200 transform rotate-45 z-[-1]" />
          
          {/* Username content */}
          <div className="p-3">
            <AccountUsername />
          </div>
        </div>
      )}
    </div>
  );
}
