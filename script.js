const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu')
const links = document.querySelectorAll('.navbar-menu li a');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
})

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));

    link.classList.add('active');

    navbarMenu.classList.remove('active');
    navbarToggle.classList.remove('active');
  })
})