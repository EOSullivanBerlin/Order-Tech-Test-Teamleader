import React from 'react';
import {shallow} from 'enzyme';
import Order from './Order';

let mockOrders, wrapper;

beforeEach(() => {
  mockOrders = {
      "id": "1",
      "customer-id": "1",
      "items": [
      {
         "id": "A101",
        "description": "Mock Screwdriver",
        "category": "1",
        "price": "9.75"
      },
      {
         "id": "A102",
         "description": "Mock Electric screwdriver",
         "category": "1",
         "price": "49.50"
       }
    ],
    "total": ""
    };
  wrapper = shallow(<Order orders={mockOrders}/>);
});

it('should render a list of all selected items', () => {
  expect(wrapper.find('li').length).toEqual(mockOrders.items.length);
})

it('should display each products description in each <li> element', () => {
  const firstElement = wrapper.find('li').first();
  expect(firstElement.contains(mockOrders.items[0].description)).toEqual(true);
});
