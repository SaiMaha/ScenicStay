import React from 'react';
import NavBar from '../NavbarContainer/NavBar';
import { Outlet, useLocation } from 'react-router-dom';
import Landing from '../pages/Landing';
import { useContext } from 'react';
import { AuthContext } from '../Context/Contextapi';


const Layout = () => {
  const location = useLocation();
  const { AuthUser } = useContext(AuthContext); 

  const isLandingPage = location.pathname === "/"; 
  

  return (
    <div>
      <NavBar />
      {isLandingPage && !AuthUser ? <Landing /> : <Outlet />}
   
    </div>
  );
};

export default Layout;
