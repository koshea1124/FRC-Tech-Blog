const frcLoginFormHandler = async (event) => {
    event.preventDefault();
    //Values of username and password
    const username = document.querySelector('#username-frc-login').value.trim();
    const password = document.querySelector('#password-frc-login').value.trim();
    
    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
    //Successful attempt redirects to homepage
    if (response.ok) {
        document.location.replace('/');
    }  else {
        //Alert if unsuccessful attempt
        alert('Attempt to login was unsuccessful');
        }
    }
};

//Event listener
const frcLoginForm = document.querySelector('.frc-login-form');
if (frcLoginForm) {
    frcLoginForm.addEventListener('submit', frcLoginFormHandler);
}