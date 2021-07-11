/*
    Este arquivo contém métodos para gerenciamento de uma lista de livros via DOM.
    Possível através de um formulário levantar livros para uma lista,
    usar um botão para acessar o link fornecido e deletar o livro da lista.

	Eduardo Pereira de ALmeida
	09/07/2021
*/

let controleId = 0;

function checkEmptyList() {
    if (!document.querySelector('ul').childNodes.length) {
        document.querySelector('ul').innerHTML = 'Adicione um livro abaixo!';
    }
}

checkEmptyList();


document.getElementsByClassName('save')[0].onclick = function () {
    if (!verificarCamposVazios()) {
        alert('Campos não preenchidos!');
    } else {
        adicionarLivro();
    }
}

document.getElementsByClassName('save')[0].setAttribute('type', 'button');


function verificarCamposVazios() {
    let inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.length < 1) {
            return false;
        }
    }
    return true;
}

function adicionarLivro() {
    let inputs = document.getElementsByTagName('input');
    let livro = inputs[0].value + " - " + inputs[1].value;
    let novoLivro = document.createElement('li');
    novoLivro.innerHTML = '<p>' + livro + '</p><div style=" margin-left: auto">' +
        '<button class="btn-buy" onclick="window.open(\'' + inputs[2].value + '\', \'_blank\');">' +
        '<i class="material-icons">shopping_cart</i></button>' +
        '<button id="btn' + controleId + '" class="delete" onclick="deletarLivro(this.id);">' +
        '<i class="material-icons">delete</i></button></div>';
    if (inputs[3].checked) {
        novoLivro.classList.add('lido');
    }
    novoLivro.id = "livro" + controleId;
    controleId++;
    document.querySelector('ul').prepend(novoLivro);
}

function deletarLivro(child) {
    let filho = document.getElementById(child);
    let pai = filho.parentNode.parentNode.id;
    let node = document.getElementById(pai);
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
}

