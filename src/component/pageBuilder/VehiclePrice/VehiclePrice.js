import React, { Component } from 'react';

class VehiclePrice extends Component {


  render(){

    // const img = assets("./images/atomicjolt.jpg");

    return <div>



      <button onClick={this.props.Clicked}>add</button>

      <p> VehiclePrice:  { this.props.text }</p>

    </div>;
  }

}

export default VehiclePrice;
