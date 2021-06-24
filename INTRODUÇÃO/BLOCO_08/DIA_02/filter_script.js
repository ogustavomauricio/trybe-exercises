const childrenAge = [2, 0, 5, 8, 12, 17, 13, 7, 10];
const mailList = [
    "robson@rocketseat.com",
    "fulano@gmail.com",
    "cleiton@rocketseat.com",
    "diego@rocketseat.com",
    "eu@adonis.com",
    "aloha@hawaii.com",
    "outro@emailqualquer.com"
  ];

// function childrenAge2to11(element, index, array) {
//     if (element >= 2 && element<= 11) return true;

//     return false;
// }

// const childrenFiltred = childrenAge.filter(childrenAge2to11);

// console.log(childrenFiltred);

 


// const childrenFiltred = childrenAge.filter(element => (element >= 2 && element<= 11)
// );

// console.log(childrenFiltred);

//FILTRAR E-MAILS

// const filterMails = [];
// for (let i = 0; i < mailList.length; i += 1){
//     if(mailList[i].includes('@rocketseat.com')) {
//         filterMails.push(mailList[i])
//     };
// };

// console.log(filterMails);

// includes retorna um true or false se ele encontrar o que está dentro dele como string.

// FILTER EMAILS ARROW FUNCTIONS

const filterMails = mailList.filter(element => (element.includes('@rocketseat.com')));

console.log(filterMails)