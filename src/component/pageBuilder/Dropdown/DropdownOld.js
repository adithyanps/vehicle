import React from 'react';
import axios from '../../../axios-orders';

class Dropdown extends React.Component {

    state = {
      selectedView: 'Audi',
      text: "select",
      loading: true,
      orders:[],
      // VIEWS :[
      //   {
      //     name: 'Toyota',
      //     minor: ['select','Etios', 'corolla','cruiser','liva'],
      //
      //   }, {
      //     name: 'Landrover',
      //     minor: ['select','rangeRover', 'sport', 'discovery'],
      //
      //   }, {
      //     name: 'Audi',
      //     minor: ['select','Q7', 'A5', 'Q5'],
      //
      //   }, {
      //     name: 'jeep',
      //     minor: ['select','wrangler', 'compass', 'cherokee'],
      //
      //   }
      // ]
    }
    componentDidMount() {
          axios.get('/Brand.json')
              .then(res => {
                console.log(res.data)
                  const fetchedOrders = [];
                  for (let key in res.data) {
                      fetchedOrders.push({
                          ...res.data[key],
                          name: key
                      });
                  }
                  this.setState({loading: false, orders: fetchedOrders},console.log(fetchedOrders));
              })
              .catch(err => {
                  this.setState({loading: false});
              });
      }

    handleChanged = (e) => {
      this.setState({selectedView: e.target.value})
    }
    textHandler = (e) => {
      this.setState({text: e.target.value})
    }


  render() {
    const { selectedView } = this.state
    console.log(selectedView)
    console.log(this.state.text)
    console.log(this.state.orders)
    // const view1 = this.state.orders.filter(({name}) => name === selectedView)[0]
    // console.log(view1)
    // for ( var key in view1 ) {
    //   const object = Object.keys(view1.model)
    //   console.log(object)
    // }


    const getMajorMethod = () => {
      const view = this.state.orders.filter(({name}) => name === selectedView)[0]
      for ( var key in view ) {
        const object = Object.keys(view.model)
        console.log(object)

              return (
                <div>
                  <select onChange={this.textHandler}>
                  {object.map(m => <option value={m}>{m}</option>)}
                  </select>

                </div>
              )
      }

    }

    //
    // const getMajorMethod = () => {
    //   const view = this.state.VIEWS.filter(({name}) => name === selectedView)[0]
    //   return (
    //     <div>
    //       <select onChange={this.textHandler}>
    //         {view.minor.map(m => <option>{m}</option>)}
    //       </select>
    //
    //     </div>
    //   )
    // }

    return (
      <div>
        <select onChange={this.handleChanged}>
          {this.state.orders.map(({name}) => <option value={name}>{name}</option>)}
        </select>

        {getMajorMethod()}
      </div>
    )
  }
}
export default Dropdown;
