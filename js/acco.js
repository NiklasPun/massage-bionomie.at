const slideButton = document.getElementById('slideButton');
const slideDiv = document.getElementById('slideDiv');

slideButton.addEventListener('click', () => {
    if (slideButton.classList.contains('animated')) {
        slideDiv.style.right = '-100' + '%';
        slideButton.style.right = '1' + 'rem';
        slideButton.classList.remove('rotated');
        slideButton.classList.remove('animated');
    } else {
        slideDiv.style.right = '0'; /* Slide the div in */
        slideButton.style.right = '51' + 'rem';
        slideButton.classList.add('rotated');
        slideButton.classList.add('animated');
    }

});