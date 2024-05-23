 let ipTexto = document.querySelector("#ipNumero");
let ipTexto2 = document.querySelector("#ipNumero2");
let Resultado = document.querySelector("#Resultado");
let Calcular = document.querySelector("#btResultado");

function MaiorValor(){
    let num1 = (ipTexto.value);
    let num2 = (ipTexto2.value);
    let soma =  Math.max(num1, num2);
    Resultado.textContent = String(soma);
}

Calcular.onclick=function(){
    MaiorValor()

}