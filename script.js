// ==UserScript==
// @name         button enabler for a certain driving website
// @version      1.0
// @description  Bypass disable button timer logic
// @match        *://*/*
// ==/UserScript==
(function() {
    'use strict';

    const codeToInject = `
let button = document.querySelector('ion-button[disabled]'); // Selects the button that is disabled

// Check if the button is found
if (button) {
  // Remove the 'disabled' attribute to enable the button
  button.removeAttribute('disabled');
  button.setAttribute('aria-disabled', 'false'); // Update the aria-disabled attribute
  button.classList.remove('button-disabled'); // Remove the 'button-disabled' class
  button.classList.add('button-enabled'); // Optionally, add a class to indicate it's enabled
  console.log('Button enabled successfully!');
} else {
  console.log('Button not found.');
}
    `;

    document.addEventListener('click', function() {
        eval(codeToInject); 
    });
})();
