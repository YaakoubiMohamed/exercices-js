function validateForm(event) {
    event.preventDefault();

    // Récupérer les valeurs des champs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation des champs
    if (name === '') {
        displayError('nameError', 'Veuillez entrer votre nom.');
        return;
    } else {
        hideError('nameError');
    }

    if (email === '') {
        displayError('emailError', 'Veuillez entrer votre email.');
        return;
    } else {
        hideError('emailError');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayError('emailError', 'Veuillez fournir une adresse email valide.');
        return;
    } else {
        hideError('emailError');
    }

    if (subject === '') {
        displayError('subjectError', 'Veuillez entrer le sujet.');
        return;
    } else {
        hideError('subjectError');
    }

    if (message === '') {
        displayError('messageError', 'Veuillez entrer votre message.');
        return;
    } 
    else if (message.length < 50) {
        displayError('messageError', 'Le message doit contenir au moins 50 caractères.');
        return;
    }
    else {
        hideError('messageError');
    }

    // Validation de l'email


    // Affichage du message de confirmation
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.innerText = 'Formulaire soumis avec succès! Merci de nous contacter.';
    confirmationMessage.style.color = '#4caf50';

    // Réinitialiser le formulaire
    document.getElementById('contactForm').reset();
}

function displayError(elementId, errorMessage) {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = errorMessage;
    errorElement.style.color = 'red';
}

function hideError(elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = '';
}
