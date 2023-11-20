document.addEventListener('DOMContentLoaded', function() {
    VANTA.GLOBE({
        el: "#globe-container",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xc1b8
    });
    
});
    
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













    // Typing animation for the greeting message
    //const greetingMessage1 = "Hello, there! 😊";
    //const greetingMessage2 = "Welcome to my Portfolio.";
    //const greetingLine1 = document.getElementById("greeting-message-line1");
    //const greetingLine2 = document.getElementById("greeting-message-line2");
    //let letterIndex1 = 0;
    //let letterIndex2 = 0;

    //function typeLetter1() {
    //    greetingLine1.textContent += greetingMessage1[letterIndex1];
    //    letterIndex1++;
    //    if (letterIndex1 < greetingMessage1.length) {
    //        setTimeout(typeLetter1, 100); // Adjust the typing speed here (milliseconds)
    //    } else {
    //        setTimeout(typeLetter2, 1000); // Start typing the second line after 1 second
    //    }
    //}

    //function typeLetter2() {
    //    greetingLine2.textContent += greetingMessage2[letterIndex2];
    //    letterIndex2++;
    //    if (letterIndex2 < greetingMessage2.length) {
    //        setTimeout(typeLetter2, 100); // Adjust the typing speed here (milliseconds)
    //    }
    //}

    //typeLetter1(); // Start typing the first line

