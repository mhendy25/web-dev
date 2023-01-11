navBar = document.querySelector('.navbar')
bottomContainer = document.querySelector('.bottom-container')
console.log(navBar)
console.log(bottomContainer)

window.addEventListener('scroll', () => {
    if (window.scrollY > bottomContainer.offsetTop - navBar.offsetHeight - 50) {
        navBar.classList.add('active')
    }
    else {
        navBar.classList.remove('active')
    }
})