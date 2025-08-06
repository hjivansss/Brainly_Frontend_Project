import { Logo } from "../Icons/Logo";
import { BackIcon } from "../Icons/BackIcon";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 md:px-12 md:py-10">
      {/* Back Button */}
      <div
        onClick={() => navigate("/dashboard")}
        className="flex items-center gap-2 text-gray-700 bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-full cursor-pointer w-max transition duration-200"
      >
        <BackIcon />
        <span className="text-sm md:text-base font-medium">Back</span>
      </div>

      {/* Header */}
      <div className="flex items-center mt-6">
        <div className="text-brand-600 pr-2">
          <Logo />
        </div>
        <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
          About Brainly
        </h1>
      </div>

      {/* Description */}
      <div className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
        <p className="mb-4">
          Second Brain is your personal digital memory — a simple and powerful tool to save and organize the content that matters most.
        </p>

        <p className="mb-2">You can effortlessly store and revisit:</p>

        <ul className="list-disc list-inside pl-2 space-y-2">
          <li>📺 YouTube videos you want to watch or reference later</li>
          <li>🐦 Twitter posts worth saving</li>
          <li>💼 LinkedIn content that inspires or informs you</li>
          <li>🔗 Any important links — articles, tools, blogs, and more</li>
        </ul>

        <p className="mt-6">But that’s not all — Second Brain is also social:</p>

        <ul className="list-disc list-inside pl-2 space-y-2">
          <li>📤 You can share your Brain content with others using public links</li>
          <li>🌐 Anyone with a link can view your shared Brain — no signup needed</li>
        </ul>

        <p className="mt-6">
          Instead of losing great content in endless scrolls or forgotten bookmarks, Second Brain gives you a focused space to keep your digital discoveries — so your best ideas and resources are always within reach.
        </p>

        <p className="mt-4">Stay organized. Stay inspired.</p>
        <p className="mt-1">This is just the beginning.</p>
      </div>
      <Footer/>
    </div>

    
  );
}
