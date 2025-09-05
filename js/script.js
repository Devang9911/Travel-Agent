import { fetchPackageCards, postContactQuery } from "../api/handle_api.js";

// hamburger menu toggle
let hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
    document.querySelector('.navigation nav ul').classList.toggle('open');
});

let navMenu = document.querySelector('.navigation nav ul');
let navLinks = navMenu.querySelectorAll('li a');
// function to close menu when a nav link is clicked
function closeMenu() {
    for(let i=0; i<navLinks.length; i++) {
        navLinks[i].addEventListener('click', () => {
            navMenu.classList.remove('open');
        });
    }
}
closeMenu();

let packageContainer = document.getElementById('packageContainer');
async function displayPackageCards() {
    let packageCards = await fetchPackageCards();
    // console.log(packageCards);

    for (let i=0; i<packageCards.length; i++) {
        packageContainer.innerHTML += `                <article class="package-card">
                    <img src="${packageCards[i].image}" alt="Scenic view of ${packageCards[i].title}">
                    <div class="content">
                        <h3>${packageCards[i].title}</h3>
                        <p>${packageCards[i].description}</p>
                        <button>Visit</button>
                    </div>
                </article>`
    }
}
displayPackageCards();

// contact form submission
let contactForm = document.getElementById('contactForm');
contactForm.addEventListener("submit", async (e)=>{
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    let response = await postContactQuery(name, email, subject, message);
    console.log(response);
})