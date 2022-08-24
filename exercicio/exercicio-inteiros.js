var somaMultiplos = (a, b) => {
    var resultado = 0;
    for (let i = 0; i < 1000; i++) {
        if(i % a == 0 || i % b == 0){
            resultado += i;
        }
    }
    console.log(resultado)
    return resultado
}

module.exports = {somaMultiplos}

