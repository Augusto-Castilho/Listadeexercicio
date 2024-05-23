let ipTexto = document.querySelector("#valor");
let Resultado = document.querySelector("#Resultado")
let Calcular = document.querySelector("#btResultado")

function verficar(){
    let num1 = (ipTexto.value);
    let verfi =  (num1 % 2 !== 0) 
    
    Resultado.textContent = String(verfi)

    }
Calcular.onclick=function(){
    verficar()
}