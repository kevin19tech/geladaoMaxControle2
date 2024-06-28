let qtd = document.getElementById("qtdGeladoes")
let qtd2 = document.getElementById("qtdGeladoes2")
let qtd3 = document.getElementById("qtdGeladoes3")
let btnMenos = document.getElementById("buttonMenos");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");
let qtdAtual = Number(qtd.value);
let qtd2Atual = Number(qtd2.value);
let qtd3Atual = Number(qtd3.value);
qtdAtual = 0
qtd2Atual = 0
qtd3Atual = 0

function menos(index){
    //Primeiro botão menos
    if(index === 1 && qtdAtual > 0){
        qtdAtual--
        qtd.innerText = qtdAtual
    }else if(index === 2 && qtd2Atual > 0){ //Segundo botão menos
        qtd2Atual--
        qtd2.innerText = qtd2Atual
    }else if(index === 3 && qtd3Atual > 0){ //Segundo botão menos
        qtd3Atual--
        qtd3.innerText = qtd3Atual
    }
}

function mais(index){
    if (index === 1){
        qtdAtual++
        qtd.innerText = qtdAtual

    } else if (index === 2){
        qtd2Atual++
        qtd2.innerText = qtd2Atual    
    }else if (index === 3){
        qtd3Atual++
        qtd3.innerText = qtd3Atual    
    }
}

function addGeladao(){
    container2.style.display = 'flex';
    container3.style.display = 'flex';
}

