
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
