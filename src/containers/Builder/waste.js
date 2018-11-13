state = {
  selectedView: 'Toyota',
  textpad : '',
  VIEWS : [
    {
      name: 'Toyota',
      minor: ['Etios', 'corolla','cruiser','liva'],

    }, {
      name: 'Landrover',
      minor: ['rangeRover', 'sport', 'discovery'],

    }, {
      name: 'Audi',
      minor: ['Q7', 'A5', 'Q5'],

    }, {
      name: 'jeep',
      minor: ['wrangler', 'compass', 'cherokee'],

    }
  ]
}
changeHandler = (event,e) => {
  event.preventDefault();
  this.setState({selectedView:e.target.value})
  console.log(this.state.selectedView)
}
Farmer = () => {
    const view = this.state.VIEWS.filter(({name}) => name === this.state.selectedView)[0];
    if (view) {
      view.minor.map((m) => this.setState({textpad:m},console.log(this.state.textpad)))
    }
    console.log(view)

    }

render() {
  const { selectedView } = this.state





  return (
    <div>
      <select onChange={this.changeHandler}>
        {this.state.VIEWS.map(({name}) => <option value={name}>{name}</option>)}
      </select>
        <select onChange={this.Farmer}>
            <option value={this.state.textpad}>{this.state.textpad}</option>
        </select>


    </div>
  )
}
}
export default Dropdown;








orginal

import React from 'react';

class Dropdown extends React.Component {

    state = {
      selectedView: 'Toyota'
    }


  render() {
    const { selectedView } = this.state
    const VIEWS = [
      {
        name: 'Toyota',
        minor: ['Etios', 'corolla','cruiser','liva'],

      }, {
        name: 'Landrover',
        minor: ['rangeRover', 'sport', 'discovery'],

      }, {
        name: 'Audi',
        minor: ['Q7', 'A5', 'Q5'],

      }, {
        name: 'jeep',
        minor: ['wrangler', 'compass', 'cherokee'],

      }
    ]

    const getMajorMethod = () => {
      const view = VIEWS.filter(({name}) => name === selectedView)[0]
      return (
        <div>
          <select>
            {view.minor.map(m => <option>{m}</option>)}
          </select>

        </div>
      )
    }
    return (
      <div>
        <select onChange={(e) => this.setState({selectedView: e.target.value})}>
          {VIEWS.map(({name}) => <option value={name}>{name}</option>)}
        </select>

        {getMajorMethod()}
      </div>
    )
  }
}
export default Dropdown;
