// Step 1: Add click event handler with the submit button.
document.getElementById('btn-submit').addEventListener('click', function(){
    // Step 2: Get the email address from the email input field.
    // Always remember to use .value to get the text from the input field.
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // Step 3: Get the password from the password input field.
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // DANGER : DO NOT VERIFY EMAIL AND PASSWORD on the client side.
    // Step 4: Verify Email and Password
    if(email === 'apurba1903@gmail.com' && password === '123456789'){
        console.log('Valid User');
    }
    else{
        console.log('Invalid User');
    }




});