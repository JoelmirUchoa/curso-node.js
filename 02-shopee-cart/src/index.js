import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWishList = [];

const item1 = await createItem("carrinho ferrari", 9.90, 2);
const item2 = createItem("carrinho fusca", 20.99, 2);

await cartService.addItem(myCart, item1);
await cartService.addItem(myWishList, item2);

console.log("Shopee Cart Total:");
await cartService.calculateTotal(myCart);