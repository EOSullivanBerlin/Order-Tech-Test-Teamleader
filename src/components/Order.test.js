import React from 'react';
import {shallow} from 'enzyme';
import Order from './Order';

let mockOrders, mockProducts, wrapper, findDescriptionFn, onItemSelectFn;

beforeEach(() => {
  mockProducts = [
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
     }
  ];

  mockOrders = {
      "id": "1",
      "customer-id": "1",
      "items": [
      {
         "id": "A101",
        "quantity": "1",
        "unit-price": "9.75",
        "total": "9.75"
      },
      {
         "id": "A102",
         "quantity": "2",
         "unit-price": "49.50",
         "total": "99"
       }
    ],
    "total": "108.75"
    };

  findDescriptionFn = jest.fn();
  findDescriptionFn.mockReturnValueOnce('Screwdriver')

  onItemSelectFn = jest.fn();

  wrapper = shallow(<Order
    orders={mockOrders}
    findDescription={findDescriptionFn}
    onItemSelect={onItemSelectFn}
    />);
});

it('should render a list of all selected items', () => {
  expect(wrapper.find('li').length).toEqual(mockOrders.items.length);
});

it('should display each items description in each <li> element', () => {
  const firstElement = wrapper.find('li').first();
  expect(firstElement.contains(mockProducts[0].description)).toEqual(true);
});

it('should call props.findDescriptionFn for each item in an order', () => {
  expect(findDescriptionFn.mock.calls.length).toEqual(2);
});

it('should display each items quantity in each <li> element', () => {
  const firstElement = wrapper.find('li').first();
  expect(firstElement.contains(mockOrders.items[0].id)).toEqual(true);
});

it('should display an item total', () => {
  const firstElement = wrapper.find('li').first();
  expect(firstElement.contains(mockOrders.items[0].total)).toEqual(true);
});

it('should display a quantity', () => {
  const firstElement = wrapper.find('li').first();
  expect(firstElement.contains(mockOrders.items[0].quantity)).toEqual(true);
});

it('should display a grand total', () => {
  const total = wrapper.find('h1');
  expect(total.contains(mockOrders.total)).toEqual(true);
});

it('should call props.onItemSelectFn when an <li> is clicked', () => {
  const firstElement = wrapper.find('li').first();
  expect(onItemSelectFn.mock.calls.length).toEqual(0);
  firstElement.simulate('click');
  expect(onItemSelectFn.mock.calls.length).toEqual(1);
  expect(onItemSelectFn.mock.calls[0][0]).toEqual(mockOrders.items[0]);
});
