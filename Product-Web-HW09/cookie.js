export function getAllCookie(){
    return document.cookie.split('; ');
}
export function getKey(i){
    let arrayOfKeyCookie = [];
    let index = 0;
    getAllCookie().forEach((i) =>{
        let key = i.split('=');
        arrayOfKeyCookie[index++] = key[0];
    })
    return arrayOfKeyCookie[i];
}
export function getValue(keys) {
    for(let i of getAllCookie()){
        let key = i.split('=');
        if(key[0] == keys){return key[1];}
    }
}
export function deleteData(){
    for(let i = getAllCookie().length-1 ; i >= 0 ; i--){
        setCookie(getKey(i) , getValue(getKey(i)) , 'Thu, 21 Aug 2014 20:00:00 UTC')
    }
}

export function setCookie(key,value,expires = new Date(9999,0,1).toUTCString()){ document.cookie = `${key} = ${value} ; expires= ${expires}`}
