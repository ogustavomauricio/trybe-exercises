const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];
let estados = document.getElementById('estado');

states.forEach((seila) => {
  option = new Option(seila, seila.toLowerCase());
  estados.options[estados.options.length] = option;
});

// function stopDefAction(evt) {
//   evt.preventDefault();
// }

// document.getElementById('send').addEventListener(
//   'click', stopDefAction, false
// );

let inputs = {
  name: {
    maxLength: 40,
    required: true,
  },
  email: {
    maxLength: 50,
    required: true
  },
  cpf: {
    maxLength: 11,
    required: true
  },
  end: {
    maxLength: 200,
    required: true
  },
  city: {
    maxLength: 28,
    required: true,
  },
  estado: {
    type: 'select',
    required: true,
  },
  buttonRadio: {
    type: 'radio',
    required: true,
  },
  resume: {
    maxLength: 1000,
    required: true,
  },
  cargo: {
    maxLength: 40,
    required: true,
  },
  cargoDescription: {
    maxLength: 500,
    required: true,
  },
  startDate: {
    type: 'date',
    required: true,
  }
}

const date = document.querySelector('#startDate');

function ValidaData() {
  if (inputs.value.length === 0){
    return{
      message: "A data não dfoi preenchida!"
    }
  }

  let regex = /^\d\d\/\d\d\/\d\d\d\d$/;

  if (!regex.test(input.value)) {
    return {
      message: "Data: Formato Inválido"
    }
  }
  const valData = date.value.split('/');
  let dia = valData[0];
  let mes = valData[1];
  let ano = valData[2];

  if (dia < 0 || dia > 30){
    return {
      message:"Dia inválido"
    };
  }

  if ( mes < 0 || mes > 12){
    return {
      message: "Mês inválido"
    };
  }

  if ( year < 0){
    return {
      message: "Ano inválido"
    }
  }
  return true;
  
}
