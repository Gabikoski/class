function Somar(){
    let valor1 = 0;
    let valor2 = 0;
    valor1 = Number(prompt("Valor 1:"));
    valor2 = Number(prompt("Valor 2:"));
    let resultado = valor1 + valor2;

    console.log(`Soma ${valor1}+${valor2}=${resultado}`);
}