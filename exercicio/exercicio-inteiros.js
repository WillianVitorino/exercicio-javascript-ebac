var a = 5, b = 7, x = 0;

for (let i = 0; i < 1000; i++) {
    if(i % a == 0 || i % b == 0){
        x += i;
        console.log(i);    
    }
}

console.log("-------------------------------------");
console.log(`Soma dos múltiplos ${a} e ${b} menores que 1000 é ` + x);
console.log("-------------------------------------");
