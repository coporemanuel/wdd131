const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.getElementById('copyright').textContent = `© ${currentYear} Jose Manuel Copore Cutipa, Bermejo-Bolivia`;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

// WIND CHILL 
const temperatureC = 25;
const windSpeedKmH = 13;

// Calculate the wind chill
function calculateWindChill(temp, windSpeed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
}

// Function to check conditions and display the wind chill factor
function displayWindChill(temp, windSpeed) {
    const isValid = temp <= 10 && windSpeed > 4.8;
    const windChill = isValid ? calculateWindChill(temp, windSpeed) : "N/A";

    // Display the wind chill 
    const weatherSection = document.querySelector('#windChill');
    if (weatherSection) {
        weatherSection.innerHTML = `<p>Wind Chill: ${windChill}</p>`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    displayWindChill(temperatureC, windSpeedKmH);
});
