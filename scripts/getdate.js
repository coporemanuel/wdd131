
const currentYear = new Date().getFullYear();

const lastModified = document.lastModified;

document.getElementById('copyright').textContent = `© ${currentYear} Jose Manuel Copore Cutipa, Bermejo-Bolivia`;

document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
