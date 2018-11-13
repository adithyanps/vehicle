import React , {Component} from 'react';
class Input extends Component {
state = {
    tagged: false,
    message: '',
    input1: '',

}

handleClick(e) {
    // access input values in the state
    console.log(this.state) // {tagged: true, input1: 'text', input2: 'text2'}
    this.setState({tagged: true});
    e.preventDefault();
    console.log('The link was clicked.');
}

handleInputChange = (e) => {
  this.setState({
   name: e.target.value
 })
}

render() {
    return (
        <div id="id" >
            <p> hello </p>
            <input

                placeholder="user@email.com"
                type="text"
                onChange={(e) => this.handleInputChange(e)}
            >
            </input>



            <button
                onClick={this.handleInputChange}
                >
                {this.state.tagged ? 'Tagged' : 'Tag ' }
            </button>

            <p>
                num:{this.state.name}
            </p>
        </div>
    )
}
}


export default Input;
