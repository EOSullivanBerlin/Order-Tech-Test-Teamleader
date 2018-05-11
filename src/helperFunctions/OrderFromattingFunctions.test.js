import UpdateOrderFn from './OrderFormattingFunctions'

let mockOrder, mockProduct, mockProductTwo;

beforeEach(() => {
  mockOrder = {
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
        "id": "B103",
        "quantity": "1",
        "unit-price": "12.95",
        "total": "12.95"
      }
    ],
    "total": ""
  }
  mockProduct = {
     "id": "A101",
    "description": "Screwdriver",
    "category": "1",
    "price": "9.75"
  }
  mockProductTwo = {
      "id": "A102",
      "description": "Electric screwdriver",
      "category": "1",
      "price": "49.50"
  }
});

describe('isThisProductAlreadyIncludedInTheItemArray ', () => {
  it('should return true if the item already on a list', () => {
      expect(UpdateOrderFn.isThisProductAlreadyIncludedInTheItemArray(mockProduct, mockOrder)).toBe(true);
  });

  it('should return false is not the item already on a list', () => {
      expect(UpdateOrderFn.isThisProductAlreadyIncludedInTheItemArray(mockProductTwo, mockOrder)).toBe(false);
  });
});

describe('quantityUpdate', () => {
  it('should change the quantity of an item by one', () => {
    UpdateOrderFn.quantityUpdate(mockOrder, 0)
    expect(mockOrder.items[0].quantity).toEqual('2')
  });
});

describe('totalUpdate', () => {
  it('should change correctly update the total', () => {
    UpdateOrderFn.totalUpdate(mockOrder, mockProduct, 0)
    expect(mockOrder.items[0].total).toEqual('19.50')
  });

});
