const pokemonList = document.querySelectorAll('.pokemon');
const pokemonCards = document.querySelectorAll('.card-pokemon');

pokemonList.forEach((pokemon) => {
    pokemon.addEventListener('click', () => {                                     
        const pokemonCardOpened = document.querySelector('.open');
        pokemonCardOpened.classList.remove('open');

        const idPokemonSelected = pokemon.attributes.id.value;                    
        const idNextPokemon = 'card-' + idPokemonSelected;
        
        const newPokemonCardOpen = document.getElementById(idNextPokemon);
        newPokemonCardOpen.classList.add('open');   
        

        const activePokemonOnList = document.querySelector('.selected');
        activePokemonOnList.classList.remove('selected');
        
        const pokemonSelectedOnList = document.getElementById(idPokemonSelected);
        pokemonSelectedOnList.classList.add('selected');
  });
});

 