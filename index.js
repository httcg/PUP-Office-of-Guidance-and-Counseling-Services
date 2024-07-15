document.getElementById('answer-form').addEventListener('click', function() {
    var modal = document.getElementById('termsModal');
    modal.style.display = 'block';
});

var modal = document.getElementById('termsModal');

var span = document.getElementsByClassName('close')[0];

var acceptButton = document.getElementById('accept-terms');
span.onclick = function() {
    modal.style.display = 'none';
}

acceptButton.onclick = function() {
    loading.style.display = "flex";

    setTimeout(() => {
        loading.style.display = "none";
        termsModal.style.display = "none";
        submitFormButton.disabled = false; // Enable the submit button
    }, 2000); 

    modal.style.display = 'none';
    window.location.href = 'personal.html';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

