let teste1 = 'isso é um teste';

function getRandomChar(str){
    // gera um índice aleatório entre 0 e o comprimento da string - 1
    const indiceAleatorio = Math.floor(Math.random() * str.length);

    return str.charAt(indiceAleatorio);
}

console.log(getRandomChar(teste1));

//shuffleString(teste1);
console.log(teste1);

let teste2 = 'segundo teste';

console.log(teste2.toUpperCase());
console.log(getRandomChar(teste2));

// vou precisar dos métodos:
// getRandomChar(); shuffleString();

function shuffleString(str){
    const chars = str.split(''); // convertendo str em um array de caracteres

    // embaralhando o array criado
    for (let i = chars.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [chars[i], chars[j]] = [chars[j], chars[i]];
    }

    // convertendo o array de caracteres de volta para uma string
    const stringEmbaralhada = chars.join('');

    return stringEmbaralhada;
}
 console.log(teste1.length);
 console.log(shuffleString(teste1));
 console.log(teste2.length);
 console.log(shuffleString(teste2));
