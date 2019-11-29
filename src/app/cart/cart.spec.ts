interface Item {
  name: string;
  price: number;
}

function createItem({ name, price }: { name: string; price: number }): Item {
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
  let cart: Cart;

  beforeEach(() => {
    sandwich = createItem({ name: 'Double Beurre', price: 6 });
    burger = createItem({ name: 'Burger', price: 12 });
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
