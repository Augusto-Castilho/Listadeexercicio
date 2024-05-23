function retornarProduto() {
    var codigo = document.getElementById("codigo").value;
    var produto;

    if (codigo === "001") {
        produto = "Parafuso";
    } else if (codigo === "002") {
        produto = "Porca";
    } else if (codigo === "003") {
        produto = "Prego";
    } else {
        produto = "Diversos";
    }

    document.getElementById("resultado").innerHTML = "Produto: " + produto;
}