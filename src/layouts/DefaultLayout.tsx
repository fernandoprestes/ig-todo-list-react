import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <>
      <div className='bg-gray-600 font-sans text-gray-100 antialiased'>
        <Outlet />
      </div>
    </>
  );
}
