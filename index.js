/*

function NomeAcao(){
}


*/
function CalcularMediaSemestral() {
    /*declaracao de variavel*/
    var nomeAluno = "";
    var nota1Bim = 0;
    var nota2Bim = 0;
    /*solicitar carregar valores*/
    nomeAluno = prompt("Informe nome do aluno:");
    nota1Bim = Number(prompt("Informe nota 1:"));
    nota2Bim = Number(prompt("Informe nota 2:"));
    /*regras - calculo*/
    var somaNotas = nota1Bim + nota2Bim;
    var media = somaNotas / 2;
    /*mostrar valores*/
    console.log("Nome:" + nomeAluno);
    console.log("Nota 1 bim:" + nota1Bim);
    console.log("Nota 2 bim:" + nota2Bim);
    console.log("Media:" + media);
    console.log(`A média do ${nomeAluno} para as notas ${nota1Bim} e ${nota2Bim} é ${media}`);
}