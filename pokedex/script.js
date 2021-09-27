// CHAMA CAMPOS DO FORMULÁRIO
const nameInput = document.querySelector('#name');
const levelInput = document.querySelector('#level');
const attackInput = document.querySelector('#attack');
const defenseInput = document.querySelector('#defense');
const captureButton = document.querySelector('#capture');
const colectionButton = document.querySelector('#bnt-colection');

//CHAMA POKEMON COLLECTION
const titleCol = document.querySelector('#title-collection');
const textCol = document.querySelector('#text-collection');
const myCol = document.querySelector('#my-pokemon');
const clearButton = document.querySelector('#bnt-clear');


window.onload = () => {
  const restoreColection = JSON.parse(localStorage.getItem('ColectionPok'));
    myCol.innerHTML = restoreColection;
  
};


/* Crie uma função que recebe Nome, Level, Ataque e Defesa e guarda essas informações em um objeto */
// Validação dos campos


let pokedex = [];

const camera = () => {
  if (nameInput.value === "") {
   M.toast({html: 'Qual é o nome do seu Pokemon?'});
    nameInput.focus();
  } else if (levelInput.value < 1 || levelInput.value > 50 || levelInput.value === "") {
   M.toast({html: 'O Nivel deve estar entre 1 e 50'});
    levelInput.focus();
  } else if (attackInput.value < 1 || attackInput.value > 345 || attackInput.value === "") {
   M.toast({html: 'O Ataque deve estar entre 1 e 345'});
    attackInput.focus()
  } else if (defenseInput.value < 1 || defenseInput.value > 400 || defenseInput.value === "") {
   M.toast({html: 'A Defesa deve estar entre 1 e 400'});
    defenseInput.focus();
  } else {
  pokedex.push({
    Nome: nameInput.value,
    Level: levelInput.value,
    Ataque: attackInput.value,
    Defesa: defenseInput.value });
    alert(`${nameInput.value} Capturado!`);
    return pokedex;
  }};

captureButton.addEventListener('click', (event) => {
  event.preventDefault();
  camera();
});
  
  
// EXIBIR COLEÇÃO

/* Crie uma função que exiba as informações de todos os pokemons em memória no seguinte formato: "Nome - Level - Ataque - Defesa" */
const openPokedex = () => {
  if (pokedex.length === 0) {
    return alert('Você ainda não capturou nenhum Pokemon :(!')
    
  } else {
    for (let index = 0; index < pokedex.length; index +=1) {
      const pokemons = Object.entries(pokedex[index]);
      for (key in pokemons) {
        const pokemon = document.createElement('p')
        myCol.appendChild(pokemon)
        pokemon.innerHTML = `<span class="pokemon-name">${pokemons[key][0]}:</span>${pokemons[key][1]}`;
        pokemon.className = 'item';
      }   
    const pokemonSeparator = document.createElement('hr');
    myCol.appendChild(pokemonSeparator);
    pokemonSeparator.className = 'item';
    }
  }
}

// ADD TITULO E TEXTO
colectionButton.addEventListener('click', () => {
  const coachInput = document.querySelector('#coach');
  if (coachInput.value != '') {
  titleCol.innerHTML = `Pokedex do ${coachInput.value}`;
  }

 openPokedex();
});




// ADD FUNÇÃO AO BOTÃO DE SALVAR LISTA DE POKEMON
const savePokemon = () => {
  localStorage.setItem('ColectionPok', JSON.stringify(myCol.innerHTML));
}

const btnSave = document.querySelector('#bnt-save');
  btnSave.addEventListener('click', () =>{
  localStorage.setItem('ColectionPok', JSON.stringify(myCol.innerHTML));
})

// ADD BOTÃO DE LIMPAR COLEÇÃO

function clearAll (){
  const allItems = document.querySelectorAll('.item');
  for (let index = 0; index < allItems.length; index += 1) {
    myCol.removeChild(allItems[index]);
  }
}

clearButton.addEventListener ('click', clearAll);


