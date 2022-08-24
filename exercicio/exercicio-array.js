var indiceMaior = (array) => {
    var maiorIndice = Math.max.apply(null, array)
    return array.indexOf(maiorIndice)
}

var indiceMenor = (array) => {
    var menorIndice = Math.min.apply(null, array)
    return array.indexOf(menorIndice)
}

var valorMaior = (num) => {
    return Math.max.apply(null,num)
}

var valorMenor = (num) => {
    return Math.min.apply(null,num)
}

module.exports = {indiceMaior, indiceMenor, valorMaior, valorMenor}
