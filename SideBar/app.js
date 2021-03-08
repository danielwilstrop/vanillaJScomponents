const button = document.querySelector('.sidebar-toggle')
const sideBar = document.querySelector('.sidebar')
const closeButton = document.querySelector('.close-btn')

    button.addEventListener('click', () => {
        sideBar.classList.toggle('show-sidebar')
    })

    closeButton.addEventListener('click', () => {
        sideBar.classList.remove('show-sidebar')
    })