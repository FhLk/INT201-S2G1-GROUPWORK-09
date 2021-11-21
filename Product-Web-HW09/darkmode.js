const switchToggle = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById("toggle-icon");

switchToggle.addEventListener("change", (e) => {
    toggleDarkMode();
});

function toggleDarkMode() {
    if (isDarkModeOn()) {
        localStorage.setItem("darkmode", false);
    } else {
        localStorage.setItem("darkmode", true);
    }
    updatePage();
}

function isDarkModeOn() {
    return localStorage.getItem("darkmode") == "true";
}

function updatePage() {
    // theme
    let body = document.getElementsByTagName("body")[0];
    console.log("render");
    if (isDarkModeOn()) {
        body.classList.add("bg-dark");
        switchToggle.checked = true;
        toggleIcon.children[0].textContent = "DarkMode";
        toggleIcon.children[1].classList.replace("bxs-sun", "bxs-moon");
    } else {
        body.classList.remove("bg-dark");
        switchToggle.checked = false;
        toggleIcon.children[0].textContent = "LightMode";
        toggleIcon.children[1].classList.replace("bxs-moon", "bxs-sun");
        // buttonColor.replace("btn-dark", "btn-light")
    }

}

window.addEventListener("DOMContentLoaded", (event) => {
    updatePage();
});