window.onload = start;

function start(){
  let button = document.getElementById("btnLoad");
  button.addEventListener('click', clickButton);
}

async function loadUrl(url){
    let response = await fetch(url);
    return response.json();
}

async function clickButton(){
    let country = document.getElementById('selectCountry').value;
    let json = await loadUrl(`https://disease.sh/v3/covid-19/countries/${country}`);
    //console.log(json)

    document.getElementById('country').innerHTML = `<b>Country: </b> ${json.country}`;
    document.getElementById('population').innerHTML = `<b>Population: </b> ${json.population}`;
    document.getElementById('cases').innerHTML = `<b>Total Cases: </b> ${json.cases}`;
    document.getElementById('deaths').innerHTML = `<b>Total Deaths: </b> ${json.deaths}`;
    document.getElementById('recovered').innerHTML = `<b>Total Recovered: </b> ${json.recovered}`;
    document.getElementById('active').innerHTML = `<b>Active Cases: </b> ${json.active}`;
}