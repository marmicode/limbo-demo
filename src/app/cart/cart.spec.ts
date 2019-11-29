interface Price {
  amount: number;
  currency: string;
}

interface Item {
  name: string;
  price: Price;
}

function createItem(args: Item): Item {
  return {
    name: args.name,
    price: args.price
  };
}

class Cart {
  private _items: Item[] = [];

  addItem(item: Item) {
    this._items = [...this._items, item];
  }

  getItems() {
    return this._items;
  }

  getTotalPrice() {
    return this._items.reduce((acc, item) => acc + item.price.amount, 0);
  }
}

describe('Cart', () => {
  let sandwich: Item;
  let burger: Item;
  let cart: Cart;

  beforeEach(() => {
    sandwich = createItem({
      name: 'Double Beurre',
      price: { amount: 6, currency: 'EUR' }
    });
    burger = createItem({
      name: 'Burger',
      price: { amount: 12, currency: 'EUR' }
    });
    cart = new Cart();
  });

  it('should add items', () => {
    cart.addItem(sandwich);
    cart.addItem(burger);
    expect(cart.getItems()).toEqual([sandwich, burger]);
  });

  it('should get total price', () => {
    cart.addItem(sandwich);
    cart.addItem(burger);
    expect(cart.getTotalPrice()).toEqual(18);
  });
});
