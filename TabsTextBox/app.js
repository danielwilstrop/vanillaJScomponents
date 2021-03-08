const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')

about.addEventListener('click', (e) => {
    const id = e.target.dataset.id
    // change active button classes
    if (id) {
        btns.forEach((btn) => {
            btn.classList.remove('active')
            e.target.classList.add('active')
        })
        // Hide other articles
        articles.forEach((article) => {
            article.classList.remove('active')
        })
        // make active aritcle visible
        const element = document.getElementById(id)
        element.classList.add('active')
    }
})