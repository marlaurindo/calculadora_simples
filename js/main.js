var displayBuffer = "";
var numero = "";
var termos = [undefined,undefined,undefined];
var resultado = undefined;

function pressNum(num){
    numero = numero.concat(num.innerHTML);
    showDisplay(num.innerHTML);
}

function pressOperator(op){
    if(termos[1]==undefined){
        termos[0] = numero;
        termos[1] = (op.innerHTML);
        showDisplay(op.innerHTML);
        numero = "";
    }
    
}

function pressEqual(){
    if(termos[0] != undefined && termos[1] != undefined && numero != ""){
        termos[2] = numero;
        var keepreresultado;
        switch(termos[1]){
            case '+':
                resultado = Number(termos[0])+ Number(termos[2]);
                break;
            case '-':
                resultado = Number(termos[0])- Number(termos[2]);
                break;
            case '*':
                resultado = Number(termos[0])* Number(termos[2]);
                break;
            case '/':
                resultado = Number(termos[0])/ Number(termos[2]);
                break;
                
                 
        }
        keepreresultado=resultado;
        clearDisplay();
        showDisplay(resultado);
        clearMemory();
        numero = keepreresultado;
    }
    
}

function clearMemory(){
    numero = "";
    termos = [undefined,undefined,undefined];
    resultado = undefined;
}

function clearDisplay(){
    displayBuffer = "";
    var tela = document.getElementById('display');
    tela.value = displayBuffer;
}

function clearAll(){
    clearDisplay();
    clearMemory();
}

function showDisplay(conteudo){
    displayBuffer = displayBuffer.concat(conteudo);
    var tela = document.getElementById('display'); 
    tela.value = displayBuffer;
}
