let ipTexto = document.querySelector("#valor");
let ipTexto2 = document.querySelector("#valor1");
let ipTexto3 = document.querySelector("#valor2");
let ipTexto4 = document.querySelector("#valor3");
let Resultado = document.querySelector("#Resultado");
let Calcular = document.querySelector("#btResultado");

function Menorvalor(){
    let num1 = (ipTexto.value);
    let num2 =  (ipTexto2.value);
    let num3 = (ipTexto3.value);
    let num4 = (ipTexto4.value);
    let mostrar = Math.min (num1,num2,num3,num4);
    Resultado.textContent = String(mostrar);
}
Calcular.onclick=function(){
Menorvalor()
}