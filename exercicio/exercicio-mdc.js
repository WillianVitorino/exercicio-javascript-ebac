var calculoMdc = (aMdc, bMdc, resultado) => {
    var resultado;
    while (bMdc != 0){
        temp = aMdc % bMdc;
        aMdc = bMdc;
        bMdc = temp;
    }
    return resultado;

}

module.exports = {calculoMdc}
