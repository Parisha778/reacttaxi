import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from './Sidebar.jsx';
import Styles from './Dashboard.module.css';


function DashbordLayout() {
  return (
    
        <>
        <div className={Styles.dashboard}>    
            <Sidebar/>
            
            <Outlet/>           
        </div>
        </>

   
  )
}

export default DashbordLayout