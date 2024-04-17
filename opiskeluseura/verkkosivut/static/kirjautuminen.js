// Kun kirjautumisnappia painetaan
loginButton.addEventListener('click', function(event) {
    event.preventDefault();

    // Tallennetaan käyttäjän syöttämä käyttäjätunnus ja salasana muuttujiin
    const käyttäjätunnus = document.getElementById('käyttäjätunnus').value;
    const salasana = document.getElementById('salasana').value;

    // Tyhjennetään aiemmat virheviestit
    errorMessages.innerHTML = '';

    // Luodaan pyyntö, joka palauttaa vastauksen JSON-muodossa
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        // Kun pyyntö on valmis
        if (xhr.readyState === 4) {
            // Jos pyyntö onnistui
            if (xhr.status === 200) {
                // Saadaan vastaus JSON-muodossa
                const response = JSON.parse(xhr.responseText);
                // Jos kirjautuminen onnistui, ohjataan uudelle sivulle
                if (response.success) {
                    // Tallennetaan käyttäjätunnus local storageen
                    localStorage.setItem('käyttäjätunnus', käyttäjätunnus);
                    window.location.href = response.redirect_url;
                // Jos kirjautuminen ei onnistunut, näytetään virheviesti
                } else {
                    handleLoginError(response.message);
                }
            // Jos pyyntö epäonnistui, tulostetaan virheviesti
            } else {
                console.error('Error:', xhr.statusText);
            }
        }
    };

    // Alustetaan ja lähetetään pyyntö
    xhr.open('POST', etusivuUrl, true); 
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    
    // Haetaan CSRF-token, jonka tarkoitus on varmistaa, 
    // että pyynnöt ovat aitoja ja tulevat oikealta
    // käyttäjältä
    const csrftoken = getCookie('csrftoken');
    xhr.setRequestHeader('X-CSRFToken', csrftoken);

    // Lähetetään käyttäjätunnus ja salasana POST-pyynnön mukana sovellukselle
    xhr.send('käyttäjätunnus=' + encodeURIComponent(käyttäjätunnus) + '&salasana=' + encodeURIComponent(salasana));
});

// Funktio virheviestin käsittelyä varten
function handleLoginError(message) {
    errorMessages.innerHTML = '<p class="error-message">' + message + '</p>';
}

// Etsii ja palauttaa csrf-tokenin arvon käyttäjän evästeistä.
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}