let ipTexto = document.querySelector("#ipNumero");
let h2Titulo = document.querySelector("#h2Titulo");
let ipTexto2 = document.querySelector("#ipNumero2");
let Resultado = document.querySelector("#Resultado");
let Calcular = document.querySelector("#btCalcular");



function calcularSoma(){
    let num1 = Number(ipTexto.value);
    let num2 = Number(ipTexto2.value);
    let soma = num1 * num2;
    Resultado.textContent = String(soma);

    
 }
 Calcular.onclick=function(){
    calcularSoma();
 }
 