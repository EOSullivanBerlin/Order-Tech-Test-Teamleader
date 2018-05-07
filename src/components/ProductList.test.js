import React from 'react';
import {shallow} from 'enzyme';
import ProductList from './ProductList';


it('should render a list of products as an unordered list', () => {
  const mockProducts = [
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
  const wrapper = shallow(<ProductList products={mockProducts}/>);
  expect(wrapper.find('li').length).toEqual(mockProducts.length);
});
