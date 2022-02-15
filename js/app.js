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
const sections = main.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function populateNavBar() {
    const fragment = document.createDocumentFragment(); 
    for (let section of sections){
        const newElement = document.createElement('li');
        const sectionTextContent = section.firstElementChild.children[0].textContent;
        const sectionID = section.id;
        newElement.innerHTML = `<a href="#${sectionID}" class="menu__link">${sectionTextContent}</a>`
        fragment.appendChild(newElement);
    }
    navbar.appendChild(fragment);
} // End function populateNavBar


// Add class 'active' to section when near top of viewport
function makeActive(){
    const lis = navbar.querySelectorAll('li');
    let lastActiveSection = 0;
    for (li of lis) {
        if (li.classList.contains('active')){
            li.classList.remove('active')
        }
    }
    // remove activeSection from all sections, so that only one section is active at a time
    for (const section of sections) {
        section.classList.remove('your-active-class')
    }
    // set active classes for li and section
    for (const section of sections) {
        const position = section.getBoundingClientRect();
        if(position.top < 200 && position.bottom > 100 ) {
            if (section != lastActiveSection) {
                // remove activeSection from all sections
                for (const l2section of sections){
                    l2section.classList.remove('your-active-class')
                }
                // Apply active state on the current section and the corresponding Nav link.
                for (const li of lis) {
                    let idtag = li.textContent.split(" ").join("").toLowerCase();
                    if (idtag == section.id) {
                        li.classList.add('active')
                    } else {
                        li.classList.remove('active')
                    }
                }
                section.classList.add('your-active-class')
            }
        }
    }
}


// Scroll to anchor ID using scrollTO event
function scrollToElement(evt) {
    if (evt.target.nodeName.toLowerCase() === 'a') {
        const idtag = "#" + evt.target.textContent.split(" ").join("").toLowerCase(); // get Test without Spaces, all Lowercase
        const currentSelection = document.querySelector(idtag)
        evt.preventDefault();
        window.scrollTo({ // scroll to section
            top: currentSelection.offsetTop,
            left: currentSelection.offsetLeft,
            behavior: 'smooth'
        });
    } else { // scroll to top
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', populateNavBar);

// Scroll to section on link click
navbar.addEventListener('click', scrollToElement)

// Set sections as active
document.addEventListener('scroll', makeActive)


