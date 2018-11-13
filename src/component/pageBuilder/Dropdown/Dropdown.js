import React from 'react';

class Dropdown extends React.Component {



  render() {
    console.log()

    return (
      <div>
        <select onChange={this.props.Changed}>
          {this.props.Code.map(({name}) => <option value={name}>{name}</option>)}
        </select>

      {this.props.data()}

      </div>
    )
  }
}
export default Dropdown;
//
