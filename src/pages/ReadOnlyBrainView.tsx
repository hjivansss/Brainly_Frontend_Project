import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "../components/Card";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BACKEND_URL } from "../config";

export function ReadOnlyBrainView() {
  const { sharelink } = useParams();
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState("");
  const [selectedContent, setSelectedContent] = useState<string | null>("All");
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/v1/brain/${sharelink}`);
        setData(res.data);
      } catch (err) {
        setError("Link expired or invalid");
      }
    };

    fetchData();
  }, [sharelink]);

  if (error) {
    return (
      <div className="h-screen w-screen flex items-center justify-center text-red-600 text-xl">
        {error}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="h-screen w-screen flex items-center justify-center text-gray-500 text-xl">
        Loading shared brain...
      </div>
    );
  }

  const filteredContents =
    selectedContent === "All"
      ? data?.content || []
      : (data?.content || []).filter((item: any) => item.type === selectedContent);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Navbar */}
      <div className="md:hidden">
        <Navbar onHamburgerClick={() => setShowSidebar(true)} />
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <div
          className={`fixed inset-0 bg-black bg-opacity-40 z-30 transition-opacity duration-300 ease-in-out ${
            showSidebar ? "opacity-60" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setShowSidebar(false)}
        />
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white z-40 shadow-md transform transition-transform duration-300 ease-in-out ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar
            onSelect={(type) => {
              setSelectedContent(type);
              setShowSidebar(false);
            }}
          />
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex w-full">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar onSelect={setSelectedContent} />
        </div>

        {/* Content Area */}
        <div className="flex flex-col flex-1 p-4 ml-8">
          {/* Username Heading */}
          <div className="flex justify-end pr-4 mb-2">
            <span className="pt-1">Shared by</span>
            <span className="font-semibold italic pl-2 text-xl text-gray-700">
              {data.username}
            </span>
          </div>

          {/* Section Heading */}
          <div className="mt-2 mb-4">
            <h1 className="text-2xl font-semibold text-gray-800">All Notes</h1>
            <p className="text-sm text-gray-500">This is a read-only view</p>
          </div>

          {/* Cards */}
          <div className="flex gap-4 flex-wrap">
            {filteredContents.map((item: any) => (
              <Card
                key={item._id}
                title={item.title}
                type={item.type}
                link={item.link}
                id={item._id}
              
              />
            ))}
          </div>

          {/* Mobile Footer */}
          <div className="md:hidden mt-8">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
