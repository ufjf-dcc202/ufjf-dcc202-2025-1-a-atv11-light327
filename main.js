import { getLista, limpaLista, adicionaNaLista } from "./lista.js";

const olItems = document.querySelector("#itens");
const pEntrada = document.querySelector('#entrada');
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");

btnLimpar.addEventListener('click', limparElementosdeLista);
btnAdicionar.addEventListener('click', adicionarItem);

function atualizarLista() {
  olItems.innerHTML = "";
  let lista = getLista();
  for (let i = 0; i < lista.length; i++) {
    const li = document.createElement('li');
    li.textContent = lista[i];
    olItems.appendChild(li);
  }
}

function limparElementosdeLista() {
    limpaLista();
    atualizarLista();
}

function adicionarItem() {
    adicionaNaLista(pEntrada.textContent);
    pEntrada.textContent = "";
    atualizarLista();
}

atualizarLista();