let listaDeNumeroSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);    
    campo.innerHTML = texto;    
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Acertou o numero secreto e foi necessario ${tentativas} ${palavraTentativas}`;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou')
        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'O numero secreto é menor');
    }else{
        exibirTextoNaTela('p','O numero secreto é maior');
    }
    tentativas++;

    limparTela();
}

function gerarNumeroAleatorio(){
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementoNaLista = listaDeNumeroSorteados.length;


    if(quantidadeDeElementoNaLista == numeroLimite){
        listaDeNumeroSorteados = [];
    }
    if(listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados);    
        return numeroEscolhido;
    }

}
function limparTela(){
    let chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparTela();
    mensagemInicial();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo Do Numero Secreto');
    exibirTextoNaTela('p', 'Escolha um numero de 01 a 10');
}
