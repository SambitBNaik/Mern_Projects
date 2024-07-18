import React from 'react';
import "./NavBar.css";
import logo from "../../Assets/erp-icon.png";
import SideNavbar from './SideNavbar';

const NavBar = () => {
  return (
   <>
      <div className='navbar-container'>
        <div className='logo'>
            <img src={logo} alt='logo' className='logo-image'/>
            <h2 className='logo-text'>ERP SOLUTIONS</h2>
        </div>
        <div className='user-info'>
            <h3 className='user-name-text'>GardenAdmin@GardenWorld.HQ/GardenWorld Admin</h3>
            <div className='operations'>
               <div className='operations-items'>Feedback</div>
               <div className='operations-items'>Preference</div>
               <div className='operations-items'>Change Role</div>
               <div className='operations-items'>Log Out</div>
            </div>
        </div>        
      </div>
      <div className='sidebar'>
        <SideNavbar/>
      </div>
   </>
  );
} 

export default NavBar;
