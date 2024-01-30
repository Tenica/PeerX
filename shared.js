const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const backdrop = document.querySelector('.backdrop')


function toggleButtonHandler(params) {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open')
}

function backdropHandler() {
// backdrop.style.display = "none"
// mobileNav.style.display = "none"
backdrop.classList.remove('open');
mobileNav.classList.remove('open');
}

backdrop.addEventListener('click', backdropHandler)
toggleButton.addEventListener('click', toggleButtonHandler)