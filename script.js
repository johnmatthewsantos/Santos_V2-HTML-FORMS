document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  dropdownToggle.addEventListener('click', function() {
      const menu = document.querySelector('.menu');
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });

  const submenuToggles = document.querySelectorAll('.submenu-toggle');
  submenuToggles.forEach(function(toggle) {
      toggle.addEventListener('click', function(event) {
          event.preventDefault(); 
          const submenu = this.nextElementSibling;
          submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      });
  });
});
