import { useLocation } from 'react-router-dom';

export default function Account() {
  let location = useLocation();
  return (
    <>
      <div className="wrapper min-h-screen py-16 space-y-16">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 capitalize">{location.pathname.slice(11)}</h1>
      </div>
    </>
  )
}
