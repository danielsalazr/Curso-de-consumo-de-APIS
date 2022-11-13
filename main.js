// Aqui utilizamos query parameters para obetener contenido dinamico de acuerdo a lo que deseamos

const API_KEY =
  "&api_key=live_g2pdcoNOICzsYYYDEc98TatVCy8Oowg6DdqxicO6CON4ikgwvzPNLijW6iqJqXbc";
const API_URL = "https://api.thecatapi.com/v1/images/search?limit=3";
const API_URL_FAVORITES = "https://api.thecatapi.com/v1/favourites?limit=0";
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
    const btn1 = document.querySelector('#btn1');
    const btn2 = document.querySelector('#btn2');
    const btn3 = document.querySelector('#btn3');

    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;

    btn1.onclick = () => saveFavouriteMichis(data[0].id)
    btn2.onclick = () => saveFavouriteMichis(data[1].id)
    btn3.onclick = () => saveFavouriteMichis(data[2].id)
  }
}

async function loadFavoritesMichis() {
  const res = await fetch(API_URL_FAVORITES + API_KEY);
  const data = await res.json();

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error" + res.status + data.message;
  } else {
    console.log(data);
    data.forEach( michi => {
        const section = document.getElementById('favoriteMichis');
        const article = document.createElement('article');
        const img = document.createElement('img');
        const btn= document.createElement('button');
        const btnText  = document.createTextNode('Sacar al michi de favoritos')

        btn.appendChild(btnText);
        img.src = michi.image.url;
        img.width = 150

        article.appendChild(img);
        article.appendChild(btn);
        section.appendChild(article);

    })
  }

}

async function saveFavouriteMichis(id) {

  const res = await fetch(API_URL_SAVE_FAVORITES, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        image_id: id,
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
