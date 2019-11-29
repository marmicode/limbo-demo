interface Price {
  amount: number;
  currency: string;
}

interface Item {
  name: string;
  priceAmount: number;
  /**
   * @deprecated 🚧 Work in progress.
   */
  price?: Price;
}

function createItem(args: Item): Item {
  const price = args.price || {
    amount: args.priceAmount,
    currency: 'EUR'
  };

  const priceAmount = args.priceAmount || args.price.amount;

  return {
    name: args.name,
    price,
    priceAmount
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
    sandwich = createItem({ name: 'Double Beurre', priceAmount: 6 });
    burger = createItem({ name: 'Burger', priceAmount: 12 });
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
