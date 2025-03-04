//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
function adicionarAmigo() {
    let list = document.getElementById('amigo');
    let nomes = list.value

    if (nomes === "") {
        alert('Por favor, insira um nome válido');
        return;
    }

    amigos.push(nomes);
    

    let lista = document.getElementById("listaAmigos");
    let item = document.createElement("ul");
    item.innerHTML = `${nomes}`;

    lista.appendChild(item);
    list.value = ""; 
}
function sortearAmigo() {
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

// Exibe o nome do amigo sorteado
let resultado = document.getElementById("resultado");
resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}
