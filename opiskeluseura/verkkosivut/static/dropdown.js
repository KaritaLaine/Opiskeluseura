// JavaScript code to toggle the "active" class on the dropdown when the button is clicked
document.querySelectorAll('.dropbtn').forEach(item => {
    item.addEventListener('click', event => {
        const dropdownContent = item.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function() {
            dropdown.classList.toggle('active');
        });
    });
});

function selectSubject(subject) {
    var chatMessages = document.getElementById('chat-messages');
    var chatForm = document.getElementById('chat-form');
    var chatTitle = document.getElementById('aihealue-otsikko');

    chatTitle.textContent = subject.charAt(0).toUpperCase() + subject.slice(1);

    // Poista kaikki aktiiviset alaotsikot
    var activeLinks = document.querySelectorAll('.dropdown-content a.active');
    activeLinks.forEach(function(link) {
        link.classList.remove('active');
    });

    // Aktivoi valittu alaotsikko
    var dropdownLinks = document.querySelectorAll('.dropdown-content a');
    dropdownLinks.forEach(function(link) {
        if (link.textContent === subject) {
            link.classList.add('active');
        }
    });

    // Hae tallennettu käyttäjänimi local storagesta
    function getUsername() {
        return localStorage.getItem('käyttäjätunnus') || 'Anonyymi'; // Jos käyttäjänimeä ei ole, palauta 'Anonyymi'
    }

    // Haetaan tallennetut viestit
    var storedMessages = JSON.parse(localStorage.getItem('chatMessages_' + subject)) || [];
    chatMessages.innerHTML = ''; // Tyhjennetään ensin nykyiset viestit

    // Näytetään tallennetut viestit
    storedMessages.forEach(function (msg) {
        displayMessage(msg.sender, msg.message);
    });

    // Lähetä viesti chatissa
    chatForm.onsubmit = function (e) {
        e.preventDefault(); // Estä lomakkeen oletustoiminta (sivun uudelleenlataus)
        var messageInput = document.getElementById('message');
        var message = messageInput.value.trim(); // Poista ylimääräiset välilyönnit
        var sender = localStorage.getItem('käyttäjätunnus'); // Hae tallennettu käyttäjänimi

        if (message !== '' && sender !== '') {
            // Luo uusi viesti-elementti ja lisää se chat-viesteihin
            var newMessage = {
                sender: sender, // Lisää lähettäjän nimi viestiin
                message: message
            };

            // Varmista, että newMessage on määritelty oikein
            console.log('Uusi viesti:', newMessage);

            displayMessage(newMessage.sender, newMessage.message); // Näytetään viesti chatissa

            // Tallenna viesti local storageen
            var storedMessages = JSON.parse(localStorage.getItem('chatMessages_' + subject)) || [];
            storedMessages.push(newMessage);
            localStorage.setItem('chatMessages_' + subject, JSON.stringify(storedMessages));

            // Tyhjennä viestikentät
            messageInput.value = '';
        }
    };


    // Näytä viesti chatissa
    function displayMessage(sender, msg) {
        var messageElement = document.createElement('div');
        messageElement.textContent = msg;

        // Tarkista onko viesti sinun lähettämäsi vai ei
        if (sender === getUsername()) {
            messageElement.classList.add('message', 'sent', 'own-message'); // Lisää luokat omille viesteille
        } else {
            messageElement.classList.add('message', 'received'); // Lisää luokat muiden viesteille
        }

        var senderElement = document.createElement('div');
        senderElement.textContent = sender; // Käytä lähettäjän nimeä
        senderElement.classList.add('sender');

        if (sender === getUsername()) {
            senderElement.classList.add('lahettaja');
        }

        chatMessages.appendChild(senderElement);
        chatMessages.appendChild(messageElement);
    }

    // Vieritään chatti-ikkuna alaspäin automaattisesti
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Nappien toiminta
document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function() {
            dropdown.classList.toggle('active');
        });
    });

    var dropdownButtons = document.querySelectorAll('.dropbtn');

    dropdownButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Poista kaikki aktiiviset pääotsikot
            var activeButtons = document.querySelectorAll('.dropbtn.active');
            activeButtons.forEach(function(activeButton) {
                if (activeButton !== button) {
                    activeButton.classList.remove('active');
                }
            });

            button.classList.toggle('active');
        });
    });
});