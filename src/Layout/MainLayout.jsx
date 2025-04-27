import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className='space-y-10'>
        <div className="sticky top-0 z-50" >
          <NavBar></NavBar>
        </div>
        <div className="max-w-screen-xl mx-auto">
            <Outlet></Outlet>
        </div>
        <div>
            <Footer></Footer>
        </div>
            
        </div>
    );
};

export default MainLayout;