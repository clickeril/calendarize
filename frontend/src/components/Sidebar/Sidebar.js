import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

import { MdShortText } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { MdOutlineEditCalendar } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <MdShortText className='icon'/>
      <ul className="sidebar-menu">
        <li>
        <Link to="/profile"><CgProfile className='list-icon'/></Link>
        </li>
        <li>
        <Link to="/dashboard"><IoHomeOutline className='list-icon'/></Link>
        </li>
        <li>
        <Link to="/leave"><MdOutlineEditCalendar className='list-icon'/></Link>
        </li>

        <li>
        <Link to="/admin"><GrUserAdmin className='list-icon'/></Link>
        </li>

        <li>
          <Link to="/"><BiLogOut className='logout-icon'/></Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
