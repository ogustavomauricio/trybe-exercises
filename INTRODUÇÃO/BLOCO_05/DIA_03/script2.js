function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
      console.log(weekDaysList)
    };
  };
  
  createDaysOfTheWeek();
  


    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
   
    let divDaysList = document.querySelector('#days');
    
    for(let index = 0; index < dezDaysList.length; index += 1){
        let dias = dezDaysList[index];
            

        let listaDias = document.createElement('li');
        listaDias.innerHTML = dias;

        listaDias.className = "days";

        divDaysList.appendChild(listaDias);

        console.log(listaDias);
        
        if((dias === 24) ||(dias === 31)|| (dias === 25) ) {
            listaDias.classList = " days, holiday";
        }

        if((dias === 4) || (dias === 11) || (dias === 18)){
           listaDias.classList = "days, friday ";
       } else if (dias === 25){
          listaDias.classList.add ("friday")
        }
    }

    let divBotao = document.querySelector('.buttons-container');
    
    let botao = document.createElement('button');
    botao.id = 'btn-holiday';
    botao.innerHTML = "Feriados";  

    divBotao.appendChild(botao);
 

 
    const btnHoliday = document.getElementById('btn-holiday');
    btnHoliday.addEventListener('click', function() {
      const holidays = document.querySelectorAll('.holiday');
      for (let index = 0; index < holidays.length; index += 1) {
        if (holidays[index].style.backgroundColor === 'white') {
          holidays[index].style.backgroundColor = 'rgb(238,238,238)';
        } else {
          holidays[index].style.backgroundColor = 'white';
        }
      }
    });

    // Exercício 04

    // Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
    // Adicione a este botão o ID "btn-friday" .
    // Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .  
   
   let botaoSexta = document.createElement('button');
   botaoSexta.innerHTML = "Sexta-feira";
   botaoSexta.id = 'btn-friday';
   divBotao.appendChild(botaoSexta);
  


    //   Exercício 5:

    // Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
    // É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
    
    
    
   let btnSexta = document.getElementById('btn-friday')
   btnSexta.addEventListener('click', function(){
     let friday = document.getElementsByClassName('friday');
     for(let index = 0; index < friday.length; index +=1){
      if(friday[index].style.backgroundColor === "white"){
        friday[index].style.backgroundColor === 'rgb(238,238,238)';
      } else {
        friday[index].style.backgroundColor = 'white';
      }
     }  
   });


  //  const btnHoliday = document.getElementById('btn-holiday');
  //   btnHoliday.addEventListener('click', function() {
  //     const holidays = document.querySelectorAll('.holiday');
  //     for (let index = 0; index < holidays.length; index += 1) {
  //       if (holidays[index].style.backgroundColor === 'white') {
  //         holidays[index].style.backgroundColor = 'rgb(238,238,238)';
  //       } else {
  //         holidays[index].style.backgroundColor = 'white';
  //       }
  //     }
  //   });