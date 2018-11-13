import React, { Component } from "react";
import { DatePicker } from '@progress/kendo-dateinputs-react-wrapper';
import '@progress/kendo-ui';
import '@progress/kendo-theme-default/dist/all.css';

class Date1 extends Component {

  render () {
    return (
      <div>
      <div className="date-DatePicker">
      <p>
          <DatePicker
            value={this.dateTime}
            min={ new Date(2010,1,10)}
            max={ new Date(2030,12,10)}
            format={"dd/MM/yyyy"}
            change={this.props.Changed}
            
            />
            </p>
      </div>
      </div>
    );
  }
}
export default Date1;
