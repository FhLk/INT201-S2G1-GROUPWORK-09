import { products } from './products.js';
import { getAllCookie , getKey , getValue , deleteData } from './cookie.js';
import { recalculate , addItem} from './product-list.js';

export let cart = { items: [], itemIdIncart: [] , totalPrice: 0, totalQty: 0 };

oldCart();

document.getElementById('clear').addEventListener('click', () => {
    cart = { items: [], itemIdIncart: [] , totalPrice: 0, totalQty: 0 }
    document.getElementById('numqty').textContent = "0";
    document.getElementById('totalprice').textContent = "Price : 0";
    deleteData();
})

document.getElementById('cart').addEventListener('click', () => { alert(showItemInCart()); })

function showItemInCart() {
    let string = ""
    cart.items.forEach((i) =>{ string += `${i.product} Price : ${i.price} Baht Qty : ${i.qty}\n`})
    string += `\n Total Qty : ${cart.totalQty} \n Total Price : ${cart.totalPrice} Baht `;
    return string;
}

function oldCart(){
    getAllCookie().forEach((i , index) =>{ cart.itemIdIncart.push(getKey(index)); })
    if(document.cookie.length > 0){
    getAllCookie().forEach((i , index)=>{
        let name = products.find((pd) => {return pd.id == getKey(index);}).name;
        let qty = parseInt(getValue(getKey(index)));
        let price = products.find((pd) => {return pd.id == getKey(index);}).price;
        addItem(name,getKey(index),qty,price);
    })
    }
    recalculate();
}
