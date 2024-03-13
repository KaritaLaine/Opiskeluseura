function openForm() {
    document.getElementById('myForm').style.display = 'block';
    // Create a backdrop element and append it to the body
    var backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    document.body.appendChild(backdrop);
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    // Remove the backdrop when closing the form
    var backdrop = document.querySelector('.backdrop');
    if (backdrop) {
        backdrop.parentNode.removeChild(backdrop);
    }
}
