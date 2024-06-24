
let qtd = document.getElementById("qtdGeladoes")
let btnMenos = document.getElementById("buttonMenos");
let btnMais = document.getElementById("buttonMais");

let qtdAtual = Number(qtd.value);
qtdAtual = 0

function menos(){
    if(qtdAtual > 0){
        qtdAtual--
        qtd.innerText = qtdAtual
    }
}

function mais(){
    qtdAtual++
    qtd.innerText = qtdAtual
}

