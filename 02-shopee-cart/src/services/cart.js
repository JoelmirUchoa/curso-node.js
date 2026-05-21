 // caso de uso

 //adicionar item ao carrinho
 async function addItem(userCart, item){
    userCart.push(item); 
 }

 //remover item do carrinho
 async function removeItem(usercart, index){}

 //calcular valor total do carrinho
 async function calculateTotal(userCart){
    const total = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`R$ ${total}`);
 }

 export { 
    addItem, 
    removeItem, 
    calculateTotal, 
};