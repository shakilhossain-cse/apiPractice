const callCountry = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("loader").style.display = "none";
      displayCountry(data);
    });
};
callCountry();

const displayCountry = (countrys) => {
  const countryies = document.getElementById("countryies");
  countrys.forEach((country) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `<div class="card bg-dark text-white" onclick="loadDeatiles('${country.name}')">
        <img src="${country.flag}" class="card-img">
        <div class="card-img-overlay">
          <h5 class="card-title fs-1 fw-bold">${country.name}</h5>       
          <p class="card-text">${country.capital}</p>
        </div>   
      </div>`;
    countryies.appendChild(div);

  });
};


 const loadDeatiles = country => {
   console.log(country);
   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
   .then(res => res.json())
   .then(data => displayDeatiles(data));
 }

 const displayDeatiles = country => {
   console.log(country);
   const datiels = document.getElementById('detiles');
  const div =  document.createElement('div');
  div.innerHTML= `
  <div class="card bg-dark text-white">
  <img src="${country[0].flag}" class="card-img">
  <div class="card-img-overlay">
    <h5 class="card-title fs-1 fw-bold">${country[0].name}</h5>
    
    <p class="card-text">${country[0].capital}</p>
  </div>   
</div>
  `;
  datiels.textContent = '';
  datiels.appendChild(div);

 }
