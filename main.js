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