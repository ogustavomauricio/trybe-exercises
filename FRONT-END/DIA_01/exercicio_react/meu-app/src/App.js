//Crie uma array de compromissos e use a função map para que cada item do array apareça, como um item de lista, no seu componente App .

import './App.css';

const Task = (items) => {
  return (
   items.map(item => <li>{item}</li>)
  );
}

function App() {
  return (
    Task(['Acordar', 'Escovar os Dentes', 'Tomar Café', 'Academia', 'Trabalho' ])
  );
}

export default App;
