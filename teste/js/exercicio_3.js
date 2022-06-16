function somaTotal() {
    var vValor = $("#texte").val();
    var retorno = 0;

    for (i = 0; i < vValor.length; i++) {
        retorno = retorno + parseInt(vValor[i]);
    }
    $("#retorno").html(retorno);
}