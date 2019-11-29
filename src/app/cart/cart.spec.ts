interface Item {
  name: string;
  price: number;
}

function createItem(name: string, price: number): Item {
  return {
    name,
    price
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
    return this._items.reduce((acc, item) => acc + item.price, 0);
  }
}

describe('Cart', () => {
  let sandwich: Item;
  let burger: Item;

  beforeEach(() => {
    sandwich = createItem('Double Beurre', 6);
    burger = createItem('Burger', 12);
  });

  it('should add items', () => {
    const cart = new Cart();
    cart.addItem(sandwich);
    cart.addItem(burger);
    expect(cart.getItems()).toEqual([sandwich, burger]);
  });

  it('should get total price', () => {
    const cart = new Cart();
    cart.addItem(sandwich);
    cart.addItem(burger);
    expect(cart.getTotalPrice()).toEqual(18);
  });
});
