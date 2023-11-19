document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Function to check if the menu is open
function isMenuOpen() {
    return !document.getElementById('mobile-menu').classList.contains('hidden');
}

// Add a click event listener to the document to close the menu when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('#menu-toggle') && isMenuOpen()) {
        document.getElementById('mobile-menu').classList.add('hidden');
    }
});

// Close the menu when an option is selected
var menuOptions = document.querySelectorAll('#mobile-menu a');
menuOptions.forEach(function(menuOption) {
    menuOption.addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// Add an event listener to close the menu on resize (for responsiveness)
window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) { // Adjust the breakpoint as needed
        document.getElementById('mobile-menu').classList.add('hidden');
    }
});