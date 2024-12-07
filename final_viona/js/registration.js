function validateForm() {
    let valid = true;
  
    // Clear previous warnings
    clearWarnings();
  
    // Name validation
    const name = document.getElementById('name').value;
    if (name.trim() === '' || name.length > 40) {
      document.getElementById('name-warning').classList.remove('hidden');
      valid = false;
    }
  
    // Phone number validation
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^[0-9]{1,15}$/;
    if (!phoneRegex.test(phone)) {
      document.getElementById('phone-warning').classList.remove('hidden');
      valid = false;
    }
  
    // Email validation
    const email = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      document.getElementById('email-warning').classList.remove('hidden');
      valid = false;
    }
  
    // Password validation
    const password = document.getElementById('password').value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/;
    if (!passwordRegex.test(password)) {
      document.getElementById('password-warning').classList.remove('hidden');
      valid = false;
    }
  
    // Confirm password validation
    const confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
      document.getElementById('confirm-password-warning').classList.remove('hidden');
      valid = false;
    }
  
    // If all fields are valid, show success alert
    if (valid) {
      alert('Registration Successful');
    }
  
    return valid;
  }
  
  function clearWarnings() {
    document.getElementById('name-warning').classList.add('hidden');
    document.getElementById('phone-warning').classList.add('hidden');
    document.getElementById('email-warning').classList.add('hidden');
    document.getElementById('password-warning').classList.add('hidden');
    document.getElementById('confirm-password-warning').classList.add('hidden');
  }
  