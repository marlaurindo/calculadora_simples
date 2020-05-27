/* Inicio funções calculadora */

var q = 10;
var w = 5;
var conta = "+";

function calculadora(q,w,conta){
    if (conta === "+"){
        return q + w;
    }else if(conta === "-"){
        return q - w;
    }else if (conta === "*"){
        return q * w;
    }else if (conta === "/"){
        return q / w;
    }else{
        document.write("<h1> Não foi possivel calcular .</h1>");
    }
}

document.write("<h1>" +calculadora(q,w,conta) + "</h1>")