class DarkMode {
    static isDarkModeOn() {
      return localStorage.getItem('darkmode') == 'true';
    }
    static toggleDarkMode() {
      localStorage.setItem('darkmode', !DarkMode.isDarkModeOn());
      DarkMode.updatePage();
    }
    static updatePage() {
      let body = document.getElementsByTagName('body')[0];
      if (DarkMode.isDarkModeOn()) {
        body.classList.add('bg-dark');
        switchToggle.checked = true;
        toggleIcon.children[0].textContent = 'DarkMode';
        toggleIcon.children[1].classList.replace('bxs-sun', 'bxs-moon');
      } else {
        body.classList.remove('bg-dark');
        switchToggle.checked = false;
        toggleIcon.children[0].textContent = 'LightMode';
        toggleIcon.children[1].classList.replace('bxs-moon', 'bxs-sun');
      }
    }
  }
  
  const switchToggle = document.querySelector('input[type="checkbox"]');
  const toggleIcon = document.getElementById('toggle-icon');
  
  switchToggle.addEventListener('change', (e) => {
    DarkMode.toggleDarkMode();
  });
  
  window.addEventListener('DOMContentLoaded', (e) => {
    DarkMode.updatePage();
  });