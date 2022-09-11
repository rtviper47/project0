// Set strict mode to get more useful errors when mistakes
// are made.
'use strict';

// Get button reference
// Uses CSS selectors, just like ones used in CSS file.
// switcher is referring to the button on the page
const switcher = document.querySelector('.btn');

// Add the event handler for the click event.
// Add a listener for the click event and define an event 
// handler function to be executed by the browser when the click occurs.
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});