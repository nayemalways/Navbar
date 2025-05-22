const navbar = document.getElementById('navbar');
const openButton = document.getElementById('open-sidebar-button')
const navLink = document.querySelectorAll('nav a');


function openSidebar() {
    navbar.classList.add('show');
    openButton.setAttribute('aria-expanded', 'true')
}

function closeSidebar() {
 navbar.classList.remove('show');
 openButton.setAttribute('aria-expanded', 'false')
}

navLink.forEach(Link => {
    Link.addEventListener('click', () => {
        closeSidebar();
    })
})
