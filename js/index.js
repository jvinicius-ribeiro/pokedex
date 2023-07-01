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


 //evento de clique, para criar uma função
 //remove a classe " open " do que estiver aberto
 //seleciona através do id
 //mostra outro no lugar do que foi removido
 //adiciona a classe "open" à outro, quando click