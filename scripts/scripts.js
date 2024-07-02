let qtd = document.getElementById("qtdGeladoes")
let qtd2 = document.getElementById("qtdGeladoes2")
let qtd3 = document.getElementById("qtdGeladoes3")
let qtd4 = document.getElementById("qtdGeladoes4")
let qtd5= document.getElementById("qtdGeladoes5")
let qtd6= document.getElementById("qtdGeladoes6")
let btnMenos = document.getElementById("buttonMenos");
let containers = [
    document.getElementById("container1"),
    document.getElementById("container2"),
    document.getElementById("container3"),
    document.getElementById("container4"),
    document.getElementById("container5"),
    document.getElementById("container6")
]
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

// Função do botão de remover quantidade
function menos(index){
    //Primeiro botão menos
    if(index === 1 && qtdAtual > 0){
        qtdAtual--
        qtd.innerText = qtdAtual
    }else if(index === 2 && qtd2Atual > 0){ //Segundo botão menos
        qtd2Atual--
        qtd2.innerText = qtd2Atual
    }else if(index === 3 && qtd3Atual > 0){ //Terceiro botão menos
        qtd3Atual--
        qtd3.innerText = qtd3Atual
    }else if(index === 4 && qtd4Atual > 0){ //Quarto botão menos
        qtd4Atual--
        qtd4.innerText = qtd4Atual
    }else if(index === 5 && qtd5Atual > 0){ //Quinto botão menos
        qtd5Atual--
        qtd5.innerText = qtd5Atual
    }else if(index === 6 && qtd6Atual > 0){ //Sexto botão menos
        qtd6Atual--
        qtd6.innerText = qtd6Atual
    }
}
// Função do botão de adicionar quantidade
function mais(index){ // o index está no html
    if (index === 1){
        qtdAtual++
        // Atualiza o valor
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
    for(let i =0; i < containers.length; i++){
        //Se o conteiner estiver oculto
        if(containers[i].style.display === "none"){
        // Será exibido
            containers[i].style.display = "flex";
            break
        }
    }

}

function apagar(index){
    // Oculta o conteiner
    containers[index-1].style.display = 'none'
    // decremento do contInputs
    contInputs--;
    
    
}


