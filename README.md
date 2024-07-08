Awak Tech Login Page
This repository contains the HTML, CSS, and JavaScript code for a simple login page for Awak Technologies. The page includes form validation and styling for both web and mobile views.

Table of Contents
1)Introduction
2)Features
3)Usage
4)Code Explanation
5)Contributing

1)Introduction
   This project is a login page designed for Awak Technologies. It includes form validation for the username/email and password fields and uses JavaScript to handle form submission. The page is styled with CSS to be responsive and user-friendly.
   
2)Features
   i)Form validation for username/email and password
   ii)Responsive design for mobile and web
   iii)Error messages for invalid input
   iv)Fetch API to simulate form submission
   v)Modern and clean UI
   
3)Usage
   step-1 : Open index.html in a web browser.
   step-2 : Enter a username or email and a password.
   step-3 : Click the "Login" button.
   step-4 : If the input is invalid, error messages will be displayed.
   step-5 : If the input is valid, a simulated login request will be made, and an alert will show the result.
4)Code Explanation
HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Page</title> <!-- This is the title of the web page that appears on the browser tab -->
  <link rel="stylesheet" href="Styles1.css"> <!-- This link tag connects the HTML to an external CSS file for styling -->
</head>
<body>
  <div class="login-container"> <!-- This is the container for the entire login section -->
    <form id="login-form">   <!-- This is the form where users will input their login information -->
      <h2>Awak Technologies Login</h2> <!-- This is the heading of the login form -->

      <div class="form-group">  <!-- This is a container for the username/email input field and its label -->
        <label for="username">Username/Email</label>  <!-- This label tells the user to input their username or email -->
        <input type="text" id="username" name="username" required><!-- This is the input field where users will type their username or email -->
        <span class="error-message" id="username-error"></span>  <!-- This span will display an error message if the username/email is invalid -->
      </div>
      <div class="form-group"> <!-- This is a container for the password input field and its label -->
        <label for="password">Password</label>   <!-- This label tells the user to input their password -->
        <input type="password" id="password" name="password" required>  <!-- This is the input field where users will type their password -->
        <span class="error-message" id="password-error"></span> <!-- This span will display an error message if the password is invalid -->
      </div>
      <button type="submit">Login</button> <!-- This is the button that users will click to submit the form and log in -->
    </form>
  </div>

  <script src="login1.js"></script> <!-- This script tag includes the JavaScript file that contains the login functionality -->
</body>
</html>

JavaScript (login1.js)

// Function to validate email using a regular expression
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Define a regular expression for validating email
  return re.test(email); // Returns true if the email matches the pattern, false otherwise
}

// Event listener for form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Stops the default action associated with the event
  
  // Clear previous error messages
  document.getElementById('username-error').style.display = 'none';
  document.getElementById('password-error').style.display = 'none';

  // Get form values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validate form fields
  let valid = true;

  if (!username || !validateEmail(username)) { // Validate username/email
    document.getElementById('username-error').textContent = 'Please enter a valid email.';
    document.getElementById('username-error').style.display = 'block';
    valid = false;
  }

  if (!password || password.length < 6) { // Check if the password is empty or its length is less than 6 characters
    document.getElementById('password-error').textContent = 'Password must be at least 6 characters long.';
    document.getElementById('password-error').style.display = 'block';
    valid = false;
  }

  if (valid) {
    // Use fetch to call the API
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); // Log data to console
      alert('Login successful!'); // Show login successful message
    })
    .catch(error => {
      alert('Login failed. Please try again.'); // Show login failed message
    });
  }
});

CSS (Styles1.css)
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #e4c5c585;
}

.login-container {
  background-color: whitesmoke;
  padding: 20px;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.form h2 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 12px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 90%;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 2px;
}

.error-message {
  color: red;
  font-size: 0.875em;
  display: none;
}

button {
  width: 30%;
  padding: 10px;
  background-color: #876dcd;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: rgb(98, 185, 98);
}

@media (max-width: 600px) {
  .login-container {
    padding: 12px;
    font-size: 12px;
  }
}
  
