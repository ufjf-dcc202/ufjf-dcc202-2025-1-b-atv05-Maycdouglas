const tabuleiro = ["branco", "branco", "branco", "", "preto", "preto", "preto"];
let posicaoDiscoSelecionado = null;

export function getTabuleiro() {
  return [...tabuleiro];
}

export function selecionaDisco(posicao) {
  if (posicaoDiscoSelecionado == null) {
    if (!validaSelecaoOrigem(posicao)) {
      console.log(`Seleção inválida na posição: ${posicao}`);
      return;
    }
    posicaoDiscoSelecionado = posicao;
    console.log(`Disco selecionado na posição: ${posicao}`);
  } else {
    if (!validaSelecaoDestino(posicao)) {
      console.log(`Movimento inválido para a posição: ${posicao}`);
      return;
    }
    if (posicao === posicaoDiscoSelecionado) {
      console.log(`Disco na posição ${posicao} já está selecionado.`);
      posicaoDiscoSelecionado = null;
      return;
    }
    mover(posicaoDiscoSelecionado, posicao);
    console.log(`Disco movido de ${posicaoDiscoSelecionado} para ${posicao}`);
    posicaoDiscoSelecionado = null;
  }
}

function mover(origem, destino) {
  if (!validaMovimento(origem, destino)) {
    console.error(`Movimento inválido de ${origem} para ${destino}`);
    return;
  }

  tabuleiro[destino] = tabuleiro[origem];
  tabuleiro[origem] = "";
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
