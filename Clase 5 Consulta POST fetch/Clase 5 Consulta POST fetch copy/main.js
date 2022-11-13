// Aqui utilizamos query parameters para obetener contenido dinamico de acuerdo a lo que deseamos

const API_KEY =
  "&api_key=live_g2pdcoNOICzsYYYDEc98TatVCy8Oowg6DdqxicO6CON4ikgwvzPNLijW6iqJqXbc";
const API_URL = "https://api.thecatapi.com/v1/images/search?limit=3";
const API_URL_FAVORITES = "https://api.thecatapi.com/v1/favourites?limit=3";
const API_URL_SAVE_FAVORITES = "https://api.thecatapi.com/v1/favourites?api_key=live_g2pdcoNOICzsYYYDEc98TatVCy8Oowg6DdqxicO6CON4ikgwvzPNLijW6iqJqXbc";

const spanError = document.getElementById("randomMichisError");


async function loadRandomMichis() {
  const res = await fetch(API_URL +API_KEY);
  const data = await res.json();

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error" + res.status + data.message;
  } else {
    console.log(data);
    const img1 = document.querySelector("#img1");
    const img2 = document.querySelector("#img2");
    const img3 = document.querySelector("#img3");

    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
  }
}

async function loadFavoritesMichis() {
  const res = await fetch(API_URL_FAVORITES + API_KEY);
  const data = await res.json();

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error" + res.status + data.message;
  } else {
    console.log(data);
    const img1 = document.querySelector("#img1");
    const img2 = document.querySelector("#img2");
    const img3 = document.querySelector("#img3");

    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
  }

}

async function saveFavouriteMichis() {

  const res = await fetch(API_URL_SAVE_FAVORITES, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        image_id: 'dje',
    }),
  });
  const data = await res.json();

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error" + res.status ;
    console.log("Error")
  } else {
    console.log(data);
  }

}
