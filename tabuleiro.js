const tabuleiro = ["branco", "branco", "branco", "", "preto", "preto", "preto"];
let posicaoDiscoSelecionado = null;

export function getTabuleiro() {
  return [...tabuleiro];
}

function validaMovimento(origem, destino) {
  if (
    origem < 0 ||
    origem >= tabuleiro.length ||
    destino < 0 ||
    destino >= tabuleiro.length
  ) {
    return false;
  }

  if (tabuleiro[origem] === "" || tabuleiro[destino] !== "") {
    return false;
  }

  return true;
}

function validaSelecaoOrigem(posicao) {
  if (posicao < 0 || posicao >= tabuleiro.length) {
    return false;
  }
  if (tabuleiro[posicao] === "") {
    return false;
  }

  return true;
}

function validaSelecaoDestino(posicao) {
  if (posicao < 0 || posicao >= tabuleiro.length) {
    return false;
  }
  if (tabuleiro[posicao] !== "") {
    return false;
  }

  return true;
}
