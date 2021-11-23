import {getValue , deleteData } from './cookie.js';
import { recalculate } from './product-list.js';

export let cart = { items: [], itemIdIncart: [] , 
                    totalPrice: 0, totalQty: 0 ,
                    save : () => {
                        if((document.cookie.length)){
                            cart = JSON.parse(getValue('cart'))
                            recalculate();
                        }
                    }
                    };
cart.save();

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