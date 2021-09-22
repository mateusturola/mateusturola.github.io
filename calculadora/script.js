const numero1 = document.querySelector('#numero1');
const numero2 = document.querySelector('#numero2');
const paragrafoResultado = document.querySelector('.resultado');

const btnSoma = document.querySelector('.soma');
const btnSubtracao = document.querySelector('.subtracao');
const btnDivisao = document.querySelector('.divisao');
const btnMultiplicacao = document.querySelector('.multiplicacao');
const btnLimpar = document.querySelector('.limpar');

function soma() {
   if (numero1.value === '' ) {
    M.toast({html: 'Preencha o Número 1!'})
    numero1.focus()
  } else if (numero2.value === '' ) {
    M.toast({html: 'Preencha o Número 2!'})
    numero2.focus()
  } else {
    const resultado = parseInt(numero1.value) + parseInt(numero2.value);
    paragrafoResultado.innerHTML = resultado;
  }
}

function subtracao() {
   if (numero1.value === '' ) {
    M.toast({html: 'Preencha o Número 1!'})
    numero1.focus()
  } else if (numero2.value === '' ) {
    M.toast({html: 'Preencha o Número 2!'})
    numero2.focus()
  } else {
      const resultado = parseInt(numero1.value) - parseInt(numero2.value);
      paragrafoResultado.innerHTML = resultado;
  }

}

function divisao() {
  if (numero1.value === '' ) {
    M.toast({html: 'Preencha o Número 1!'})
    numero1.focus()
  } else if (numero2.value === '' ) {
    M.toast({html: 'Preencha o Número 2!'})
    numero2.focus()
  } else {
    const resultado = parseInt(numero1.value) / parseInt(numero2.value);
    paragrafoResultado.innerHTML = resultado;
  }
}

function multiplicacao() {
   if (numero1.value === '' ) {
    M.toast({html: 'Preencha o Número 1!'})
    numero1.focus()
  } else if (numero2.value === '' ) {
    M.toast({html: 'Preencha o Número 2!'})
    numero2.focus()
  } else {
    const resultado = parseInt(numero1.value) * parseInt(numero2.value);
    paragrafoResultado.innerHTML = resultado;
  }
}

function limpar() {
  location.reload()  
}

btnSoma.addEventListener('click', soma)
btnSubtracao.addEventListener('click', subtracao)
btnDivisao.addEventListener('click', divisao)
btnMultiplicacao.addEventListener('click', multiplicacao)
btnLimpar.addEventListener('click', limpar)

//Animação no campo de input 
function input() {
  M.updateTextFields();
};