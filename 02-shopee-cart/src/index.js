// importa a função createItem do módulo item.js e todas as funções do módulo cart.js
import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"; 

const myCart = [];
const myWishList = [];

const item1 = await createItem("carrinho ferrari", 20.99, 1);
const item2 = await createItem("carrinho lamborghini", 39.99, 3);

// adicionar itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

 // Remove o primeiro item do carrinho (carrinho ferrari)
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

// deletar item do carrinho
//await cartService.deleteItem(myCart, item2.name);
//await cartService.deleteItem(myCart, item1.name);

// exibir itens no carrinho
await cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);