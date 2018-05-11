let UpdateOrderFn = {
  updateTotal(orders) {
    let newTotal = orders
    let count = 0
    for (let i = 0; i < newTotal.items.length; i ++){
      count = (parseFloat(newTotal.items[i].total, 10) + count)
    }
    newTotal.total = count.toFixed(2).toString()
    return newTotal
  },

  isThisProductAlreadyIncludedInTheItemArray(product, orders) {
    for (let i = 0; i < orders.items.length; i ++) {
      if(product.id === orders.items[i].id){
        return true;
      }
    }
    return false;
  },

  changeQuantityAndTotalOfItem(product, orders){
    let newOrders = orders
    for(let i = 0; i < newOrders.items.length; i++) {
      if(product.id === newOrders.items[i].id) {
      this.quantityUpdate(newOrders, i)
      this.totalUpdate(newOrders, product, i)
      }
    }
    return newOrders
  },

  quantityUpdate(orders, index) {
    orders.items[index].quantity = (parseFloat(orders.items[index].quantity, 10) + 1).toString()
  },

  totalUpdate(orders, product, index) {
    orders.items[index].total = ((parseFloat(orders.items[index].total, 10) + parseFloat(product.price, 10)).toFixed(2)).toString();
  },

  addNewProductToTheOrder(product, orders) {
    let newOrders =  orders
    newOrders.items = orders.items.concat(this.formatProductForOrder(product))
    return newOrders
  },

  formatProductForOrder(product) {
    let newOrderItem = Object.assign({}, product);
    newOrderItem["quantity"] = "1"
    newOrderItem["unit-price"] = product.price
    newOrderItem["total"] = product.price
    delete newOrderItem.price
    delete newOrderItem.category
    return newOrderItem
  },

  removeItemFromTheArray(item, orders) {
    let updatatedOrder = orders
    for(let i = 0; i < orders.items.length; i++){
      if(updatatedOrder.items[i].id === item.id) {
          updatatedOrder.items.splice(i, 1)
        return updatatedOrder
      }
    }
  }
}

 export default UpdateOrderFn ;
