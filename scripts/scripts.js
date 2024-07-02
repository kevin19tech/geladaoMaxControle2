let qtd = document.getElementById("qtdGeladoes")
let qtd2 = document.getElementById("qtdGeladoes2")
let qtd3 = document.getElementById("qtdGeladoes3")
let qtd4 = document.getElementById("qtdGeladoes4")
let qtd5= document.getElementById("qtdGeladoes5")
let qtd6= document.getElementById("qtdGeladoes6")
let btnMenos = document.getElementById("buttonMenos");
let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");
let container4 = document.getElementById("container4");
let container5 = document.getElementById("container5");
let container6 = document.getElementById("container6");
let qtdAtual = Number(qtd.value);
let qtd2Atual = Number(qtd2.value);
let qtd3Atual = Number(qtd3.value);
let qtd4Atual = Number(qtd4.value);
let qtd5Atual = Number(qtd5.value);
let qtd6Atual = Number(qtd6.value);
qtdAtual = 0
qtd2Atual = 0
qtd3Atual = 0
qtd4Atual = 0
qtd5Atual = 0
qtd6Atual = 0
let contInputs = 1

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
    }else if(index === 4 && qtd4Atual > 0){ //Segundo botão menos
        qtd4Atual--
        qtd4.innerText = qtd4Atual
    }else if(index === 5 && qtd5Atual > 0){ //Segundo botão menos
        qtd5Atual--
        qtd5.innerText = qtd5Atual
    }else if(index === 6 && qtd6Atual > 0){ //Segundo botão menos
        qtd6Atual--
        qtd6.innerText = qtd6Atual
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
    }else if (index === 4){
        qtd4Atual++
        qtd4.innerText = qtd4Atual    
    }else if (index === 5){
        qtd5Atual++
        qtd5.innerText = qtd5Atual    
    }else if (index === 6){
        qtd6Atual++
        qtd6.innerText = qtd6Atual    
    }
}

function addGeladao(){
    contInputs++
    if(contInputs == 1){
        container1.style.display = 'flex';
    }else if(contInputs == 2){
        container2.style.display = 'flex';
    }else if(contInputs == 3){
        container3.style.display = 'flex';
    }else if(contInputs == 4){
        container4.style.display = 'flex';
    }else if(contInputs == 5){
        container5.style.display = 'flex';
    }
    else if(contInputs == 6){
        container6.style.display = 'flex';
    }

}

function apagar(index){
    contInputs--
    if(index === 1){
        container1.style.display='none';
        //contInputs--;
    }else if(index === 2){
        container2.style.display='none';
        //contInputs--;
    }else if(index === 3){
        container3.style.display='none';
        //contInputs--;
    }else if(index === 4){
        container4.style.display='none';
        //contInputs--;
    }else if(index === 5){
        container5.style.display='none';
        //contInputs--;
    }else if(index === 6){
        container6.style.display='none';
        //contInputs--;
    }
    
}


