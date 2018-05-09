import React from 'react';
import {shallow} from 'enzyme';
import ProductList from './ProductList';

let mockProducts, wrapper, productSelectFn;

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
  productSelectFn = jest.fn();
    wrapper = shallow(<ProductList
       products={mockProducts}
       onProductSelect={productSelectFn}
       />);
});

it('should call props.onProductselect when an <li> is clicked', () => {
  const firstElement = wrapper.find('li').first();
  expect(productSelectFn.mock.calls.length).toEqual(0);
  firstElement.simulate('click');
  expect(productSelectFn.mock.calls.length).toEqual(1);
  expect(productSelectFn.mock.calls[0][0]).toEqual(mockProducts[0]);
});

it('should render a list of products as an unordered list', () => {
  expect(wrapper.find('li').length).toEqual(mockProducts.length);
});

it('should display the product description in each <li> element', () => {
  const firstElement = wrapper.find('li').first();
  expect(firstElement.contains(mockProducts[0].description)).toEqual(true);
});

afterEach(() => {
  productSelectFn.mockReset();
});
