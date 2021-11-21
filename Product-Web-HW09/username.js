let username = document.getElementById('username');
let button = document.getElementById('change');
let color = document.getElementById('color');
currentUser();

function setName() {
    let name = prompt('Enter your name');
    if (name == null) {
        localStorage.setItem('username', 'Guest');
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
        localStorage.setItem('username', 'Guest');
        username.innerHTML = 'Guest'
    } else {
        button.innerHTML == 'Logout';
        setName();
    }
})

function currentUser() {
    if (localStorage.getItem('username') == null || localStorage.getItem('username') == 'null') {
        username.innerHTML = 'Guest'
    } else {
        username.innerHTML = localStorage.getItem('username');
    }
    if (username.innerHTML == 'Guest') {
        button.innerHTML = 'Login';
    } else
        button.innerHTML = 'Logout';
}