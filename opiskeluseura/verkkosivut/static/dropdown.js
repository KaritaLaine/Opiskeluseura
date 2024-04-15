document.querySelectorAll('.dropbtn').forEach(item => {
    item.addEventListener('click', event => {
        const dropdownContent = item.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });
});// JavaScript code to toggle the "active" class on the dropdown when the button is clicked
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

    chatMessages.innerHTML = '';

    // Lähetä viesti chatissa
    chatForm.onsubmit = function (e) {
        e.preventDefault(); // Estä lomakkeen oletustoiminta (sivun uudelleenlataus)
        var messageInput = document.getElementById('message');
        var message = messageInput.value.trim(); // Poista ylimääräiset välilyönnit
        if (message !== '') {
            // Luo uusi viesti-elementti ja lisää se chat-viesteihin
            var messageElement = document.createElement('div');
            messageElement.textContent = message;
            messageElement.classList.add('message', 'sent'); // Lisää luokat viestielementtiin
            chatMessages.appendChild(messageElement);

            // Tyhjennä viestikenttä
            messageInput.value = '';
        }
    };

    // Simuloi vastaus viestiin
    setTimeout(function () {
        var replyElement = document.createElement('div');
        replyElement.textContent = replyMessage;
        replyElement.classList.add('message', 'received'); // Lisää luokat viestielementtiin
        chatMessages.appendChild(replyElement);
    }, 1000); // Simuloi 1 sekunnin viive vastauksessa
}