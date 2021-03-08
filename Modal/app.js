const openModal = document.querySelector('.modal-btn')
const closeModal = document.querySelector('.close-btn')
const modalOverlay = document.querySelector('.modal-overlay')

openModal.addEventListener('click', () => {
    modalOverlay.classList.add('open-modal')
})

closeModal.addEventListener('click', () => {
    modalOverlay.classList.remove('open-modal')
})