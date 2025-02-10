var media;
var nota1 = 7;
var nota2 = 5;
var nota3 = 7;

media = (nota1 + nota2 + nota3)/3;

if(media >= 7){
    console.log('Aprovado!');
    console.log('Média =',media.toFixed(2));
    
}else if (media <7 ){
    console.log('Reprovado!');
    console.log('Média =',media.toFixed(2));
   
}
console.log('Nota 1:', nota1 );
console.log('Nota 2:', nota2 );
console.log('Nota 3:', nota3 );

let notas = [nota1, nota2, nota3];


let maior = notas[0];
let menor = notas[0];

let i = 1;
while (i < notas.length) {
    if (notas[i] > maior) {
        maior = notas[i];
    }
    if (notas[i] < menor) {
        menor = notas[i];
    }
    i++;
}


console.log(`Maior nota: ${maior}`);
console.log(`Menor nota: ${menor}`);


