import React from 'react';
import { shallow } from 'enzyme';
import FailedOrder from './FailedOrder';

it('should render a message if order fails', () => {
  let mockProps = true;
  let faliuremessage = 'Order could not be placed at this time, try again later';
  let wrapper = shallow(<FailedOrder
    orderingFailed={mockProps}
    />);
  expect(wrapper.find('p').contains(faliuremessage)).toEqual(true);
});

it('should not render a message if order sucessful', () => {
  let mockProps = false;
  let faliuremessage = 'Order could not be placed at this time, try again later';
  let wrapper = shallow(<FailedOrder
    orderingFailed={mockProps}
    />);
  expect(wrapper.find('p').contains(faliuremessage)).toEqual(false);
});
