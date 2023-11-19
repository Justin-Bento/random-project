/* eslint-disable react/prop-types */
import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";

const ModalForm = ({ displayModal, closeModal, createFolder }) => {
  const [title, setTitle] = useState("");
  const [supporting, setSupporting] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a URL from the title by replacing spaces with dashes and converting to lowercase
    const url = title.replace(/\s+/g, "-").toLowerCase();

    // Pass the form data to the createFolder function
    createFolder({ headline: title, supporting, url });

    // Clear form fields
    setTitle("");
    setSupporting("");

    // Close the modal
    closeModal();
  };

  return (
    <div className={`modal ${displayModal ? "block" : "hidden"}`}>
      <div className="modal-background"></div>
      <div className="fixed inset-0 bg-zinc-500 bg-opacity-75"></div>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white  px-5 py-4 sm:p-6 rounded-lg max-w-[50ch]">
          <form onSubmit={handleSubmit}>
            <div className="flex items-start flex-col justify-between gap-4 mb-4">
              <span
                onClick={closeModal}
                className="border p-1 rounded hover:bg-zinc-50 hover:cursor-pointer transition-colors"
              >
                <RiCloseFill className="fill-zinc-600 hover:fill-zinc-700" />
              </span>
              <div className="span-y-2">
                <h2 className="text-2xl font-bold">
                  User Created Applicant Information
                </h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                  sunt quam labore!
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="">
                <label className="block text-sm font-medium leading-6 text-zinc-900">
                  Title
                </label>
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="">
                <label className="block text-sm font-medium leading-6 text-zinc-900">
                  Supporting Text
                </label>
                <textarea
                  className="block w-full rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                  value={supporting}
                  onChange={(e) => setSupporting(e.target.value)}
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="rounded-md mt-6 bg-orange-100 px-2.5 py-1.5 text-sm font-semibold text-orange-600 hover:bg-orange-200/60 transition-colors ring-1 ring-orange-200/50"
            >
              Create Folder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;