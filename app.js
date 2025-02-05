// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if (amigo === '') {
        console.log('Por favor, inserte un nombre.');
    } else {
        amigos.push(amigo);
        console.log('Amigos actuales:', amigos);
        document.getElementById('amigo').value = '';
        mostrarListaAmigos();
    }
}

function mostrarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let amigo = document.createElement('li');
        amigo.textContent = amigos[i];
        lista.appendChild(amigo);
    }
}

function sortearAmigo() { 
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
    } else {
        let valorAleatorio = Math.floor(Math.random()* amigos.length);
        let amigoElegido = amigos[valorAleatorio];
        document.getElementById('resultado').innerHTML = 'El amigo sorteado es: ' + amigoElegido;
    }
}

