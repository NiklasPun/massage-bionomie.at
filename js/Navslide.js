const seitButtonDiv = document.getElementById('seitButtonDiv')
const seitButton = document.getElementById('seitButton')
const seitDiv = document.getElementById('seitDiv')

seitButtonDiv.addEventListener('click', () => {
    if (seitButtonDiv.classList.contains('animated')) {
        seitButtonDiv.style.right = '0';
        seitDiv.style.right = '-100' + '%';
        seitButton.classList.remove('rotated');
        seitButtonDiv.classList.remove('animated');
    } else {
        seitButtonDiv.style.right = '260' + 'px';
        seitDiv.style.right = '0';
        seitButton.classList.add('rotated');
        seitButtonDiv.classList.add('animated');
    }
});