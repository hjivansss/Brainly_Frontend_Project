import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { CreateContentModal } from '../components/CreateContentModal';
import { Sidebar } from '../components/Sidebar';
import { PlusIcon } from '../Icons/PlusIcon';
import { ShareIcon } from '../Icons/ShareIcon';
import { useState, useEffect } from 'react';
import { useContent } from '../hooks/useContent';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { UserIcon } from '../Icons/UserIcon';
import { AccountUsername } from '../components/Username';

type ContentItem = {
  _id: string;
  type: string;
  title: string;
  link: string;
};

export function Dashboard() {
  const [modalOpen, setmodalOpen] = useState(false);
  const { contents, refresh } = useContent();
  const [selectedContent, setSelectedContent] = useState<string | null>('All');
  const filteredContents = selectedContent === 'All' ? contents : (contents as ContentItem[]).filter((item) => item.type === selectedContent);

  useEffect(() => {
    refresh();
  }, [modalOpen]);

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      {/* Mobile Navbar */}
      <div className="md:hidden">
        <Navbar onHamburgerClick={() => setShowSidebar(true)} />
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <div
          className={`fixed inset-0 bg-black bg-opacity-40 z-30 transition-opacity duration-300 ease-in-out
            ${showSidebar ? 'opacity-60' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setShowSidebar(false)}
        />

        <div
          className={`
            fixed top-0 left-0 h-full w-64 bg-white z-40 shadow-md
            transform transition-transform duration-300 ease-in-out
            ${showSidebar ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          <Sidebar
            onSelect={(type) => {
              setSelectedContent(type);
              setShowSidebar(false);
            }}
            onClose={() => setShowSidebar(false)}
          />
        </div>
      </div>

      {/* Main layout in desktop */}
      <div className="bg-gray-100 min-h-screen w-screen flex">
        <div className="hidden md:block">
          <Sidebar onSelect={setSelectedContent} />
        </div>
        
        <div className="p-4 bg-gray-100 pl-6 w-screen h-full flex flex-col justify-between">
          {/* Modal */}
          <CreateContentModal open={modalOpen} onClose={()=> {setmodalOpen(false);}}/>


            <div className="hidden md:flex justify-end items-center gap-1 pr-6 mr-2 text-gray-800 cursor-pointer hover:text-gray-600 italic">
                <UserIcon />
                <AccountUsername />
            </div>


          <div className="ml-4 flex-grow">
            <div className="md:flex mt-4 mb-4">
              <span className="text-lg md:text-2xl font-semibold text-gray-700 pt-2 pr-4 md:pr-140">
                All Notes
              </span>
              <div className="flex gap-1">
                <div className="text-sm md:text-lg">
                  <Button
                    variant="secondary"
                    text="Add content"
                    size="md"
                    startIcon={<PlusIcon size="md" />}
                    onClick={() => {
                      setmodalOpen(true);
                    }}
                  />
                </div>
                <div className="text-sm md:text-lg">
                  <Button
                    onClick={async () => {
                      const response = await axios.post(
                        BACKEND_URL + '/api/v1/brain/share',
                        {
                          share: true,
                        },
                        {
                          headers: {
                            Authorization: localStorage.getItem('token'),
                          },
                        }
                      );
                      const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
                      alert(shareUrl);
                    }}
                    variant="primary"
                    text="Brain Share"
                    size="md"
                    startIcon={<ShareIcon size="md" />}
                  />
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="flex gap-4 flex-wrap">
              {filteredContents.map(({ _id, type, title, link }) => (
                <Card key={_id} title={title} type={type} link={link} id={_id} />
              ))}
            </div>
          </div>

          {/* Mobile Footer only */}
          <div className="md:hidden mt-4">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
