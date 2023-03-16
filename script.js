const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity();
    // Style the main message for an error
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
}

// Process Form
function processFormData(event) {
    event.preventDefault();
    // Validate Form
    validateForm();
}


// Event Listeners
form.addEventListener('submit', processFormData);