// TOTAL COUNTRY HERE 

fetch(`https://restcountries.com/v3.1/all`)
    .then((respons) => respons.json())
    .then((data) => showDetails(data));

const showDetails = (countrys) => {
    countrys.map((country) => {
        const {
            flags: { png },
            name: { common },
            region,
        } = country;
        const countryList = document.getElementById("countryList");
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `<div class="countrysCard">
                                <img class="maltupulImg" src="${png}" alt="IMAGE">
                                <h5 class="name">${common}</h5>
                                <h5 class="region">Region: ${region}</h5>
                                <button class="viewBtn" onclick="showSingleCountry('${common}')">View More</button>
                            </div> `;
        countryList.appendChild(newDiv);
    });
};

// TOTAL COUNTRY CLOSE


// BUTTON SECTION HERE 

const showSingleCountry = (common) => {
    fetch(`https://restcountries.com/v3.1/name/${common}`)
        .then((respons) => respons.json())
        .then((data) => {
            const {
                flags: { png },
                name: { common },
                population,
                startOfWeek,
            } = data[0];
            console.log(data[0])
            const showClickBtn = document.getElementById("showClickBtn");
            showClickBtn.innerHTML = `
                            <div class="singleCountrysCard">
                                <img class="singleImg" src="${png}" alt="Image">
                                <h5>Cuntry Name: ${common}</h5>
                                <h5 class="population">Population: ${population}</h5>
                                <h5>StartOfWeek: ${startOfWeek}</h5>
                            </div>`;
        });
};

// BUTTON SECTION CLOSE

// SEARCH SECTION HERE 

const src = document.getElementById("src");
const srcBtn = document.getElementById("srcBtn");

srcBtn.onclick = () => {
    const name = src.value;
    fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then((respons) => respons.json())
        .then((data) => {
            const {
                flags: { png },
                name: { common },
                population,
                startOfWeek,
            } = data[0];
            console.log(data[0])
            const showSrc = document.getElementById("showSrc");
            showSrc.innerHTML = `
                            <div class="singleCountrysCard">
                                <img class="singleImg" src="${png}" alt="Image">
                                <h5>Cuntry Name: ${common}</h5>
                                <h5 class="population">Population: ${population}</h5>
                                <h5>StartOfWeek: ${startOfWeek}</h5>
                            </div>`;
        });


};

// SEARCH SECTION CLOSE

