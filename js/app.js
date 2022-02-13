/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const main = document.querySelector('main');
const navbar = document.querySelector('#navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// function template
// function template(inputs) {
//     console.log('a key was pressed');
// }
function styleNavBar(){

}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function populateNavBar() {
    const sections = main.querySelectorAll('section');
    // const fragment = navbar.createDocumentFragment(); 
    for (let section of sections){
        const newElement = document.createElement('li');
        const sectionTextContent = section.firstElementChild.children[0].textContent;
        const sectionID = section.id;
        newElement.innerHTML = `<a href="#${sectionID}" class="menu__link">${sectionTextContent}</a>`
        // fragment.appendChild(newElement);
        navbar.appendChild(newElement)
    }
    // navbar.appendChild(fragment);
} // End function populateNavBar


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', populateNavBar());

// Scroll to section on link click

// Set sections as active


