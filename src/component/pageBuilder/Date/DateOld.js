import React, { Component } from "react";
import { DatePicker } from '@progress/kendo-dateinputs-react-wrapper';
import '@progress/kendo-ui';
import '@progress/kendo-theme-default/dist/all.css';

class Date1 extends Component {
  constructor(props) {
    super(props);
    this.state= {
      dateTime:new Date()
    };
    this.onchange = this.onChange.bind(this);
  }
    onChange(e) {
      console.log(e.sender.value());
      this.setState({
        dateTime: e.sender.value()
      });
    }

  render () {
    return (
      <div>
      <div className="date-DatePicker">
      <p>registrationDate:
          <DatePicker
            value={this.dateTime}
            min={ new Date(2010,1,10)}
            max={ new Date(2030,12,10)}
            format={"dd/MM/yyyy"}
            change={this.onchange}
            />
            </p>
      </div>
      </div>
    );
  }
}
export default Date1;
