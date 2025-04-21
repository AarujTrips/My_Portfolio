const menuToggle = document.querySelector('.mobile-menu-toggle');
const menuClose = document.querySelector('.mobile-menu-close');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');
const menuLinks = document.querySelectorAll('.mobile-menu a');

menuToggle.addEventListener('click', () => {
mobileMenu.classList.add('active');
overlay.classList.add('active');
document.body.style.overflow = 'hidden';
});

function closeMenu() {
mobileMenu.classList.remove('active');
overlay.classList.remove('active');
document.body.style.overflow = 'auto';
}

menuClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

menuLinks.forEach(link => {
link.addEventListener('click', closeMenu);
});

// Sticky Header
const header = document.querySelector('header');
let scrolled = false;

window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
if (!scrolled) {
header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
scrolled = true;
}
} else {
header.style.boxShadow = 'none';
scrolled = false;
}
});

// Back To Top Button
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
if (window.scrollY > 500) {
backToTop.classList.add('visible');
} else {
backToTop.classList.remove('visible');
}
});

backToTop.addEventListener('click', () => {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});

// Certificate Carousel
const certList = document.querySelector('.cert-list');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const certCards = document.querySelectorAll('.cert-card');

let scrollAmount = 0;
const cardWidth = certCards[0].offsetWidth + 30; // card width + gap

nextBtn.addEventListener('click', () => {
scrollAmount += cardWidth;
if (scrollAmount > (certCards.length - 3) * cardWidth) {
scrollAmount = (certCards.length - 3) * cardWidth;
}
certList.scrollTo({
left: scrollAmount,
behavior: 'smooth'
});
});

prevBtn.addEventListener('click', () => {
scrollAmount -= cardWidth;
if (scrollAmount < 0) {
scrollAmount = 0;
}
certList.scrollTo({
left: scrollAmount,
behavior: 'smooth'
});
});

// Function to open the modal and display the clicked image
function openModal(imageSrc) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = imageSrc;
}

// Function to close the modal when clicking outside of the image or on the close button
function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();

const targetId = this.getAttribute('href');
const targetElement = document.querySelector(targetId);

if (targetElement) {
const headerHeight = document.querySelector('header').offsetHeight;
const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

window.scrollTo({
top: targetPosition,
behavior: 'smooth'
});
}
});
});

// Animations on scroll
const animateOnScroll = () => {
const sections = document.querySelectorAll('.section');

sections.forEach(section => {
const sectionTop = section.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

if (sectionTop < windowHeight * 0.75) {
section.style.opacity = '1';
section.style.transform = 'translateY(0)';
}
});
};

// Set initial state for animations
document.querySelectorAll('.section').forEach(section => {
section.style.opacity = '0';
section.style.transform = 'translateY(30px)';
section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Run animation on page load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);