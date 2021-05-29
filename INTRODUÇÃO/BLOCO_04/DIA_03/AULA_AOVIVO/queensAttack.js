let linhaRainha = 4;
let colunaRainha = "D";

let linhaOponente = 9;
let colunaOponente = "e";

let attackBemSucedido = false;


if((linhaRainha === linhaOponente) || (colunaRainha === colunaOponente)){
	attackBemSucedido = true;
}

for( let iSupDir = 1; iSupDir < 8 ;iSupDir += 1){
let linhaAtualRainha = linhaRainha + iSupDir;
let colunaAtualRainha = colunaRainha + iSupDir;

if((linhaAtualRainha > 8) || (colunaAtualRainha > 8)){
	break;
}
if((linhaOponente === linhaAtualRainha) && (colunaOponente === attackBemSucedido)){
	attackBemSucedido = true;
}
}

for( let iSupEsq = 1; iSupEsq < 8 iSupEsq += 1){
	let linhaAtualRainha = linhaRainha + iSupEsq;
	let colunaAtualRainha = colunaRainha - iSupEsq;
}
console.log("Ataque bem sucedido?" , attackBemSucedido)
