const accordionItems = document.querySelectorAll('.accordion .accordion-item');
const alreadyopen = document.getElementById('alreadyopen');



for (let item of accordionItems) {
    // .accordion-item-body -> zweites Kindelement von item
    const accordionItemBody = item.children[1];
    accordionItemBody.setAttribute('data-init-height', accordionItemBody.offsetHeight);
    accordionItemBody.style.height = '0';
    // click auf .accordion-item-title -> erstes Kindelement von item
    item.children[0].addEventListener('click', function (event) {
        if (this.parentElement.classList.contains('open')) {
            this.parentElement.classList.remove('open');
            this.nextElementSibling.style.height = 0;
        } else {
            this.parentElement.classList.add('open');
            this.nextElementSibling.style.height = this.nextElementSibling.getAttribute('data-init-height') + 'px';
        }
    });
}

alreadyopen.nextElementSibling.style.height = alreadyopen.nextElementSibling.getAttribute('data-init-height') + 'px';
alreadyopen.parentElement.classList.add('open');