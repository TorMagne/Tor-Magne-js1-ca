const container = document.querySelector(".container");
const url = "https://api.pokemontcg.io/v1/cards";
const loaderContainer = document.querySelector(".loader-container");

container.innerHTML = `<div class="loader"></div>`;

async function tcgCards() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    pokemon = json.cards;

    container.innerHTML = "";

    for (let i = 0; i < pokemon.length; i++) {
      if (i === 50) {
        break;
      }

      container.innerHTML += `<a class="card" href="details.html?id=${pokemon[i].id}">
        <img class="pokemon-card" src="${pokemon[i].imageUrl}" alt="pokemon image">
          <div class="card-header">
            <h4 class="card-name">${pokemon[i].name}</h4>
            <p class="card-para">Set: ${pokemon[i].set}</p>
          </div>
          </a>
      `;
    }
  } catch (error) {
    container.innerHTML = displayError(
      "An error occured when loading the API for the tcg cards"
    );
  }
}

tcgCards();

const searchCards = (event) => {
  event.preventDefault();
  container.innerHTML = "";
  const pokemon = document.querySelector("#search-pokemon").value.trim();
  // console.log(pokemon);

  const url = "https://api.pokemontcg.io/v1/cards?name=" + pokemon;
  const getPokemonUrl = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      pokemonSearch = json.cards;
      console.log(pokemonSearch);
      for (let i = 0; i < pokemonSearch.length; i++) {
        container.innerHTML += `<a class="card" href="details.html?id=${pokemonSearch[i].id}">
        <img class="pokemon-card" src="${pokemonSearch[i].imageUrl}" alt="pokemon image">
          <div class="card-header">
            <h4 class="card-name">${pokemonSearch[i].name}</h4>
            <p class="card-para">Set: ${pokemonSearch[i].set}</p>
          </div>
          </a>
      `;
      }
    } catch (error) {
      console.log(error);
    }
  };

  getPokemonUrl();
};

const submit = document.querySelector("#submit");

submit.addEventListener("click", searchCards);
