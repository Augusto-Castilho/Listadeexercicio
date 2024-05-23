let ipTexto = document.querySelector("#ipNumero");
let Resultado = document.querySelector("#Resultado");
let Calcular = document.querySelector("#btResultado");

function calcularReajuste(){
    let num1 = Number(ipTexto.value);
    let soma = (num1 * (1/100)) + num1;
    Resultado.textContent = String(soma);
}

Calcular.onclick=function(){
    calcularReajuste();
 }
 

