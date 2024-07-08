function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
document.getElementById('login-form').addEventListener('submit', function(event) 
{
    event.preventDefault(); // Stops the default action associated with the event
    
    // Clear previous error messages
    document.getElementById('username-error').style.display = 'none';
    document.getElementById('password-error').style.display = 'none';
  
    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Validate form fields
    let valid = true;
    
    if (!username || !validateEmail(username))  // Validating the  username || Email
    {
      document.getElementById('username-error').textContent = 'Please enter a valid email.';
      document.getElementById('username-error').style.display = 'block';
      valid = false;
    }

    if (!password || password.length < 6)// here Checking the if the password is empty or its length is less than 6 characters
    {
      document.getElementById('password-error').textContent = 'Password must be at least 6 characters long.';
      document.getElementById('password-error').style.display = 'block';
      valid = false;
    }
  
    if (valid) {
      // By using fetch to call the API
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
        console.log(data) // console log shows the data in console box 
        alert('Login successful!');
      })
      .catch(error => {
        alert('Login failed. Please try again.'); // here alert message shows the login failed
      });
    }
  });
  