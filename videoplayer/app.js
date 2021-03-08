const button = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')
const preLoader = document.querySelector('.preloader')

button.addEventListener('click', () => {
    if(!button.classList.contains('slide')) {
        button.classList.add('slide')
        video.pause()
    } else {
        button.classList.remove('slide')
        video.play()
    } 
})

window.addEventListener('load', () => {
    preLoader.classList.add('hide-preloader')
})

