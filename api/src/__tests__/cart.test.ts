import { Cart } from "../types/cart";

const cart = new Cart([], {
  street: "street",
  code: 123,
  province: "prov",
  city: "city",
});

let item = {
  name: "item1",
  price: 100,
};

describe("Cart", () => {
  it("should Add cart item", () => {
    expect(cart.addItemToCart(item)).toHaveLength(1);
  });

  it("should Add cart address", () => {
    expect(cart.addAddressToCart(cart.address)).toEqual(cart.address);
  });

  it("should get all items in cart", () => {
    expect(cart.getAllItemsInCart()).toHaveLength(1);
  });

  it("should get all items in cart with address", () => {
    expect(cart.getAllItemsInCartWithAddress()).toEqual({
      address: cart.address,
      items: cart.items,
    });
  });

  it("should remove item from cart", () => {
    expect(cart.removeItemFromCart(item)).toHaveLength(0);
  });

  it("should get total price of items in cart", () => {
    cart.addItemToCart(item);
    expect(cart.getTotals()).toEqual(100);
  });
});
