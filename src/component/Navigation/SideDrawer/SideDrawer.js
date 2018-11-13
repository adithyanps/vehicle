import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';

const sideDrawer = ( props ) => (
  <nav className="side-drawer">
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/saved-items">Saved</a></li>

    </ul>
  </nav>
)

export default sideDrawer;
