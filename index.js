// Select the hamburger and menu elements
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Add click event listener to the hamburger icon
hamburger.addEventListener('click', () => {
    // Toggle the 'hidden' class to show or hide the menu
    menu.classList.toggle('hidden');
});
