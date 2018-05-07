import React, { Component } from 'react';
import ProductList from './components/ProductList';

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
      order: []
    }
  }

  handelProductSelect (product) {
    this.setState(prevState => {
      return {
        order: prevState.selectedProducts.concat(product)
      }
    });
  }

  render() {
    return (
      <div>
      <h1>Products</h1>
      <ProductList
        products={this.state.products}
        onProductSelect={this.handelProductSelect.bind(this)}
      />
      </div>
    );
  }
}

export default App;
