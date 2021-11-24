let username = document.getElementById('username');
let button = document.getElementById('change');
currentUser();

function setName() {
    let name = prompt('Enter your name');
    if (name == null || name =='') {
        localStorage.removeItem('username');
        button.innerHTML = 'Login';
    } else {
        localStorage.setItem('username', name);
        username.innerHTML = name;
        button.innerHTML = 'Logout';
    }
}

button.addEventListener('click', () => {
    if ((button.innerHTML == 'Logout')) {
        button.innerHTML = 'Login';
        localStorage.removeItem('username');
        username.innerHTML = 'Guest'
    } else {
        button.innerHTML == 'Logout';
        setName();
    }
})

function currentUser() {
    if (localStorage.getItem('username') == null || localStorage.getItem('username') == 'null') {
        username.innerHTML = 'Guest'
        button.innerHTML = 'Login';
    } else {
        username.innerHTML = localStorage.getItem('username');
        button.innerHTML = 'Logout';
    }
}