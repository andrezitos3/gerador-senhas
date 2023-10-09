//console.log("hello world");

//console.log("teste de integração");

const crypto = require("crypto");

// "--use-numbers", "--use-uppercase", "--use-lowercase", "--use-symbols"

// armazenando o tamanho da senha desejada pelo usuário
const tamanhoSenha = process.argv[2];

// criando a senha
let senha = '';

if (tamanhoSenha === undefined || isNaN(tamanhoSenha) || tamanhoSenha[0] == 0 ||  tamanhoSenha < 0) {

    let msgError = 'Uso: node script.js <tamanho> [--use-numbers] [--use-uppercase] [--use-lowercase] [--use-symbols]';

    //for (i = 0; i < msgError.length; i++){
    //    console.log('-');
    //}

    console.log(msgError);

    process.exit(1);
}

validacaoArg();

// definindo os métodos

function getRandomChar(str){
    // gera um índice aleatório entre 0 e o comprimento da string - 1
    const indiceAleatorio = Math.floor(Math.random() * str.length);

    return str.charAt(indiceAleatorio); // retorna um caractere aleatório de str
}

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

function validacaoArg() {
    const flags = ["--use-numbers", "--use-uppercase", "--use-lowercase", "--use-symbols"];
    
    // verifica se apenas o comprimento foi dado
    if (process.argv.length < 4){
        return false;
    }

    let argsFlags = process.argv.slice(3);

    for (i = 0; i < argsFlags.length; i++){
        if (!flags.includes(argsFlags[i])){
            if (argsFlags.length > flags.length){
                console.error('args out of index');
            }
            console.error('erro. argumento inválido');
            process.exit(1);
        } else{
            //console.log('argumento válido!')
            return true;
        }
    }
}

function gerarSenha(comprimento, flags) {
    // armazenando todos os caracteres em diferentes variáveis
    const caracteresEspeciais = '!@#$%^&*()_+{}[]|;:,.<>?';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    // método que transforma as letras minúsculas em maiúsculas
    const letrasMaiusculas = letrasMinusculas.toUpperCase();
    const numeros = '0123456789';

    // juntando todos os caracteres em uma string só 
    const caracteres = caracteresEspeciais + letrasMinusculas + letrasMaiusculas + numeros;

    if (process.argv.length == 3){

        for (i = 0; i < comprimento; i++){
            senha += getRandomChar(caracteres);
        }

        return shuffleString(senha);
    } else {
        
        // objeto pra armazenar as flags, um valor falso e a variável correspondente
        objFlags = {
            num: [false, numeros],
            upp: [false, letrasMaiusculas],
            low: [false, letrasMinusculas],
            symb: [false, caracteresEspeciais]
        }

        // verificando se a flag corresponde ao argumento passado na função gerarSenha
        for (i = 0; i < flags.length; i++){
            if (flags[i] === "--use-numbers"){
                objFlags.num = true;
            }
            if (flags[i] === "--use-uppercase"){
                objFlags.upp = true;
            }
            if (flags[i] === "--use-lowercase"){
                objFlags.low = true;
            }
            if (flags[i] === "--use-symbols"){
                objFlags.symb = true;
            }
        }
    }
}
console.log('senha gerada: ' + gerarSenha(tamanhoSenha, argsFlags));
if (tamanhoSenha < 10){
    console.log("Atenção! Senhas com mais caracteres possuem mais segurança!");
}

