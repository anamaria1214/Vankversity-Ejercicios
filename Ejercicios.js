function calcularEdad(edadActual, anios){
    return edadActual+anios;
}

//let edadActual= parseInt(prompt('Ingrese su edad actual: '));
//let anios= parseInt(prompt('Ingrese en cuantos años quiere calcular su edad: '));

//console.log('En '+anios+' años tendras '+calcularEdad(edadActual, anios)+' años');

//Debería de inicializar suma en 1
function calcularFactorial(tope, suma){
    if(tope==0){
        return suma;
    }else{
        return calcularFactorial(tope-1,tope*suma);
    }
}

//let factorial= parseInt(prompt('Ingrese el número del que quiera clacular su factorial: '));
//console.log(''+factorial+'!= '+calcularFactorial(5, 1));

function numeroRandom(){
    return Math.floor(Math.random()*16)+1;
}

//console.log(numeroRandom());

function calcularDescuento(valor, descuento){
    return valor - (valor*descuento)/100;
}
console.log(calcularDescuento(80000,20));