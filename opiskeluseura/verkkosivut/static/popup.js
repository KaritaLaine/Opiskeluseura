function openForm() {
    // Kun kirjautumisnappia painetaan, kirjautumis-form tulee esille
    document.getElementById('myForm').style.display = 'block';
    // Lisätään backdrop-elementti sivulle
    var backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    document.body.appendChild(backdrop);
}

function closeForm() {
    // Kun sulkunappia painetaan, kirjautumis-form poistuu näkyvistä
    document.getElementById("myForm").style.display = "none";
    // Kun kirjautumis-form suljetaan, poistetaan backdrop-elementti
    var backdrop = document.querySelector('.backdrop');
    if (backdrop) {
        backdrop.parentNode.removeChild(backdrop);
    }
}
