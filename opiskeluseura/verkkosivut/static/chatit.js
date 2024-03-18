document.addEventListener("DOMContentLoaded", function() {
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default behavior of anchor tags
            const roomName = this.textContent.trim();
            fetchChatContent(roomName);
        });
    });

    function fetchChatContent(roomName) {
        const url = `/chat/${roomName.toLowerCase().replace(/\s+/g, '-')}`; // Assuming the chat content URL follows this pattern
        
        fetch(url)
            .then(response => response.text())
            .then(data => {
                // Update the chatbox content with the fetched data
                const chatBox = document.querySelector('.chat-messages');
                chatBox.innerHTML = data;
            })
            .catch(error => console.error('Error fetching chat content:', error));
    }
});