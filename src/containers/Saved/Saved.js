import React , {Component} from 'react';
// import Order from '../../component/Saved/SavedOrder';
import axios from '../../axios-orders';
import '../../component/Saved/SavedOrder.css'


class SavedData extends Component {
  state= {
    loading:true,
    orders:[]
  }
  componentDidMount() {
        axios.get('/SavedData.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({loading: false, orders: fetchedOrders},console.log(fetchedOrders));
            })
            .catch(err => {
                this.setState({loading: false});
            });
    }

  render () {
    console.log(this.state.orders)
    return (
      <div>
        {this.state.orders.map(order => (
          <div className="Order" key={order.id}>
          <p><strong>Brand-Name:</strong>{order.brand}</p>
          <p><strong>Model-Name:</strong>{order.model}</p>
          <p><strong>TotelAmount: </strong> {order.amount}<strong>INR</strong></p>
          <p><strong>date:</strong>{order.date}</p>
          <p><strong>Registration-No: </strong> {order.registrationNo}</p>


          </div>


        ))}
      </div>

    );
  }
}
export default SavedData;
