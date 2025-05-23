
async function loadData() {
    try {
        const response = await fetch("data/local.json");
        const companies = await response.json();

        const grid = document.querySelector(".jobs");

        grid.innerHTML = "";

        companies.forEach((companie) => {
            const section = document.createElement("div");
            section.classList.add("cards-jobs");
            section.innerHTML = `
                <img src="${companie.image}" alt="${companie.name}" class="place-image" loading="lazy"/>
                <h2>${companie.company}</h2>
                <p>${companie.description}</p>
                <button class="learn-more" onclick="window.location.href='${companie.ubication}'">Ubication</button>
                <button class="learn-more" onclick="window.location.href='${companie.website || "#"}'">Learn More</button>
            `;

            grid.appendChild(section);
        });
    } catch (error) {
        console.error("Error loading the data:", error);
    }
}

document.addEventListener("DOMContentLoaded", loadData);