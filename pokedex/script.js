// CHAMA CAMPOS DO FORMULÁRIO
const nameInput = document.querySelector('#name');
const levelInput = document.querySelector('#level');
const attackInput = document.querySelector('#attack');
const defenseInput = document.querySelector('#defense');
const captureButton = document.querySelector('#capture');
const ColectionButton = document.querySelector('#bnt-colection');

//CHAMA POKEMON COLLECTION
const titleCol = document.querySelector('#title-collection');
const textCol = document.querySelector('#text-collection');
let myCol = document.querySelector('#my-pokemon');
const controls = document.querySelector('#controls');


/* Crie uma função que recebe Nome, Level, Ataque e Defesa e guarda essas informações em um objeto */
let pokedex = [];

const camera = () => {
  pokedex.push({
    Nome: nameInput.value,
    Level: levelInput.value,
    Ataque: attackInput.value,
    Defesa: defenseInput.value });
    alert(`${nameInput.value} Capturado!`)
    return pokedex;
  };
  
  
  captureButton.addEventListener('click', (event) => {
    event.preventDefault();
    camera();
  });
  
  
  // EXIBIR COLEÇÃO
  
  /* Crie uma função que exiba as informações de todos os pokemons em memória no seguinte formato: "Nome - Level - Ataque - Defesa" */
  const openPokedex = () => {
    for (let index = 0; index < pokedex.length; index +=1) {
      const pokemons = Object.entries(pokedex[index]);
      for (key in pokemons) {
        const pokemon = document.createElement('p')
        myCol.appendChild(pokemon)
        pokemon.innerHTML = `<span class="pokemon-name">${pokemons[key][0]}:</span>${pokemons[key][1]}`;
      }   
      const pokemonSeparator = document.createElement('hr')
      myCol.appendChild(pokemonSeparator)
    }
  }
  // ADD CONTROLES

  
  // ADD TITULO E TEXTO
  ColectionButton.addEventListener('click', () => {
    const coachInput = document.querySelector('#coach');
    titleCol.innerHTML = `Pokedex do ${coachInput.value}`;
    const pokemonDiv = document.createElement('div');
    myCol.appendChild(pokemonDiv);
    pokemonDiv.innerHTML = openPokedex();
      btnSave.addEventListener('click', savePokemon())

  });
  
  
  
  // ADD FUNÇÃO AO BOTÃO DE SALVAR LISTA DE POKEMON
  const savePokemon = () => {
    localStorage.setItem('ColectionPok', JSON.stringify(myCol.innerHTML));
  }
  
  const btnSave = document.querySelector('#bnt-salve');
  
  
  
  window.onload = () => {
    const restoreColection = JSON.parse(localStorage.getItem('ColectionPokemon'));
      myCol.innerHTML = restoreColection;
    
  };