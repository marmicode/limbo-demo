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
}

describe('Cart', () => {
  it('should add items', () => {
    const sandwich = createItem('Double Beurre', 6);
    const burger = createItem('Burger', 12);
    const cart = new Cart();
    cart.addItem(sandwich);
    cart.addItem(burger);
    expect(cart.getItems()).toEqual([sandwich, burger]);
  });

  xit('🚧 should get total price', () => {
    const sandwich = createItem('Double Beurre', 6);
    const burger = createItem('Burger', 12);
    const cart = new Cart();
    cart.addItem(sandwich);
    cart.addItem(burger);
    // @todo check cart.getTotalPrice() to equal 18
  });
});
