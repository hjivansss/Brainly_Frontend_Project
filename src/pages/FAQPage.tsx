import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";

export function FAQPage() {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "Why is my YouTube video not playing?",
      answer:
        "There might be an issue with the embed. Ensure you're using the full URL in the embed format rather than a shortened share link.",
    },
    {
      question: "How to add content correctly?",
      answer:
        "Copy the full URL path of the YouTube video from the browser address bar. The shortened link from 'Share' will not work here.",
    },
    {
      question: "Why does my dashboard look empty?",
      answer:
        "You may not have added any content yet. Try adding some videos, articles, or notes from the dashboard.",
    },
    {
      question: "Can I upload my own files?",
      answer:
        "Currently, the platform supports only URLs for embedding. File uploads are planned for a future update.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Back Button */}
      <div className="bg-white  p-4 flex justify-start">
        <button
          onClick={() => navigate("/dashboard")}
          className="px-3 py-1.5 bg-indigo-500 text-sm text-white rounded-full shadow-md hover:scale-105 transition-transform duration-200"
        >
          ← Back
        </button>
      </div>

      {/* FAQ Section */}
      <div className="flex-grow max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-2.5 bg-gray-50 hover:bg-gray-100 transition flex justify-between items-center"
              >
                <span className="font-medium text-sm text-gray-800">{faq.question}</span>
                <span className="text-gray-500 text-sm">{openIndex === index ? "−" : "+"}</span>
              </button>

              {/* Animated Answer */}
              <div
                className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 py-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
