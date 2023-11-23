// Einstellungen für das Formular
let Kontaktformular = document.getElementById('Formular');
Kontaktformular.addEventListener('submit', function (event) {
     event.preventDefault();
     this.setAttribute('hidden', 'hidden');
     let NachrichtElem = document.getElementById('KontaktausgNachricht');
     NachrichtElem.removeAttribute('hidden');
});