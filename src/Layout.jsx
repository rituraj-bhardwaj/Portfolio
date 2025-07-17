import React from 'react';
import { Outlet } from 'react-router';
import { Navbar, Footer } from "./components"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;