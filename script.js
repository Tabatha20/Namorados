function showMessage() {
    var message = document.getElementById('surprise-message');
    if (message.style.display === 'none') {
        message.style.display = 'block';
    } else {
        message.style.display = 'none';
    }
}
