// Array com os nomes dos amigos
let amigos = [];

// Função para embaralhar o array
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Função para adicionar amigo à lista
function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let resultado = document.getElementById('resultado');
    let nome = inputAmigo.value;
    
    if (nome.trim() === '') {
        alert('Por favor, digite o nome do amigo!');
        return;
    }
    
    amigos.push(nome);
    inputAmigo.value = ''; // Limpa o input
    resultado.innerHTML = ''; // Limpa o resultado anterior
}

// Função para realizar o sorteio
function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    
    if (amigos.length < 2) {
        alert('É necessário pelo menos 2 amigos para realizar o sorteio!');
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    resultado.innerHTML = amigoSorteado;
    responsiveVoice.speak(amigoSorteado, 'Brazilian Portuguese Female');
}

// Executar o sorteio
sortearAmigo();
