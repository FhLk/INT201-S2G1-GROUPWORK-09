import { products } from './products.js';
import {cart} from './cart.js';
import { setCookie } from './cookie.js';

export const feed = document.querySelector('#feed');
showProduct();

export function showProduct(list = products) {
    feed.innerHTML = "";
    for (let pd of list) {
        const productList = document.createElement("div");
        productList.setAttribute('id', pd.id);
        productList.setAttribute("class", "m-2 container col-xs-12 col-md-6 col-lg-6 col-xl-3 card rounded-0 bg-light border-light");
        productList.setAttribute("style", "margin-bottom: 10px; text-align: center; ")

        const productItem = document.createElement("div");
        productItem.setAttribute("class", "card-body text-dark");

        const productImg = document.createElement("img");
        productImg.setAttribute("src", pd.img);
        productImg.setAttribute("height", 200);

        const productId = document.createElement('p');
        productId.textContent = ` ID : ${pd.id}`;

        const productName = document.createElement('p');
        productName.textContent = ` ${pd.name}`;

        const productPrice = document.createElement('p');
        productPrice.textContent = ` Price : ${pd.price}` + ' Baht ';

        const productStock = document.createElement('p');
        productStock.textContent = ` Stock : ${pd.stock}`;

        const productButtom = document.createElement('buttom');
        productButtom.setAttribute("type", "button");
        productButtom.setAttribute("class", " btn btn-outline-dark rounded-0 cart");
        productButtom.textContent = "Add Now";
        productButtom.setAttribute("onclick", "addAlert()");

        productItem.append(productImg,productId,productName,productPrice,productStock,productButtom);

        productList.appendChild(productItem);
        feed.appendChild(productList);

        productButtom.addEventListener('click', () => {
            if (!cart.itemIdIncart.includes(pd.id)) {
                cart.itemIdIncart.push(pd.id);
                addItem(pd.name,pd.id,0,pd.price);
            }
            cart.items.forEach((pc) => {
                if(pc.productId == pd.id){
                    pc.qty += 1;
                    setCookie(pc.productId , pc.qty , new Date(9999,0,1).toUTCString());
                }
            })
            recalculate();
        })
    }
}

export function recalculate(){
    cart.totalPrice = 0;
    cart.totalQty = 0;
    cart.items.forEach((pc) => {
        cart.totalPrice += pc.price * pc.qty;
        cart.totalQty += pc.qty
    })
    document.querySelector('#numqty').textContent = cart.totalQty;
    document.querySelector('#totalprice').textContent = cart.totalPrice + " Baht";
}

export function addItem(name,id,qty,price){
    cart.items.push({
        product: name,
        productId: id,
        qty: qty,
        price: price
    });
}