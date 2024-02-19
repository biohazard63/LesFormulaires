document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let age = document.getElementById('age').value;
    let sexe = document.getElementById('sexe').value;
    let email = document.getElementById('email').value;
    let postalCode = document.getElementById('postalCode').value;


    if (!nom || !prenom) {
        alert('Le nom et le prénom ne doivent pas être vides.');
        return;
    }

    if (isNaN(age)) {
        alert('L\'âge doit être un nombre.');
        return;
    }

    if (sexe !== 'male' && sexe !== 'female' && sexe !== 'other') {
        alert('Le sexe doit être soit "male", "female" ou "other".');
        return;
    }

    if (!/^\d+$/.test(postalCode)) {
        alert('Le code postal ne doit contenir que des chiffres.');
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Veuillez entrer une adresse email valide.');
        return;
    }




    event.target.submit();
});