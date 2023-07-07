const CATEGORIES = 'https://al-hajjar.github.io/phase1project/db.json'
document.addEventListener('DOMContentLoaded', () => {

    // ROWS DATA
    const catCategoryRow = document.getElementById('cat-categories')
    const hide = document.querySelector(".Home-Page")
    const contact = document.querySelector(".contact-page")

    // LINKS DATA
    const categoriesLink = document.getElementById('category-link')
    const homeLink = document.getElementById('home-link')
    const contactSection = document.getElementById('contact')

    // CLICK EVENTS FOR LINKS
    categoriesLink.addEventListener('click', () => {
        hide.style.display = "none"

        contact.style.display = "none"
        // show categories
        catCategoryRow.removeAttribute('hidden')
        catCategoryRow.style.display = "flex"
    })


      // create category element
      const createCategory = (image, breed, habitat, lifespan) => {
        const rootDiv = document.createElement('div')
        rootDiv.classList.add('col-4', 'p-1')

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12', 'p-2')

        const categoryImg = document.createElement('img')
        categoryImg.classList.add('card-img-top')
        categoryImg.src = image

        const categoryTitle = document.createElement('h4')
        categoryTitle.classList.add('card-title')
        categoryTitle.innerText = breed

        const categoryHabitat = document.createElement('p')
        categoryHabitat.classList.add('card-text')
        categoryHabitat.innerText = "Habitat: " + habitat

        const categoryLifeSpan = document.createElement('p')
        categoryLifeSpan.classList.add('card-text')
        categoryLifeSpan.innerText = "Life Span: " + lifespan