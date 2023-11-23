const closeModalBtns = document.getElementsByClassName('modal-close');
for (const btn of closeModalBtns) {
    btn.addEventListener('click', function() {
        this.parentElement.parentElement.setAttribute('hidden', '');
    });
}


// Cookie-Hinweis beim Laden der Seite anzeigen
// --> wenn die Cookies noch nicht akzeptiert wurden

const cookieHintModal = document.getElementById('cookie-hint');
const cookiesAccepted = localStorage.getItem('accept-cookies');

// wurde das Element mit der id "cookie-hint" gefunden?
if (cookieHintModal && cookiesAccepted != 1) {
    // Cookie-Hinweis anzeigen in dem das hidden-Attribut entfernt wird
    cookieHintModal.removeAttribute('hidden');
}

// Cookie-Einstellungen akzeptieren
const acceptCookiesBtn = document.getElementById('accept-cookies');
if (acceptCookiesBtn) {
    acceptCookiesBtn.addEventListener('click', function() {
        // Click auf Cookies-Akzeptieren speichern
        localStorage.setItem('accept-cookies', 1);

        // Schließen des Modal-Windows
        cookieHintModal.setAttribute('hidden', '');
    });
}