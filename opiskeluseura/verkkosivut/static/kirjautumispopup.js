function openForm() {
    // Tarkistetaan onko lomake jo auki
    if (!document.getElementById('myForm').style.display || document.getElementById('myForm').style.display === 'none') {
        // Lomake ei ole auki, joten avataan se
        document.getElementById('myForm').style.display = 'block';
        // Lisätään sumennus-elementti kirjautumislomakkeen taustalle
        var backdrop = document.createElement('div');
        backdrop.className = 'backdrop';
        document.body.appendChild(backdrop);
        // Kun sulkemisnappia painetaan, siirrytään suljeForm()-funktioon,
            // joka poistaa lomakkeen ja taustan sumennus-elementin
        var closeButton = document.querySelector('.close');
        closeButton.addEventListener('click', function() {
            suljeForm();
        });
    }
}
function suljeForm() {
    // Tallennetaan virheviestit muuttujiin
    var virheviestit = document.getElementById('errorMessages');
    // Tyhjennetään lomakkeeseen syötetyt tiedot
    document.getElementById("käyttäjätunnus").value = "";
    document.getElementById("salasana").value = "";
    // Tyhjennetään myös mahdolliset virheviestit
    if (virheviestit) {
        errorMessages.innerHTML = '';
    }
    // Kun sulkemisnappia painetaan, lomake ja taustan sumennus poistuu näkyvistä
    document.getElementById("myForm").style.display = "none";
    var backdrop = document.querySelector('.backdrop');
    if (backdrop) {
        backdrop.parentNode.removeChild(backdrop);
    }
}

// Näytä rekisteröinti onnistui -popup, kun sivu latautuu
// rekisteröinnin onnistuttua
function closePopup() {
    var popup = document.querySelector('.popup');
    popup.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    var popup = document.querySelector('.popup');
    if (popup) {
        popup.style.display = 'block';
    }
});