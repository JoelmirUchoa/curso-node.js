 // Quais açoes o carrinho deve ser capaz de realizar?

 //adicionar um item ao carrinho
 async function addItem(userCart, item){
    userCart.push(item); 
 }
 //remover um item do carrinho
 async function removeItem(usercart, item){

   //1. encontrar o index do item no carrinho
   const indexFound = usercart.findIndex(p => p.name === item.name);

   //2. Caso nao encontre o item, exibir mensagem de erro
   if (indexFound === -1) {
     console.log(`Item ${item.name} não encontrado no carrinho.`);
     return;
   }

   //3. Caso encontre >1 o item, remover do carrinho
   if (usercart[indexFound].quantity > 1) {
     usercart[indexFound].quantity -= 1;
     return;
   }

   //4. Caso encontre o item com quantity = 1, remover do carrinho
   if (usercart[indexFound].quantity === 1) {
     usercart.splice(indexFound, 1);
     return;
   }
 }
//deletar item do carrinho
 async function deleteItem(userCart, name){
   const indexX = userCart.findIndex(itemCart => itemCart.name === name);
   if (indexX !== -1) {
     userCart.splice(indexX, 1);
   }
 }
 //calcular total do carrinho
 async function calculateTotal(userCart){
    console.log("\n Shopee Cart Total:");
    const total = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`R$ ${total}`);
 }

 async function displayCart(userCart){
    console.log("\n Itens no carrinho:");
    userCart.forEach((item, index) => {
        console.log(` ${index + 1}- ${item.name}: R$ ${item.price} x ${item.quantity} = 🛒R$ ${item.subtotal()}`);
    });
 }

//exportando as funções
 export { 
    addItem, 
    removeItem, 
    deleteItem,
    calculateTotal, 
    displayCart
};