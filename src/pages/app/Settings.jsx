
import { useLocation } from 'react-router-dom';

export default function Settings() {
  let location = useLocation();
  return (
    <>
      <div className="min-h-screen my-16 wrapper">
        <h1 className='text-3xl font-bold leading-tight tracking-tight text-gray-900 capitalize'>{location.pathname.slice(11)}</h1>
      </div>
    </>
  );
}
