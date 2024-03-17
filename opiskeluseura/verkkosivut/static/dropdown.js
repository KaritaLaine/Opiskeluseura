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