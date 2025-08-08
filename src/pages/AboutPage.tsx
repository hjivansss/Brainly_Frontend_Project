import { Logo } from "../Icons/Logo";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 md:px-12 md:py-10 flex flex-col">
      {/* Back Button */}
      <button
        onClick={() => navigate("/dashboard")}
        className="self-start px-4 py-1.5 bg-indigo-500 text-sm text-white rounded-full shadow-md hover:scale-105 transition-transform duration-200"
      >
        ← Back
      </button>

      {/* Header */}
      <div className="flex items-center gap-3 mt-6 mb-4">
        <div className="text-brand-600 w-8 h-8 flex items-center justify-center">
          <Logo />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">About</h1>
      </div>

      {/* Description */}
      <div className="mt-2 text-sm md:text-base text-gray-700 leading-relaxed space-y-4">
        <p>
          <span className="font-semibold text-indigo-600">Second Brain</span> is your personal digital memory — a simple yet powerful tool to save and organize the content that matters most.
        </p>

        <p>You can effortlessly store and revisit:</p>

        <ul className="list-disc list-inside pl-2 space-y-2">
          <li>📺 <span className="font-semibold text-indigo-500">YouTube videos</span> you want to watch or reference later</li>
          <li>🐦 <span className="font-semibold text-indigo-500">Twitter posts</span> worth saving</li>
          <li>💼 <span className="font-semibold text-indigo-500">LinkedIn content</span> that inspires or informs you</li>
          <li>🔗 <span className="font-semibold text-indigo-500">Any important links</span> — articles, tools, blogs, and more</li>
        </ul>

        <p className="mt-6">But that’s not all — Second Brain is also social:</p>

        <ul className="list-disc list-inside pl-2 space-y-2">
          <li>📤 <span className="font-semibold text-green-600">Sharing your Brain</span> with others using public links</li>
          <li>🌐 Anyone with a link can view your shared Brain — <span className="italic text-gray-800">no signup needed</span></li>
        </ul>

        <p className="mt-6">
          Instead of losing great content in endless scrolls or forgotten bookmarks, <span className="font-semibold text-indigo-600">Second Brain</span> gives you a focused space to keep your digital discoveries — so your best ideas and resources are always within reach.
        </p>

        <p className="mt-4 font-semibold text-gray-900">Stay organized. Stay inspired.</p>
        <p className="mt-1 italic text-gray-700">This is just the beginning.</p>
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
