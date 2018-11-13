import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <div>
    <ul> <NavigationItem link="/saved-items">Saved</NavigationItem></ul>
    <hr />
      <ul className="NavigationItems">
            <NavigationItem link="/" exact>HOME</NavigationItem>

        </ul>
      </div>
);

export default navigationItems;
