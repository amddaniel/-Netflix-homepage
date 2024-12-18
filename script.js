// Get modal and elements
const modal = document.getElementById('login-modal');
const signInButton = document.querySelector('.sign-in');
const closeButton = document.querySelector('.close-btn');
const loginForm = document.getElementById('login-form');

// Show the login modal when "Sign In" is clicked
signInButton.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Close the modal when the "X" button is clicked
closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close the modal if the user clicks outside the modal
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle the login form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // For demonstration, just logging the email and password to the console
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log(`Email: ${email}, Password: ${password}`);
    
    // Close the modal after submission
    modal.style.display = 'none';
});
