/* eslint-disable react/prop-types */
import { useState } from "react";
import Card from "../../components/Card";
import Greeting from "../../components/Greeting"; // Assuming you've extracted Greeting component
import ModalForm from "../../components/ModalForm"; // Assuming you've extracted Greeting component

// let usersCurrentName = prompt("What is your Name?");

export default function Folder() {
  const [displayModal, setDisplayModal] = useState(false);
  const [folders, setFolders] = useState([]);

  const openModal = () => {
    setDisplayModal(true);
  };

  const closeModal = () => {
    setDisplayModal(false);
  };

  const createFolder = (folderData) => {
    setFolders((prevFolders) => [
      ...prevFolders,
      {
        key: prevFolders.length,
        Title: folderData.headline || "Hello World",
        Supporting:
          folderData.supporting || "This is awesome, the card is working",
        Link: folderData.url || "/#",
        Media:
          folderData.media ||
          "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
        // Add other properties you need
      },
    ]);
  };

  return (
    <>
      <section className="overflow-hidden min-h-screen mt-12">
        <div className="container  lg:max-w-9xl mx-auto p-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="">
              <Greeting name={"John"} />
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                To inject a new element into the DOM on a button click in a
                React component, you can follow these steps:
              </p>
            </div>
            <div className="flex items-center justify-end">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-zinc-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-zinc-300-2 disabled:pointer-events-none disabled:opacity-50 bg-orange-600 text-orange-50 hover:bg-orange-600/90 h-11 px-4 py-2"
                onClick={openModal}
              >
                Open Modal
              </button>
            </div>
          </div>

          <ModalForm
            displayModal={displayModal}
            closeModal={closeModal}
            createFolder={createFolder}
          />
          {/* Render your folders using the state */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-16">
            {folders.map((folder) => (
              <Card
                key={folder.key}
                Title={folder.Title}
                Supporting={folder.Supporting}
                Link={folder.Link}
                Media={folder.Media}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
