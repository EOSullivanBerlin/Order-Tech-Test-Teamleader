import React from 'react';
import PropTypes from 'prop-types';

function FailedOrder(props) {
  if (!props.orderingFailed) { return null; }
  return (
    <div>
      <p>Order could not be placed at this time, try again later</p>
    </div>
  );
}

FailedOrder.propTypes = {
  orderingFailed: PropTypes.bool.isRequired,
};

export default FailedOrder;
