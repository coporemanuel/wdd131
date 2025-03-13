const currentYear = new Date().getFullYear();

const lastModified = document.lastModified;

document.getElementById('copyright').textContent = `© ${currentYear} Jose Manuel Copore Cutipa, Bermejo-Bolivia`;

document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');

    menuBtn.addEventListener('click', function() {
        navigation.classList.toggle('show');
        menuBtn.textContent = navigation.classList.contains('show') ? '✖' : '☰';
    });
});