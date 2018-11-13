import React,{Component} from 'react';



class Registration extends Component {
  state = {
      text: ""
    }

  clicked(){
    this.setState({ text: this.refs.textBox.value });
  }

  render(){

    // const img = assets("./images/atomicjolt.jpg");

    return <div>


      <input ref="textBox" type="text" placeholder="vehicle number" />
      <button onClick={ (e) => { this.clicked(); } }>add</button>

      <p>registration number:  { this.state.text }</p>

    </div>;
  }

}

export default Registration;
