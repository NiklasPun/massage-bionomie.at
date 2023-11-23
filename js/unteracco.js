const Button = document.getElementById('ButtonDiv');
const Arrow = document.getElementById('accosButton')
const Div = document.getElementById('accosDiv');

Button.addEventListener('click', () => {
    if (Button.classList.contains('animated')) {
        Div.style.top = '-5' + 'rem';
        Button.style.top = '0';
        Arrow.classList.remove('rotated');
        Button.classList.remove('animated');
    } else {
        Div.style.top = '0';
        Button.style.top = '5' + 'rem';
        Arrow.classList.add('rotated');
        Button.classList.add('animated');
    }
});