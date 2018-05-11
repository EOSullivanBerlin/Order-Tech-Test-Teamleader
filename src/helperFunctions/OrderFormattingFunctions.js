
let updateTotal(orders) {
  let newTotal = orders
  let count = 0
  for (let i = 0; i < newTotal.items.length; i ++){
    count = (parseFloat(newTotal.items[i].total, 10) + count)
  }
  newTotal.total = count.toFixed(2).toString()
  return newTotal
}

 export default {updateTotal};
