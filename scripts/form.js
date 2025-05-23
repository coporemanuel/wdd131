const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
document.getElementById('copyright').textContent = `© ${currentYear} Jose Manuel Copore Cutipa, Bermejo-Bolivia`;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

// WORK WITH ARRAY 
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

// Product name
const productSelect = document.getElementById('productname');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Track the number of reviews completed
if (window.location.pathname.includes('review.html')) {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem('reviewCount', reviewCount);
    console.log(`Number of reviews completed: ${reviewCount}`);
}

