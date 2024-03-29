/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { RiMenuLine } from 'react-icons/ri';
import Logo from "./Logo";

export default function Appbar({Navigtion}) {
  return (
    <header className="overflow-hidden bg-white shadow">
    <section className="px-4 md:px-0 py-5 sm:py-6 grid grid-cols-1 lg:grid-cols-2 gap-8 wrapper">
      <div className="h-auto flex items-center justify-between">
        <Link to="/" aria-label="markers logo that you can click to the home page">
          <Logo fillColor="fill-gray-800" className="w-24 hover:opacity-90 transition-all  focus:fill-orange-500" />
        </Link>
        <div className="border p-2 rounded lg:hidden">
          <RiMenuLine className="w-4 h-4" />
        </div>
      </div>
      <div className="hidden lg:flex lg:gap-4 flex-col lg:flex-row lg:items-center lg:justify-end">
        {Navigtion.map((data) => (
          <Link
            key={data.url_path}
            to={data.url_path}
            aria-label={`Link to ${data.url_name} page`}
            className="rounded bg-transparent px-3 py-1.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            {data.url_name}
          </Link>
        ))}
      </div>
    </section>
  </header>
  )
}

