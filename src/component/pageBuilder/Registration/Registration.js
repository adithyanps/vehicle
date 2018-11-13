import React, { Component } from 'react';

class Registration extends Component {
  state = {
      fullName: ''
    }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>

            <input
              type="text"
              value={this.props.fullName}
              onChange={this.props.handleFullNameChange}
              name="fullName"
              placeholder="Your-RegistrationNo"/>

          <p>RegistrationNo:{this.props.fullName}</p>
        </form>
      </div>
    );
  }
}

export default Registration;
