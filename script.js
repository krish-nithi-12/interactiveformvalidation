document.getElementById('validationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let formIsValid = true;
    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('emailError');
    let phoneError = document.getElementById('phoneError');
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    if (name === '') {
        formIsValid = false;
        document.getElementById('name').classList.add('error');
        nameError.style.display = 'inline';
    } else {
        document.getElementById('name').classList.remove('error');
        nameError.style.display = 'none';
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        formIsValid = false;
        document.getElementById('email').classList.add('error');
        emailError.style.display = 'inline';
    } else {
        document.getElementById('email').classList.remove('error');
        emailError.style.display = 'none';
    }

    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phone.match(phonePattern)) {
        formIsValid = false;
        document.getElementById('phone').classList.add('error');
        phoneError.style.display = 'inline';
    } else {
        document.getElementById('phone').classList.remove('error');
        phoneError.style.display = 'none';
    }

    if (formIsValid) {
        alert('Form submitted successfully!');
    }
});
