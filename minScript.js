// console.log('Exporting modules');
const shippCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product}, ${quantity} was added to  cart`);
};
