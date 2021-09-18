// ADD TÍTULO A PÁGINA
const h1Title = document.getElementById('title');
h1Title.innerHTML = 'Paleta de Cores';

// ADD PALETA DE CORES
function createClassColors() {
  const colors = ['rgb(249 65 68)', 'rgb(243 114 44)', 'rgb(248 150 30)', 'rgb(249 132 74)', 'rgb(249 199 79)', 'rgb(144 190 109)', 'rgb(67 170 139)', 'rgb (77 144 142)', 'rgb(87 117 144)', 'rgb(39 125 161)', 'rgb(237 174 73)', 'rgb(209 73 91)', 'rgb(0 121 140)', 'rgb(48 99 142)', 'rgb(0 61 91)', 'rgb(92 109 112)', 'rgb(163 119 116)', 'rgb(232 136 115)'];
  const paletteColor = document.getElementById('color-palette');

  for (let i = 0; i < 3; i += 1) {
    const num = Math.floor(Math.random() * colors.length);
    const palleteItem2 = document.createElement('div');
    palleteItem2.style.backgroundColor = colors[num];
    palleteItem2.className = 'color';
    paletteColor.appendChild(palleteItem2);
  }
}

function newPallet() {
  const paletteColor = document.getElementById('color-palette');
  const color = 'black';

  paletteColor.innerHTML = '';
  const palleteItem = document.createElement('div');
  palleteItem.style.backgroundColor = color;
  palleteItem.className = 'color';
  palleteItem.id = 'color1';
  paletteColor.appendChild(palleteItem);
}
newPallet();
createClassColors();

// ADD QUADRO DE PIXELS
let sizeBoard = 5;
function creatBoard() {
  const boardLine = document.getElementById('pixel-board');

  for (let i = 0; i < sizeBoard; i += 1) {
    const boardLineDiv = document.createElement('div');
    boardLine.appendChild(boardLineDiv);
    boardLineDiv.className = 'pixel-line';
  }

  const pixelBox = boardLine.children;

  for (let ind = 0; ind < pixelBox.length; ind += 1) {
    for (let i = 0; i < sizeBoard; i += 1) {
      const pixelBoxDiv = document.createElement('div');
      pixelBox[ind].appendChild(pixelBoxDiv);
      pixelBoxDiv.className = 'pixel';
    }
  }
}
creatBoard();

// ADD CAMPO PARA DIGITAR TAMANHO
const controlsId = document.getElementById('controls');
const inputSize = document.createElement('input');
inputSize.type = 'number';
inputSize.id = 'board-size';
inputSize.min = '1';
controlsId.appendChild(inputSize);

// ADD BOTÃO VQV
const buttonGenerate = document.createElement('button');
buttonGenerate.innerText = 'VQV';
buttonGenerate.id = 'generate-board';
controlsId.appendChild(buttonGenerate);

// AJUSTA TAMANHO DO QUADRO GERAL
function maxWidth() {
  const size = sizeBoard * 40 + 10;
  document.querySelector('#pixel-board').style.maxWidth = size + 'px';
}
maxWidth();

// LIMPA O QUADRO DE PIXELS
// cria evento
function clearBoard() {
  document.getElementById('pixel-board').innerHTML = '';
  creatBoard();
}

// cria botão
const button = document.createElement('button');
button.innerText = 'Limpar';
button.id = 'clear-board';
controlsId.appendChild(button);

button.addEventListener('click', clearBoard);

// FUNÇÃO AO BOTÃO
const inputNumber = document.getElementById('board-size');

function ChangeSizeBoard() {
  if (inputNumber.value === '') {
    alert('Board inválido!');
  } else if (inputNumber.value <= 5) {
    sizeBoard = 5;
    clearBoard();
    maxWidth();
  } else if (inputNumber.value >= 25) {
    sizeBoard = 25;
    clearBoard();
    maxWidth();
  } else {
    sizeBoard = inputNumber.value;
    clearBoard();
    maxWidth();
  }
}

buttonGenerate.addEventListener('click', ChangeSizeBoard);

// DEFINIR COR PRETA COMO COR INICIAL
const selectColorB = document.querySelector('#color1');

selectColorB.classList.toggle('selected');

// SELECIONA UMA NOVA COR
function removeSelectColor() {
  document.querySelector('.selected').classList.remove('selected');
}

function AddSelectedColor(event) {
  removeSelectColor();
  event.target.classList.add('selected');
}

function selectColor() {
  const palletColors = document.querySelector('#color-palette');
  palletColors.addEventListener('click', AddSelectedColor);
}

selectColor();

// PINTA O QUADRADO
function getPrint(event) {
  const selected = document.querySelector('.selected');
  const codeColor = window.getComputedStyle(selected).getPropertyValue('background-color');

  event.target.style.backgroundColor = codeColor;
}


const boardPixel = document.querySelector('#pixel-board');

boardPixel.addEventListener('click', getPrint);


// function printPixel() {

// printPixel();
