import React from 'react';
// import PropTypes from 'prop-types';

function Order (props) {
  return (
    <div>
      <ul>
      {
        props.orders.items.map(order => (
          <li key={order.id} onClick={() => props.onItemSelect(order)}>
            {order.description} Quanity:{order.quantity} €{order.total}
          </li>
        ))
      }
      </ul>
        <h1>Total: €{props.orders.total}</h1>
    </div>
  )
}

// Order.propTypes = {
//   orders: PropTypes.obj.isRequired,
// }

export default Order;
