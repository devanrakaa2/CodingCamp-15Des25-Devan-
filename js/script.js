/// Call the welcomeMessage function to prompt user and display welcome message
welcomeMessage();

function welcomeMessage() {
    /// Prompt user for their name
    const userInput = prompt('Enter your name:');

    /// Get the welcome message DOM element
    const welcomDOM = document.getElementById('welcome-speech');

    /// Check if user input is null or empty
    if (userInput === null || userInput.trim() === '') {
        /// Render default welcome message
        welcomDOM.innerHTML = 'Welcome, Guest!';
    } else 
       /// Render personalized welcome message
        welcomDOM.innerHTML = `Welcome, ${userInput.trim()}!`;
}

/// Placeholder for form validation function
function validateForm() {}