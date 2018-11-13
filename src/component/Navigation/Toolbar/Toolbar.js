import React from 'react';

import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

// import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = ( props ) => (
    <header className="toolbar">

        <nav className="Toolbar_nav">
          <div className="Toolbar_toggle_button">
          <DrawerToggle click={props.drawerToggleClicked}/>
        </div>

          <div className="Toolbar_logo"><a href="/">Invoice-App</a></div>
            <div className="Logo">
                <Logo />
            </div>
        <div className="spacer" />

          <div className="Toolbar_nav_items">
            <ul>

              <li> <NavigationItems /> </li>
            </ul>
          </div>
        </nav>


    </header>
);

export default toolbar;
