//1 - Use o método forEach chamando a callback showEmailList para apresentar os emails

// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   };
  
//   // Adicione seu código aqui
//   emailListInData.forEach(showEmailList);

//   console.log(showEmailList)

//FOR EACh

// ELE MODIFICA O OBJETO
// ELE NÃO RETORNO POR SÍ SÓ UM NOVO OBJETO.

// adicione a idade (age) para cada pessoa
const passengers = [
    { name: "Ademar", birthYear: 1975 },
    { name: "Tiago", birthYear: 1997 },
    { name: "Eduarda", birthYear: 2004 },
    { name: "Jessica", birthYear: 1984 },
    { name: "Enzo", birthYear: 2015 },
    { name: "Natan", birthYear: 2001 },
    { name: "Ana", birthYear: 1995 }
  ]

passengers.forEach((passenger) =>{
    passenger.age = 2021 - passenger.birthYear
});

console.log(passengers)