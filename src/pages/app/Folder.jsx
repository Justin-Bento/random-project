/* eslint-disable react/prop-types */
import { useState } from "react";
import Card from "../../components/Card";
import Greeting from "../../components/Greeting"; // Assuming you've extracted Greeting component

// let usersCurrentName = prompt("What is your Name?");

export default function Folder() {
  const [folders, setFolders] = useState([]);

  function createFolder(props) {
    setFolders((prevFolders) => [
      ...prevFolders,
      <Card
        key={prevFolders.length} // Use a unique key for each folder
        Title={props.headline || "Hello World"}
        Supporting={props.supporting || "This is awesome, the card is working"}
        Link={props.url || "/#"}
        Media={
          props.media ||
          "https://images.unsplash.com/photo-1699116550661-bea051952f96?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />,
    ]);
  }

  return (
    <>
      <section className="overflow-hidden min-h-screen">
        <div className="px-4 py-5 sm:p-6 lg:py-16 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <Greeting name={"John"} />
              <p className="text-base tracking-wide text-gray-600">
                To inject a new element into the DOM on a button click in a
                React component, you can follow these steps:
              </p>
            </div>
            <button
              onClick={createFolder}
              className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              New Folder
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-4">
            {folders.map((folder, index) => (
              <div key={index}>{folder}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
