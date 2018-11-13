import React from 'react';

import jeepLogo from '../../assets/images/jeep.png';
import './Logo.css';

const logo = (props) => (
    <div className="Logo" style={{height: props.height}}>
        <img src={jeepLogo} alt="cement" />
    </div>
);

export default logo;
