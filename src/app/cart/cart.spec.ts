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

/**
 * @deprecated 🚧 Work in progress.
 */
class Cart {}

describe('Cart', () => {
  it('🚧 should add items', () => {
    const sandwich = createItem('Double Beurre', 6);
    const burger = createItem('Burger', 12);
    const cart = new Cart();
    // cart.addItem(sandwich)
    // cart.addItem(burger)
    // expect(cart.getItems()).toEqual([sandwich, burger])
  });
});
