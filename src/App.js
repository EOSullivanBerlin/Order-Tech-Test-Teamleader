import React, { Component } from 'react';
import ProductList from './components/ProductList';
import Order from './components/Order';
import axios from 'axios';
//import updateTotal from './helperFunctions/OrderFormattingFunctions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
       {
          "id": "A101",
         "description": "Screwdriver",
         "category": "1",
         "price": "9.75"
       },
       {
          "id": "A102",
          "description": "Electric screwdriver",
          "category": "1",
          "price": "49.50"
        },
        {
          "id": "B101",
          "description": "Basic on-off switch",
          "category": "2",
          "price": "4.99"
        },
        {
          "id": "B102",
          "description": "Press button",
          "category": "2",
          "price": "4.99"
        },
        {
          "id": "B103",
          "description": "Switch with motion detector",
          "category": "2",
          "price": "12.95"
        }
      ],
      orders: {
        "id": "1",
        "customer-id": "1",
        "items": [
        ],
      "total": ""
      }
    }
  }

  handelProductSelection (product) {
    if (this.isThisProductAlreadyIncludedInTheItemArray(product, this.state.orders)){
        this.setState({
          orders: this.ChangeQuantityOfItem(product, this.state.orders)
        })
    } else {
        this.setState({
          orders: this.AddNewProductToTheOrder(product, this.state.orders)
        })
    }
    this.setState({orders: this.updateTotal(this.state.orders)})
  }

  updateTotal(orders) {
    let newTotal = orders
    let count = 0
    for (let i = 0; i < newTotal.items.length; i ++){
      count = (parseFloat(newTotal.items[i].total, 10) + count)
    }
    newTotal.total = count.toFixed(2).toString()
    return newTotal
  }


  isThisProductAlreadyIncludedInTheItemArray(product, orders) {
    for (let i = 0; i < orders.items.length; i ++) {
      if(product.id === orders.items[i].id){
        return true;
      }
    }
    return false;
  }

  ChangeQuantityOfItem(product, orders){
    let newOrders = orders
    for(let i = 0; i < newOrders.items.length; i++) {
      if(product.id === newOrders.items[i].id) {
      newOrders.items[i].quantity = (parseFloat(newOrders.items[i].quantity, 10) + 1).toString()
      newOrders.items[i].total = ((parseFloat(newOrders.items[i].total, 10) + parseFloat(product.price, 10)).toFixed(2)).toString();
      }
    }
    return newOrders
    }

    AddNewProductToTheOrder(product, orders) {
      let newOrders =  orders
      newOrders.items = orders.items.concat(this.formatProductForOrder(product))
      return newOrders
    }

    formatProductForOrder(product) {
      let newOrderItem = Object.assign({}, product);
      newOrderItem["quantity"] = "1"
      newOrderItem["unit-price"] = product.price
      newOrderItem["total"] = product.price
      delete newOrderItem.price
      delete newOrderItem.category
      return newOrderItem
    }


    handleFindDescription(orderId) {
      console.log('hi')
      let returnValue;
      for(let i = 0; i < this.state.products.length; i ++){
        if (this.state.products[i].id === orderId) {
          returnValue = this.state.products[i].description
        }
      }
      return returnValue;
    }

    handelOrderItemSubtraction(item) {
      this.removeItemFromTheArray(item)
      this.updateTotal()
    }

    removeItemFromTheArray(item) {
      let replacementOrder = this.state.orders
      for(let i = 0; i < this.state.orders.items.length; i++){
      if(replacementOrder.items[i].id === item.id) {
        replacementOrder.items.splice(i, 1)
        this.setState({orders: replacementOrder})
      }
      }
    }

    handelOnPlaceOrder() {
      axios.post('https://httpbin.org/post',
    {
      orders: this.state.orders
    })
      .then(response => {if(response.status === 200){
                console.log("Order sucessful. Your items will be dispached in three days.")
            }
          }).catch(error => {
            console.log("Order could not be placed at this time, try again later.")
          })
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
        onItemSelect={this.handelOrderItemSubtraction.bind(this)}
        onPlaceOrder={this.handelOnPlaceOrder.bind(this)}
       />
      </div>
      </div>
    );
  }
}

export default App;
