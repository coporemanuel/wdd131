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


// FILTER TEMPLES 
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Salta Argentina",
      location: "Salta, Argentina",
      dedicated: "2024, June, 16",
      area: 27000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salta-argentina-temple/salta-argentina-temple-48241-main.jpg"
    },
    {
      templeName: "Cochabamba Bolivia",
      location: "Cochabamba, Bolivia",
      dedicated: "2000, April, 30",
      area: 35500,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cochabamba-bolivia-temple/cochabamba-bolivia-temple-13721-main.jpg"
    },
    {
      templeName: "Santiago Chile",
      location: "Santiago, Chile",
      dedicated: "1983, September, 15-17",
      area: 20831,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/024-Santiago-Chile-Temple.jpg"
    },	
  ];

createTempleCard(temples);

// NEW TEMPLES 
const newTemplesLink = document.querySelector("#new");

newTemplesLink.addEventListener("click", () => {
    createTempleCard(
        temples.filter(temple => {
            const year = parseInt(temple.dedicated.split(",")[0]);
            return year > 1900;
        })
    );
});

// OLD TEMPLES 
const oldTemplesLink = document.querySelector("#old");

oldTemplesLink.addEventListener("click", () => {
    createTempleCard(
        temples.filter(temple => {
            const year = parseInt(temple.dedicated.split(",")[0]);
            return year < 1900;
        })
    );
});

// LARGE TEMPLES 
const largeTemplesLink = document.querySelector("#large");

largeTemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

// SMALL TEMPLES 
const smallTemplesLink = document.querySelector("#small");

smallTemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
});



  function createTempleCard(filteredTemples) {
    document.querySelector(".gallery").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".gallery").appendChild(card);
    });
}