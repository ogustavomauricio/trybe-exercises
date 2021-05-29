let linhaRainha = 4;
let colunaRainha = "D";

let linhaOponente = 4;
let colunaOponente = "G";

let attackBemSucedido = false;

if((linhaRainha === linhaOponente) || (colunaRainha === colunaOponente)){
	attackBemSucedido = true;
}
    
console.log("Ataque bem sucedido?" , attackBemSucedido)
