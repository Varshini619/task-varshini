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



 
