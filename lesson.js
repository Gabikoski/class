function Somar(){
    let valor1 = 0;
    let valor2 = 0;
    valor1 = Number(prompt("Valor 1:"));
    valor2 = Number(prompt("Valor 2:"));
    let resultado = valor1 + valor2;

    console.log(`Soma ${valor1}+${valor2}=${resultado}`);
}

function Subtrair(){
    let valor1 = 0;
    let valor2 = 0;
    valor1 = Number(prompt("Valor 1:"));
    valor2 = Number(prompt("Valor 2:"));
    let resultado = valor1 - valor2;

    console.log(`Subtracao ${valor1}-${valor2}=${resultado}`); 
}

function Multiplicar(){
    let valor1 = 0;
    let valor2 = 0;
    valor1 = Number(prompt("Valor 1:"));
    valor2 = Number(prompt("Valor 2:"));
    let resultado = valor1 * valor2;

    console.log(`Multiplicação ${valor1}*${valor2}=${resultado}`); 
}

function Dividir(){
    let valor1 = 0;
    let valor2 = 0;
    valor1 = Number(prompt("Valor 1:"));
    valor2 = Number(prompt("Valor 2:"));
    let resultado = valor1 / valor2;

    console.log(`Divisao ${valor1}/${valor2}=${resultado}`); 
}
