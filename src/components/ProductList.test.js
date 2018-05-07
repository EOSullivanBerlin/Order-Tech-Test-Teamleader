import React from 'react';
import {shallow} from 'enzyme';
import ProductList from './ProductList';

let mockProducts, wrapper;

beforeEach(() => {
  mockProducts = [
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
  ];
    wrapper = shallow(<ProductList products={mockProducts}/>);
});

it('should render a list of products as an unordered list', () => {
  expect(wrapper.find('li').length).toEqual(mockProducts.length);
});


it('should display the product description in each <li> element', () => {
  const firstElement = wrapper.find('li').first();
  expect(firstElement.contains(mockProducts[0].description)).toEqual(true);
});
