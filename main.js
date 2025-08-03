import { getTabuleiro, selecionaDisco } from "./discos.js";

const eH1 = document.querySelector("h1");
eH1.textContent = "Jogo - Inverter Peças";

const eTabuleiro = criaTabuleiro();
atualizaTabuleiro();
document.body.append(eTabuleiro);

function criaTabuleiro() {
  const eTabuleiro = document.createElement("div");
  eTabuleiro.classList.add("tabuleiro");
  return eTabuleiro;
}

function criaDisco(cor, posicao) {
  const novoDisco = document.createElement("div");
  novoDisco.classList.add("disco");
  novoDisco.classList.cor = cor;
  novoDisco.dataset.posicao = posicao;
  return novoDisco;
}

function cliqueDisco(evento) {
  const posicao = Number(evento.target.dataset.posicao);
  selecionaDisco(posicao);
  atualizaTabuleiro;
}

function atualizaTabuleiro() {
  eTabuleiro.innerHTML = "";
  const tabuleiro = getTabuleiro();
  for (let i = 0; i < tabuleiro.length; i++) {
    const disco = criaDisco(tabuleiro[i], i);
    eTabuleiro.append(disco);
    disco.addEventListener("click", cliqueDisco);
  }
}
