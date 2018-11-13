
import React,{Component} from 'react';
import axios from '../../axios-orders';
class Test1 extends Component {
  state = {
    selectValue : "Radish",
    loading:false

  }
    handleChange = (e) => {
    this.setState({selectValue:e.target.value});

  }
  render () {
    let array = this.state.selectValue;
    let tap=((event) => {
      event.preventDefault();
      this.setState({loading:true});
      const dataContent = {
        data:array
      }
      axios.post('/SavedData.json',dataContent).then( response => {
        this.setState({loading:false},console.log(response))
      }).catch( error => {
        this.setState({ loading:false });
      });
    })

    var message='You selected '+this.state.selectValue;
    return (
      <div>
      <select
        value={this.state.selectValue}
        onChange={this.handleChange}
      >
       <option value="Orange">Orange</option>
        <option value="Radish">Radish</option>
        <option value="Cherry">Cherry</option>
      </select>
      <p>{message}</p>
      <button onClick={tap}>add</button>
      </div>
    );
  }
};
export default Test1;
