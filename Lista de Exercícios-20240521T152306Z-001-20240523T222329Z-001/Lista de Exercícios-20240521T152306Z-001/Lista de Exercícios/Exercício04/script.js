let ipTexto = document.querySelector("#ipNumero");
let h2Titulo = document.querySelector("#h2Titulo");
let ipTexto2 = document.querySelector("#ipNumero2");
let Resultado = document.querySelector("#Resultado");
let ipTexto3 = document.querySelector("#ipNumero3");
let Calcular = document.querySelector("#btCalcular");

function calcularMedias(){
    let num1 = Number(ipTexto.value);
    let num2 = Number(ipTexto2.value);
    let num3 = Number(ipTexto2.value);


    let mediaAritmetica = (num1 + num2 + num3) / 3;
    let mediaPonderada = (num1 * 3 + num2 * 2 + num3 * 5) / (3 + 2 + 5);
    let somaDasMedias = mediaAritmetica + mediaPonderada;
    let mediaDasMedias = (mediaAritmetica + mediaPonderada) / 2;
    Resultado.textContent = String(mediaDasMedias);
}

    Calcular.onclick=function(){
        calcularMedias();
     }