import React,{Component} from 'react';



class VehiclePrice extends Component {
  state = {
      text: ""
    }

  clicked(){
    this.setState({ text: this.refs.textBox.value });
  }

  render(){

    // const img = assets("./images/atomicjolt.jpg");

    return <div>


      <input ref="textBox" type="text" placeholder="amount" />
      <button onClick={ (e) => { this.clicked(); } }>add</button>

      <p> VehiclePrice:  { this.state.text }</p>

    </div>;
  }

}

export default VehiclePrice;
