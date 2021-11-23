import { showProduct } from "./product-list.js";
import { products } from './products.js';

let toggle = false; 
const active = document.querySelector('#active');
const searchValue = document.querySelector('#searchValue');

document.getElementById('search').addEventListener("click", () => {
    toggle = !toggle;
    if (toggle) {
        let item = [];
        active.setAttribute('style','display: block; ');
        searchValue.setAttribute('style','display: block;');
        active.addEventListener("click", () => {
            (!(item.length))? showProduct(products): showProduct(item);
        })
        searchValue.addEventListener('keyup', () => {
            let value = new RegExp(String(searchValue.value), 'i')
            item = products.filter((p) => { return p.name.match(value) != null;})
            if(searchValue.value.length === 0){showProduct(products)}
        })
    }else{
        active.setAttribute('style','display: none;');
        searchValue.setAttribute('style','display: none;');
    }

})