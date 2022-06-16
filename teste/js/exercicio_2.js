function comtarCaracteres() {
    var vFrase = $("#texte").val().split(" ");
    var maiorCaracteres = 0;
    var retorno = '';

    for (i = 0; i < vFrase.length; i++) {
        if (vFrase[i].length > maiorCaracteres){
            maiorCaracteres = vFrase[i].length;
            retorno = vFrase[i];
        }
    }
    $("#retorno").html(retorno);
}