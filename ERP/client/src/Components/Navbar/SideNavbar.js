import React from 'react';
import "./SideNavbar.css";
import { MdOutlineHelp } from "react-icons/md";
import { TfiAngleDown } from "react-icons/tfi";
import { RiExpandDiagonalLine } from "react-icons/ri";


const SideNavbar = () => {
  return (
    <div className='side-nav'>
        <div className="favorites-container">
          <div className='favorites'>
            <h2 className='fav-text'>Favroites</h2>
            <span>
                <MdOutlineHelp />
            </span>
        </div>
        <div className='side-bar-icons'>
            <button className='angle-down'><TfiAngleDown /></button>
            <button className="expand-icon"><RiExpandDiagonalLine /></button>
        </div>
        </div>
        <div className='z-panel-body'>
          <div className='outer-border'>
            
          </div>
        </div>
    </div>
  )
}

export default SideNavbar