document.getElementById('#pokedex_container')
let pokemons_number = 898;
console.log('pokemons_number')

async function getPokemon(id) {
    if (document.querySelector('.pokemon') !== null) {
        document.querySelector('.pokemon').remove();
    }
    console.log(document.querySelector('#getPokemon .pokemon'))
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let res = await fetch(url);
    let pokemon = await res.json();
    createPokemonCard(pokemon);
    console.log(document.querySelector('.pokemon'))
    console.log(pokemon);
}

const createPokemonCard = (pokemon) => {
    let pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon')
    let {id, name, sprites, types } = pokemon;
    let type = types [0].type.name;
    const pokeInnerHTML = `
        <div class="img_container">
            <img src="${sprites.front_default}" alt="${name}" />
        </div>
            <div class="info">
                <span class="number"> Nr: ${id}</span>
                <h3 class="name">${name}</h3>
                <small class="type">Type: <span>${type}</span></small>
            </div>
        `;
    console.log('createPokemonCard')
        pokemonEl.innerHTML = pokeInnerHTML;
        pokedex_container.appendChild(pokemonEl);
}

const search_value = document.getElementById('search')
const search_btn = document.getElementById('btn')
console.log(search_btn, search_value)

search_btn.addEventListener('click', () => getPokemon(search_value.value))



