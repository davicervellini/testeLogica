function listarNumeros() {
    var vValor = parseInt($("#texte").val());
    var retorno = "";

    for (i = 1; i <= vValor; i++) {
        if(i == 3){
            retorno += "HELLO<br>";
        }

        if(i == 5){
            retorno += "WORLD<br>";
        }

        if(i != 3 && i != 5){
            retorno += String(i) + "<br>";
        }
    }
    $("#retorno").html(retorno);
}