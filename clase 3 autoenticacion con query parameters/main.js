
// Aqui utilizamos query parameters para obetener contenido dinamico de acuerdo a lo que deseamos

const API_KEY = '&api_key=live_g2pdcoNOICzsYYYDEc98TatVCy8Oowg6DdqxicO6CON4ikgwvzPNLijW6iqJqXbc'
const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=3'

async function reload() {
    const res = await fetch(API_URL+API_KEY);
    const data = await res.json();

    console.log(data);
    const img1 = document.querySelector('#img1');
    const img2 = document.querySelector('#img2');
    const img3 = document.querySelector('#img3');

    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
}