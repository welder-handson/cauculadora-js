function Calculadora(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    operador = document.querySelector("input[name=opt]:checked").value;
    resultado = eval(parseInt(num1) + operador + parseInt(num2));
    document.getElementById("mostrar-resultado").innerHTML = resultado;
}
function Potencia(){
    base = document.getElementById("base").value;
    expoente = document.getElementById("expoente").value;
    resultado = parseInt(Math.pow(base, expoente));
    document.getElementById("resultado-potencia").innerHTML = resultado;
}
function Raiz(){
    raiz = document.getElementById("raiz").value;
    resultado = parseInt(Math.sqrt(raiz));
    document.getElementById("resultado-radicando").innerHTML = resultado;
}
function Area(){
    base = document.getElementById("base").value; 
    altura = document.getElementById("altura").value;
    resultado= eval(parseInt((base*altura)/2));
    document.getElementById("resultado-area").innerHTML = resultado;

}
function Bhaskara(){
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;
    delta = eval(parseInt(Math.pow(b, 2) - 4*a*c));

    x1 = eval(parseInt(( -b + Math.sqrt(delta)) /2*a));
    x2 = eval(parseInt(( -b - Math.sqrt(delta)) /2*a));
    
    document.getElementById("resultado-x1").innerHTML = x1;
    document.getElementById("resultado-x2").innerHTML = x2;
}