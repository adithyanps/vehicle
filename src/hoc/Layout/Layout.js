import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import './Layout.css';
import Toolbar from '../../component/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../component/Navigation/SideDrawer/SideDrawer';
import Backdrop from '../../component/UI/Backdrop/Backdrop';

class Layout extends Component {
  state={
    showSideDrawer:false
  }
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  };
  backdropClickHandler = () => {
    this.setState({showSideDrawer: false})
  }
  render() {
    let sideDrawer;
    let backdrop;
    if (this.state.showSideDrawer) {
      sideDrawer=  <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }
    return (
      <Aux>
        <div style={{height: '100%'}}>
          <Toolbar drawerToggleClicked={this.drawerToggleClickHandler}/>
          {sideDrawer}
          {backdrop}

          <main className="Content">
            {this.props.children}
          </main>
        </div>
      </Aux>
    );

  }
}

export default Layout;
