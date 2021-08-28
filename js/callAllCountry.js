const callCountry = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => {
        document.getElementById('loader').style.display = 'none';
        displayCountry(data)
    });
   
};
callCountry();

const displayCountry = (countrys) => {
  const countryies = document.getElementById("countryies");
  countrys.forEach((country) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `<div class="card bg-dark text-white">
        <img src="${country.flag}" class="card-img">
        <div class="card-img-overlay">
          <h5 class="card-title fs-1 fw-bold">${country.name}</h5>
          
          <p class="card-text">${country.capital}</p>
        </div>   
      </div>`;
      countryies.appendChild(div);
    console.log(country);
  });
};
