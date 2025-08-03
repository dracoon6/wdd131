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
        templeName: "Salt Lake City Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl:
            "https://assets.churchofjesuschrist.org/cd/4d/cd4d22a965af18a50f8589bb1b917859d5935209/salt_lake_temple.jpg"
    },
    {
        templeName: "Copenhagen Denmark",
        location: "Frederiksberg, Denmark",
        dedicated: "2004, May, 24",
        area: 25000,
        imageUrl:
            "https://assets.churchofjesuschrist.org/32/7d/327d372c89e0e01fc2ea425649f8573023346fed/copenhagen_denmark_temple_lds.jpeg"
    },
    {
        templeName: "London England",
        location: "Newchapel, England",
        dedicated: "1958, September, 7",
        area: 42000,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/a61c22b69663f8744d7b3122f6f98a05cf702f11/full/3840%2C/0/default "
    }
];

const gallery = document.querySelector('.gallery');
const mainHeading = document.querySelector('main h2');
const navLinks = document.querySelectorAll('nav a');

function createTempleCard(temple) {
    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = 'lazy';

    const figcaption = document.createElement('figcaption');
    figcaption.textContent = temple.templeName;

    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'card-details';
    detailsDiv.innerHTML = `
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area.toLocaleString()} sq ft</p>
    `;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    figure.appendChild(detailsDiv);

    return figure;
}

function displayTemples(filteredTemples) {
    gallery.innerHTML = '';
    filteredTemples.forEach(temple => {
        const card = createTempleCard(temple);
        gallery.appendChild(card);
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        navLinks.forEach(navLink => navLink.classList.remove('active'));

        event.target.classList.add('active');

        let filterTitle = '';
        let filteredList = [];

        switch (event.target.id) {
            case 'old-link':
                filterTitle = 'Old Temples (before 1900)';
                filteredList = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                break;
            case 'new-link':
                filterTitle = 'New Temples (after 2000)';
                filteredList = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                break;
            case 'large-link':
                filterTitle = 'Large Temples (> 90,000 sq ft)';
                filteredList = temples.filter(temple => temple.area > 90000);
                break;
            case 'small-link':
                filterTitle = 'Small Temples (< 10,000 sq ft)';
                filteredList = temples.filter(temple => temple.area < 10000);
                break;
            case 'home-link':
            default:
                filterTitle = 'All Temples';
                filteredList = temples;
                break;
        }

        mainHeading.textContent = filterTitle;
        displayTemples(filteredList);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    displayTemples(temples);
});
