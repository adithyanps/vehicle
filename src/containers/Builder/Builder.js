import React,{Component } from 'react';
import Dropdown from '../../component/pageBuilder/Dropdown/Dropdown';
import DateField from '../../component/pageBuilder/Date/Date';
import Registrations from '../../component/pageBuilder/Registration/Registration';
import VehiclePrice from '../../component/pageBuilder/VehiclePrice/VehiclePrice';
import axios from '../../axios-orders';



class Builder extends Component {
  state ={
    selectedView: 'Audi',
    text: "select",
    dateTime:new Date(),
    registerField: '',
    amount: '',
    loading: false,
    load:true,
    orders:[],
    // VIEWS : [
    //   {
    //     name: 'Toyota',
    //     minor: ['model','Etios', 'corolla','cruiser','liva'],
    //
    //   }, {
    //     name: 'Landrover',
    //     minor: ['model','rangeRover', 'sport', 'discovery'],
    //
    //   }, {
    //     name: 'Audi',
    //     minor: ['model','Q7', 'A5', 'Q5'],
    //
    //   }, {
    //     name: 'jeep',
    //     minor: ['model','wrangler', 'compass', 'cherokee'],
    //
    //   }
    // ]
  }
  // dataSavehandler = (event) => {
  //   event.preventDefault();
  //   this.setState({loading:true});
  //   const dataContent = {
  //     date:this.state.dateTime,
  //     registrationNo:this.state.registerField,
  //     amount:this.state.amount
  //   }
  //   axios.post('/SavedData.json',dataContent).then( response => {
  //     this.setState({loading:false},console.log(response))
  //   }).catch( error => {
  //     this.setState({ loading:false });
  //   });
  // }
  timeChangedHandler = this.timeChangedHandler.bind(this);

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
                this.setState({load: false, orders: fetchedOrders},console.log(fetchedOrders));
            })
            .catch(err => {
                this.setState({load: false});
            });
    }

  clickedHandler = () => {
    this.setState({ amount: this.refs.textBox.value });
  }
  timeChangedHandler(e) {
      console.log(e.sender.value());
      this.setState({
        dateTime: e.sender.value()
      });
    }
    handleFullNameChangehandler = (e) => {
      this.setState({
        registerField: e.target.value
      })
    }
    handleSubmitHandler = (e) => {
      e.preventDefault();
      console.log(this.state.registerField)
    }
    textHandler = (e) => {
      this.setState({text: e.target.value})
    }



render() {
  const { selectedView } = this.state
  console.log(selectedView)
  console.log(this.state.text)
  console.log(this.state.orders)
  const view1 = this.state.orders.filter(({name}) => name === selectedView)[0]
   console.log(view1)

  const dataSavehandler = (event) => {
    event.preventDefault();
    this.setState({loading:true});
    const dataContent = {
      date:this.state.dateTime,
      registrationNo:this.state.registerField,
      amount:this.state.amount,
      model:this.state.text,
      brand:this.state.selectedView,
    }
    axios.post('/SavedData.json',dataContent).then( response => {
      this.setState({loading:false},console.log(response))
    }).catch( error => {
      this.setState({ loading:false });
    });
  }

  const getMajorMethod = () => {
    const view = this.state.orders.filter(({name}) => name === selectedView)[0]
    console.log(view)
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


  // const view1 = this.state.VIEWS.filter(({name}) => name === selectedView)[0]
  // const getMajorMethod = () => {
  //   const view = this.state.VIEWS.filter(({name}) => name === selectedView)[0]
  //   // console.log(view)
  //   return (
  //     <div>
  //       <select onChange={(e) => this.setState({text:e.target.value})}>
  //         {view.minor.map(m => <option>{m}</option>)}
  //       </select>
  //
  //     </div>
  //   )
  //  }
    return (
      <div>
      <Registrations
          handleSubmit={this.handleSubmitHandler}
          fullName={this.state.registerField}
          handleFullNameChange={this.handleFullNameChangehandler}
          />
      <Dropdown
          data={getMajorMethod}
          Code={this.state.orders}
          Changed={(e) => this.setState({selectedView: e.target.value})}



          />
      <DateField
          Changed={this.timeChangedHandler}
          />
      <input
          ref="textBox"
          type="text"
          placeholder="amount"
          />
      <VehiclePrice
          Clicked={ (e) => { this.clickedHandler(); } }
          text={this.state.amount}
          />
        <button onClick={(e)=>dataSavehandler(e)} >SAVE</button>


      </div>

    );
  }
}
export default Builder;
