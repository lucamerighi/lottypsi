"use strict";
// TypeScript for Carlotta Piergiovanni's website
// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const yearElement = document.getElementById('year');
// Set current year in the footer
yearElement.textContent = new Date().getFullYear().toString();
// Mobile menu toggle
function toggleMobileMenu() {
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
}
// Close mobile menu when clicking a link
function closeMobileMenu() {
    mobileMenuBtn.classList.remove('active');
    navMenu.classList.remove('active');
}
// Smooth scrolling for navigation links
function smoothScroll(e) {
    e.preventDefault();
    const target = e.currentTarget;
    const targetId = target.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = 70; // Height of the fixed header
            const targetPosition = targetElement.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            // Close mobile menu after clicking a link
            closeMobileMenu();
        }
    }
}
// Form submission handler
function handleFormSubmit(e) {
    e.preventDefault();
    // Get form data
    const formData = new FormData(contactForm);
    const formValues = Object.fromEntries(formData.entries());
    // Simulate form submission (in a real app, you would send this to a server)
    console.log('Form submitted:', formValues);
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    // Reset form
    contactForm.reset();
}
// Scroll effect for the navigation bar
function handleScroll() {
    const scrollPosition = window.scrollY;
    const header = document.querySelector('.header');
    if (scrollPosition > 50) {
        header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    }
    else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
}
// Highlight active section in navigation
function highlightActiveSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let currentSectionId = '';
    const scrollPosition = window.scrollY;
    // Find the current section based on scroll position
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id') || '';
        }
    });
    // Highlight the corresponding navigation link
    navLinks.forEach((link) => {
        link.classList.remove('active');
        const href = link.getAttribute('href') || '';
        if (href === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
}
// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    mobileMenuBtn === null || mobileMenuBtn === void 0 ? void 0 : mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
    // Form submission
    contactForm === null || contactForm === void 0 ? void 0 : contactForm.addEventListener('submit', handleFormSubmit);
    // Scroll events
    window.addEventListener('scroll', () => {
        handleScroll();
        highlightActiveSection();
    });
    // Set initial active section
    highlightActiveSection();
});
// Add CSS class for active link in navigation
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
// Add animation on scroll (simple implementation)
document.addEventListener('DOMContentLoaded', () => {
    // Elements to animate
    const animateElements = document.querySelectorAll('.service-card, .expect-step');
    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0);
    }
    // Add animation class when element is in viewport
    function checkAnimation() {
        animateElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('animate');
            }
        });
    }
    // Check on scroll
    window.addEventListener('scroll', checkAnimation);
    // Initial check
    checkAnimation();
});
