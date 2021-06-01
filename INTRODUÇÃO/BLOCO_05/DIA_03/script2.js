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
    console.log(botao)

 
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
    
   