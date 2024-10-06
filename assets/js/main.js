// Show hidden password functionality
const showHiddenPass = (loginPass, loginEye) => {
   const input = document.getElementById(loginPass),
         iconEye = document.getElementById(loginEye);

   iconEye.addEventListener('click', () => {
      // Toggle between password and text input types
      if (input.type === 'password') {
         input.type = 'text';
         iconEye.classList.add('ri-eye-line');
         iconEye.classList.remove('ri-eye-off-line');
      } else {
         input.type = 'password';
         iconEye.classList.remove('ri-eye-line');
         iconEye.classList.add('ri-eye-off-line');
      }
   });
};

showHiddenPass('login-pass', 'login-eye');

// Toggle between Login and Register forms
const showRegisterLink = document.getElementById('show-register');
const showLoginLink = document.getElementById('show-login');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

showRegisterLink.addEventListener('click', (e) => {
   e.preventDefault();
   loginForm.style.display = 'none';
   registerForm.style.display = 'block';
});

showLoginLink.addEventListener('click', (e) => {
   e.preventDefault();
   registerForm.style.display = 'none';
   loginForm.style.display = 'block';
});

// Clear functionality for Register form
const clearButton = document.getElementById('clear-register');
clearButton.addEventListener('click', () => {
   document.getElementById('first-name').value = '';
   document.getElementById('last-name').value = '';
   document.getElementById('register-email').value = '';
   document.getElementById('create-pass').value = '';
   document.getElementById('confirm-pass').value = '';
});

// Submit functionality for Register form with validation
const submitButton = document.getElementById('submit-register');
submitButton.addEventListener('click', (e) => {
   e.preventDefault();

   // Retrieve input values and trim whitespace
   const firstName = document.getElementById('first-name').value.trim();
   const lastName = document.getElementById('last-name').value.trim();
   const email = document.getElementById('register-email').value.trim();
   const password = document.getElementById('create-pass').value.trim();
   const confirmPassword = document.getElementById('confirm-pass').value.trim();

   // Validate that all fields are filled
   if (!firstName && !lastName && !email && !password && !confirmPassword) {
      alert('Please fill in all the fields.');
      return;
   }

   // Validate email format (basic validation)
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
   }

   // Validate password match
   if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
   }

   // If all validations pass, proceed with form submission
   alert('Registration form submitted successfully!');
   // Here, you can add code to submit the form data to the server
});
