var submitted = false;
const formModal = document.getElementById('formSubmit');

$("#contactForm").submit((e) => {
    $(formModal).modal('show');
});

formModal.addEventListener('hidden.bs.modal', event => {
    $("#contactForm").trigger('reset');
});