// Переменные let b и const c не будут видны после завершения цикла, поскольку они имеют блочную область видимости и доступны только внутри блока цикла.
// Переменная var a будет видна после завершения цикла, поскольку переменные, объявленные с var, имеют функциональную или глобальную область видимости и доступны вне блока цикла.

for (let i=0; i<1; i++){
    var a=1;
    let b=2;
    const c=3;
}

console.log(a);
console.log(b);
console.log(c);

