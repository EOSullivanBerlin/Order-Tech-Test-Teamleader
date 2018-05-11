import React, { Component } from 'react';
import ProductList from './components/ProductList';
import Order from './components/Order';
import axios from 'axios';
import UpdateOrderFn  from './helperFunctions/OrderFormattingFunctions';
import Data from './exampleData/Data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: Data.productsList,
      orders: Data.orders,
    };
  }

  handelProductSelection (product) {
    if (UpdateOrderFn.isThisProductAlreadyIncludedInTheItemArray(product, this.state.orders)) {
      this.setState({ orders: UpdateOrderFn.changeQuantityAndTotalOfItem(product, this.state.orders) });
    } else {
      this.setState({ orders: UpdateOrderFn.addNewProductToTheOrder(product, this.state.orders) });
    }
    this.setState({ orders: UpdateOrderFn.updateTotal(this.state.orders) });
  }

  handleFindDescription(orderId) {
    let description;
    for (let i = 0; i < this.state.products.length; i++) {
      if (this.state.products[i].id === orderId) {
        description = this.state.products[i].description;
      }
    }
    return description;
  }

  handelItemSubtraction(item) {
    this.setState({ orders: UpdateOrderFn.removeItemFromTheArray(item, this.state.orders) });
    this.setState({ orders: UpdateOrderFn.updateTotal(this.state.orders) });
  }

  handelOnPlaceOrder() {
    axios.post('https://httpbin.org/post',
    { orders: this.state.orders }).then(response => { if (response.status === 200) {
              console.log('Order sucessful. Your items will be dispached in three days.');
            }
          }).catch(error => {
            console.log('Order could not be placed at this time, try again later.');
          });
  };

  render() {
    return (
      <div>
        <h1>Products</h1>
        <ProductList
          products={this.state.products}
          onProductSelect={this.handelProductSelection.bind(this)}
        />
      <div>
           <h1>Your Order</h1>
           <Order
            orders={this.state.orders}
            findDescription={this.handleFindDescription.bind(this)}
            onItemSelect={this.handelItemSubtraction.bind(this)}
            onPlaceOrder={this.handelOnPlaceOrder.bind(this)}
           />
        </div>
      </div>
    );
  }
}

export default App;
