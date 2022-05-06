document.getElementById('#pokedex_container')
let pokemons_number = 898;
console.log('pokemons_number')

async function getPokemon(id) {
    if (document.querySelector('.pokemon') !== null) {
        document.querySelector('.pokemon').remove();
    }
    console.log(document.querySelector('#getPokemon'))
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let res = await fetch(url);
    let pokemon = await res.json();
    createPokemonCard(pokemon);
    console.log(pokemon);
}

const createPokemonCard = (pokemon) => {
    let pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon')
    let {id, name, sprites, types, stats } = pokemon;
    console.log(stats)
    let type = types [0].type.name;
    const pokeInnerHTML = `
        <div class="img_container">
            <img src="${sprites.front_default}" alt="${name}" />
            <button class="shiny_img"><img src="../pics/shiny_pic.jpg" alt="shiny"</button>
        </div>
            <div class="info">
                <span class="number"> ID: ${id}</span>
                <h3 class="name">${name}</h3>
                <small class="type">Type: <span>${type}</span></small>
                <div class="stats_container">
                    <div class="seperate">
                        <p class="stats">${stats[0].stat.name}: ${stats[0].base_stat}</p>
                        <p class="stats">${stats[1].stat.name}: ${stats[1].base_stat}</p>
                        <p class="stats">${stats[2].stat.name}: ${stats[2].base_stat}</p>
                    </div>
                    <div class="seperate">
                        <p class="stats">${stats[3].stat.name}: ${stats[3].base_stat}</p>
                        <p class="stats">${stats[4].stat.name}: ${stats[4].base_stat}</p>
                        <p class="stats">${stats[5].stat.name}: ${stats[5].base_stat}</p>
                    </div>
                </div>
            </div>
        `;
    console.log('createPokemonCard')
        pokemonEl.innerHTML = pokeInnerHTML;
        pokedex_container.appendChild(pokemonEl);
        let shinyButton = document.querySelector('.shiny_img')
        let isShiny = false
        shinyButton.addEventListener('click', () => {
            const img = document.querySelector('img')

            isShiny = !isShiny
        
            if (isShiny) {
                img.src = sprites.front_shiny
            } else {
                img.src = sprites.front_default
            }

        })
}

const search_value = document.getElementById('search')
const search_btn = document.getElementById('btn')

document.getElementById("search")
.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
    document.getElementById("btn").click();
}
});


search_btn.addEventListener('click', () => getPokemon(search_value.value))



