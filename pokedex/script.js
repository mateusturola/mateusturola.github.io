/* Feature 1 - Quando apontamos a câmera da Pokedex para um Pokemon precisamos guardar as informações do nosso monstrinho na memória da  Pokedex.
As informações são:
Nome - String,
Level - um inteiro entre 1 e 50,
Ataque - um inteiro entre 1 e 345,
Defesa - um inteiro entre 1 e 400
Crie uma função que recebe Nome, Level, Ataque e Defesa e guarda essas informações em um objeto */

const pokedex = [];

const camera = (name, lev, attack, defense) => {
  pokedex.push({
    Nome: name,
    Level: lev,
    Ataque: attack,
    Defesa: defense });
  return pokedex;
};

const namePok = 'NOME DO POKEMON';
const lev = 150;
const attack = 1345;
const defense = 1400; 


camera(namePok, lev, attack, defense);


/*
Feature 2 - A pokedex vem equipada com um botão para exibir os pokemons que estão salvos na memória da pokedex.
Crie uma função que exiba as informações de todos os pokemons em memória no seguinte formato:
"Nome - Level - Ataque - Defesa" */

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
