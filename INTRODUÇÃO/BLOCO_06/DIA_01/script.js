
const selecao = document.getElementById('input-estado');
const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];

const dataRecebida = document.getElementById('data');
const form = document.getElementsByTagName('form');
const enviar = document.getElementById('enviar')


states.forEach((states) => {
  option = new Option(states, states.toLowerCase());
  selecao.options[selecao.options.length] = option;
});

//retirei a solução para popular os options desse site https://www.sergiotoledo.com.br/tutoriais/javascript/populando-select-com-javascript-dinamicamente



// form.addEventListener("submit",(event) =>{
//   event.preventDefault();
// });




function validarData(data){
  let array = [];
  var patternData = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;


  let valida = patternData.test(input.value);
  if( valida === true) {
    array = input.value.split('/');
    if (array [0] > 31 || array[0] == 00) {
      alert ('dia inválido');
    }
  }else isFinite(array[1] > 12 || array[1] == 0) {
    alert ("mês Inválido");
  }
  else if (array[2] == 0000) {
    alert("ano inválido");
  }
}else {
  alert("data invalida")
}

enviar.addEventListener('click', validarData);
