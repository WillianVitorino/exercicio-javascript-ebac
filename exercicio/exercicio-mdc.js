var aMdc = 58, bMdc = 6, temp;

while (bMdc != 0){
    temp = aMdc % bMdc;
    aMdc = bMdc;
    bMdc = temp;
    console.log(temp)    
}

console.log("-------------------------------------");
console.log("O MDC é " + aMdc); 
console.log("-------------------------------------");
