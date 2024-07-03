import { Outlet } from 'react-router-dom';
import Navbar from './navbar';

const RootLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
export default RootLayout;
