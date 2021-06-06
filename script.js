const textInput = document.querySelector('#texto-tarefa');
const botaoAdc = document.querySelector('#criar-tarefa');
const item = document.getElementsByTagName('li');
const botaoLimpar = document.querySelector('#apaga-tudo');
// let listaOrdenada = document.querySelector('#lista-tarefas');

// Adicionar Lista Ordenada
const listaOrdenada = document.createElement('ol');
document.body.appendChild(listaOrdenada);
listaOrdenada.setAttribute('id', 'lista-tarefas');
//  listaOrdenada.addEventListener('click', selectClass)

// EFEITO RISCADO
function duploClick(event) {
  event.target.classList.toggle('completed');
}

// Adiciona cor ao item clicado.
function mudaCor() {
  for (let i = 0; i < item.length; i += 1) {
    item[i].id = 'unselected';
  }	event.target.id = 'selected';
}
// Adicionar Botão
function adicionaTarefa() {
  const item = document.createElement('li');
  listaOrdenada.appendChild(item);
  item.innerHTML = textInput.value;
  textInput.value = '';
  item.id = 'unselected';
  item.classList.add('item');
  item.addEventListener('click', mudaCor);
  item.addEventListener('dblclick', duploClick);
}

botaoAdc.addEventListener('click', adicionaTarefa);

// BOTÃO LIMPAR LISTA
function resetBoard() {
  const li = document.querySelectorAll('.item');
  for (let i = 0; i < li.length; i += 1) {
    listaOrdenada.removeChild(li[i]);
  }
// listaOrdenada.innerHTML = null;
}
botaoLimpar.addEventListener('click', resetBoard);

// BOTÃO REMOVER TAREFAS FINALIZADAS

const btnRemoverTarefas = document.querySelector('#remover-finalizados');

function removeFinalizados(){
	const list = document.querySelectorAll('.item');
	for(let i = 0; i < list.length; i += 1){
		if(list[i].classList.contains('completed')){
			listaOrdenada.removeChild(list[i]);
		}
	
		}
	} 
btnRemoverTarefas.addEventListener('click', removeFinalizados)