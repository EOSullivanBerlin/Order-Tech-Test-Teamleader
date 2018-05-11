import UpdateOrderFn from './OrderFormattingFunctions';

let mockOrder, mockProduct, mockProductTwo, mockItem;

beforeEach(() => {
  mockOrder = {
    'id': '1',
    'customer-id': '1',
    'items': [
      {
        'id': 'A101',
        'quantity': '1',
        'unit-price': '9.75',
        'total': '9.75',
      },
      {
        'id': 'B103',
        'quantity': '1',
        'unit-price': '12.95',
        'total': '12.95',
      },
    ],
    'total': '',
  };
  mockProduct = {
    'id': 'A101',
    'description': 'Screwdriver',
    'category': '1',
    'price': '9.75',
  };
  mockProductTwo = {
      'id': 'A102',
      'description': 'Electric screwdriver',
      'category': '1',
      'price': '49.50',
    };
  mockItem = {
    'id': 'A101',
    'quantity': '1',
    'unit-price': '9.75',
    'total': '9.75',
  };
});

describe('isThisProductAlreadyIncludedInTheItemArray ', () => {
  it('should return true if the item already on a list', () => {
      expect(UpdateOrderFn.isThisProductAlreadyIncludedInTheItemArray(mockProduct, mockOrder)).toBe(true);
    });

  it('should return false if the item is not already on a list', () => {
      expect(UpdateOrderFn.isThisProductAlreadyIncludedInTheItemArray(mockProductTwo, mockOrder)).toBe(false);
    });
});

describe('changeQuantityAndTotalOfItem', () => {
  it('should iterate through a list of items and update a particualr item', () => {
    UpdateOrderFn.changeQuantityAndTotalOfItem(mockProductTwo, mockOrder);
    expect(mockOrder.items[0].total).toEqual('9.75');
    UpdateOrderFn.changeQuantityAndTotalOfItem(mockProduct, mockOrder);
    expect(mockOrder.items[0].total).toEqual('19.50');
    expect(mockOrder.items[0].quantity).toEqual('2');
  });
});

describe('quantityUpdate', () => {
  it('should change the quantity of an item by one', () => {
    UpdateOrderFn.quantityUpdate(mockOrder, 0);
    expect(mockOrder.items[0].quantity).toEqual('2');
  });
});

describe('totalUpdate', () => {
  it('should change correctly update the total', () => {
    UpdateOrderFn.totalUpdate(mockOrder, mockProduct, 0);
    expect(mockOrder.items[0].total).toEqual('19.50');
  });
});

describe('addNewProductToTheOrder', () => {
  it('should add a new item to the order', () => {
    UpdateOrderFn.addNewProductToTheOrder(mockProduct, mockOrder);
    expect(mockOrder.items.length).toEqual(3);
  });
});

describe('formatProductForOrder', () => {
  it('should format the order items correctly', () => {
    let expectedReturnFormat = {
      'id': 'A101',
      'quantity': '1',
      'unit-price': '9.75',
      'total': '9.75',
    };
    expect(UpdateOrderFn.formatProductForOrder(mockProduct)).toEqual(expectedReturnFormat);
  });
});

describe('removeItemFromTheArray', () => {
  it('should remove an Item from the order list array', () => {
    UpdateOrderFn.removeItemFromTheArray(mockItem, mockOrder);
    expect(mockOrder.items.length).toEqual(1);
  });
  it('should remove the correct Item', () => {
    let mockItemTwo = {
      'id': 'B103',
      'quantity': '1',
      'unit-price': '12.95',
      'total': '12.95',
    };
    UpdateOrderFn.removeItemFromTheArray(mockItem, mockOrder);
    expect(mockOrder.items[0]).toEqual(mockItemTwo);
  });
});
