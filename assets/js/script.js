document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    let prenom = document.getElementById('firstName').value;
    let prenomError = document.getElementById('firstName').nextElementSibling;
    if (!prenom) {
        prenomError.textContent = 'Le prénom ne doit pas être vide.';
        prenomError.classList.add('error');
    } else {
        prenomError.textContent = '';
        prenomError.classList.remove('error');
    }
    let nom = document.getElementById('lastName').value;
    let nomError = document.getElementById('lastName').nextElementSibling;
    if (!nom) {
        nomError.textContent = 'Le nom ne doit pas être vide.';
        prenomError.classList.add('error');

    } else {
        nomError.textContent = '';
        prenomError.classList.remove('error');
    }
    let age = document.getElementById('age').value;
    let ageError = document.getElementById('age').nextElementSibling;
    if (!age) {
        ageError.textContent = 'L\'âge doit être un nombre.';
        ageError.classList.add('error');
    } else {
        ageError.textContent = '';
        ageError.classList.remove('error');
    }
    let sex = document.getElementById('sex').value;
    let sexError = document.getElementById('sex').nextElementSibling;
    if (!sex) {
        sexError.textContent = 'Le sexe doit être soit "male", "female" .';
        sexError.classList.add('error');
    } else {
        sexError.textContent = '';
        sexError.classList.remove('error');
    }
    let email = document.getElementById('email').value;
    let emailError = document.getElementById('email').nextElementSibling;
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = 'Veuillez entrer une adresse email valide.';
        emailError.classList.add('error');
    } else {
        emailError.textContent = '';
        emailError.classList.remove('error');
    }
    let postalAddress = document.getElementById('postalAddress').value;
    let postalAddressError = document.getElementById('postalAddress').nextElementSibling;
    if (!postalAddress) {
        postalAddressError.textContent = 'L\'adresse postale ne doit pas être vide.';
        postalAddressError.classList.add('error');
    } else {
        postalAddressError.textContent = '';
        postalAddressError.classList.remove('error');
    }
    let postalCode = document.getElementById('postalCode').value;
    let postalCodeError = document.getElementById('postalCode').nextElementSibling;
    if (!/^\d+$/.test(postalCode)) {
        postalCodeError.textContent = 'Le code postal ne doit contenir que des chiffres.';
        postalCodeError.classList.add('error');
    } else {
        postalCodeError.textContent = '';
        postalCodeError.classList.remove('error');
    }
    let ville = document.getElementById('ville').value;
    let villeError = document.getElementById('ville').nextElementSibling;
    if (!ville) {
        villeError.textContent = 'La ville ne doit pas être vide.';
        villeError.classList.add('error');
    } else {
        villeError.textContent = '';
        villeError.classList.remove('error');
    }
    let job = document.getElementById('job').value;
    let jobError = document.getElementById('job').nextElementSibling;
    if (!job) {
        jobError.textContent = 'Veuillez sélectionner un métier.';
        jobError.classList.add('error');
    } else {
        jobError.textContent = '';
        jobError.classList.remove('error');
    }
    let nationality = document.getElementById('nationality').value;
    let nationalityError = document.getElementById('nationality').nextElementSibling;
    if (!nationality ) {
        nationalityError.textContent = 'La nationalité doit être soit "france", "usa", "uk", "allemand" ou "italien".';
        nationalityError.classList.add('error');
    } else {
        nationalityError.textContent = '';
        nationalityError.classList.remove('error');
    }
    let birthDate = document.getElementById('birthDate').value;
    let birthDateError = document.getElementById('birthDate').nextElementSibling;
    if (!birthDate) {
        birthDateError.textContent = 'La date de naissance ne doit pas être vide.';
        birthDateError.classList.add('error');
    } else {
        birthDateError.textContent = '';
        birthDateError.classList.remove('error');
    }
    let birthCountry = document.getElementById('birthCountry').value;
    let birthCountryError = document.getElementById('birthCountry').nextElementSibling;
    if (!birthCountry) {
        birthCountryError.textContent = 'Le pays de naissance ne doit pas être vide.';
        birthCountryError.classList.add('error');
    } else {
        birthCountryError.textContent = '';
        birthCountryError.classList.remove('error');
    }
    let socialSecurityNumber = document.getElementById('socialSecurityNumber').value;
    let socialSecurityNumberError = document.getElementById('socialSecurityNumber').nextElementSibling;
    if (!/^0[12]\d{13}$/.test(socialSecurityNumber)) {
        socialSecurityNumberError.textContent = 'Le numéro de sécurité sociale doit commencer par 01 ou 02 et contenir 15 chiffres.';
        socialSecurityNumberError.classList.add('error');
    } else {
        socialSecurityNumberError.textContent = '';
        socialSecurityNumberError.classList.remove('error');
    }
    let passportNumber = document.getElementById('passportNumber').value;
    let passportNumberError = document.getElementById('passportNumber').nextElementSibling;
    if (!/^\d{9}$/.test(passportNumber)) {
        passportNumberError.textContent = 'Le numéro de passeport doit contenir 9 chiffres.';
        passportNumberError.classList.add('error');
    } else {
        passportNumberError.textContent = '';
        passportNumberError.classList.remove('error');
    }
    let passportIssueDate = document.getElementById('passportIssueDate').value;
    let passportIssueDateError = document.getElementById('passportIssueDate').nextElementSibling;
    if (!passportIssueDate) {
        passportIssueDateError.textContent = 'La date de délivrance du passeport ne doit pas être vide.';
        passportIssueDateError.classList.add('error');
    } else {
        passportIssueDateError.textContent = '';
        passportIssueDateError.classList.remove('error');
    }
    let passportExpiryDate = document.getElementById('passportExpiryDate').value;
    let passportExpiryDateError = document.getElementById('passportExpiryDate').nextElementSibling;
    if (!passportExpiryDate) {
        passportExpiryDateError.textContent = 'La date d\'expiration du passeport ne doit pas être vide.';
        passportExpiryDateError.classList.add('error');
    } else {
        passportExpiryDateError.textContent = '';
        passportExpiryDateError.classList.remove('error');
    }
    if (!prenomError.textContent && !nomError.textContent && !ageError.textContent && !sexError.textContent && !emailError.textContent && !postalAddressError.textContent && !postalCodeError.textContent && !villeError.textContent && !jobError.textContent && !nationalityError.textContent && !birthDateError.textContent && !birthCountryError.textContent && !socialSecurityNumberError.textContent && !passportNumberError.textContent && !passportIssueDateError.textContent && !passportExpiryDateError.textContent) {
        event.target.submit();
        alert('Formulaire envoyé !')
    }
});
