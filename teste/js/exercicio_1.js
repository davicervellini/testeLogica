function removeVogaisString() {
    var remove = $("#texte").val();
    $("#retorno").html(remove.replace(/[aeiouà-ú]/gi, ''));
}