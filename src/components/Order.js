import React from 'react';
// import PropTypes from 'prop-types';

function Order (props) {
  return (
    <div>
      <ul>
      {
        props.orders.items.map(item => (
          <li key={item.id} onClick={() => props.onItemSelect(item)}>
            {item.id} {props.findDescription(item.id)} Quanity:{item.quantity} €{item.total}
          </li>
        ))
      }
      </ul>
        <h1>Total: €{props.orders.total}</h1>
        <button onClick={() => props.onPlaceOrder()}>Place Order</button>
    </div>
  )
}

// Order.propTypes = {
//   orders: PropTypes.object.isRequired,
//   onItemSelect: PropTypes.func.isRequired,
//   findDescription: PropTypes.func.isRequired
// }

export default Order;
