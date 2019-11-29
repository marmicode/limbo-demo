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

describe('Cart', () => {
  xit('🚧 should add items', () => {
    const sandwich = createItem('Double Beurre', 6);
    const burger = createItem('Burger', 12);
    // const cart = new Cart()
    // cart.addItem(sandwich)
    // cart.addItem(burger)
    // expect(cart.getItems()).toEqual([sandwich, burger])
  });
});
