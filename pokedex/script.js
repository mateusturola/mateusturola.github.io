// CHAMA CAMPOS DO FORMULÁRIO
const nameInput = document.querySelector('#name');
const levelInput = document.querySelector('#level');
const attackInput = document.querySelector('#attack');
const defenseInput = document.querySelector('#defense');
const captureButton = document.querySelector('#capture');

/* Crie uma função que recebe Nome, Level, Ataque e Defesa e guarda essas informações em um objeto */

const pokedex = [];
 

const camera = () => {
  pokedex.push({
    Nome: nameInput.value,
    Level: levelInput.value,
    Ataque: attackInput.value,
    Defesa: defenseInput.value });
    alert(`${nameInput.value} Capturado!`)
    console.log(pokedex)
  return pokedex;
};


captureButton.addEventListener('click', (event) =>{
event.preventDefault();
camera();
})

    


/* Crie uma função que exiba as informações de todos os pokemons em memória no seguinte formato: "Nome - Level - Ataque - Defesa" */

const openPokedex = () => {
  for (let index = 0; index < pokedex.length; index +=1) {
  const pokemons = Object.entries(pokedex[index]);
    for (key in pokemons) {
        console.log(`${pokemons[key][0]}:${pokemons[key][1]}`);
      }  
    console.log('--------');
  }
  
}

openPokedex();
