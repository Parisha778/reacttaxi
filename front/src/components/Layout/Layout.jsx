import React from 'react';
import Header from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';


const Layout = () => {
  return (
    <>
        <Header/>
        <section>
            <Outlet/>
        </section>
        <Footer/>
    </>
  )
}

export default Layout