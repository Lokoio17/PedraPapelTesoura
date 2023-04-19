let pontuacaoPessoa = 0;
let pontuacaoMaquina = 0;
//funcao para randomizar a escolha da maquina
function escolhaComputador() {
  const escolhaM = ["Pedra", "Papel", "Tesoura"];
  return escolhaM[Math.floor(Math.random() * escolhaM.length)].toLowerCase();
}

//funcao da lógica do jogo
let jogadaM = escolhaComputador();
const rodada = (jogadaP) => {
  const jogadaAmbos = jogadaP.toLowerCase() + jogadaM;
  switch (jogadaAmbos) {
    case "pedratesoura":
      pontuacaoPessoa++;
      break;
    case "papelpedra":
      pontuacaoPessoa++;
      break;
    case "tesourapapel":
      pontuacaoPessoa++;
      break;
    case "tesourapedra":
      pontuacaoMaquina++;
      break;
    case "pedrapapel":
      pontuacaoMaquina++;
      break;
    case "papeltesoura":
      pontuacaoMaquina++;
      break;
  }
};

// funcao para resetar o score
const scoreimgM = document.getElementById("showImgM");
const scoreimgP = document.getElementById("showImgP");

const reiniciar = () => {
  pontuacaoMaquina = 0;
  pontuacaoPessoa = 0;
  resultado.innerText = "Clique na imagem referente à sua jogada";
  scoreP.innerText = `Jogador: ${pontuacaoMaquina}`;
  scoreM.innerText = `Computador: ${pontuacaoMaquina}`;
  scoreimgM.lastElementChild.remove();
  scoreimgP.lastElementChild.remove();
};
// event listeners
const resetar = document.getElementById("resetar");
resetar.addEventListener("click", reiniciar);

const pedra = document.getElementById("pedra");
const papel = document.getElementById("papel");
const tesoura = document.getElementById("tesoura");
pedra.addEventListener("click", () => {
  rodada("pedra");
  printTela("pedra");
  jogadaM = escolhaComputador();
});
papel.addEventListener("click", () => {
  rodada("papel");
  printTela("papel");
  jogadaM = escolhaComputador();
});
tesoura.addEventListener("click", () => {
  rodada("tesoura");
  printTela("tesoura");
  jogadaM = escolhaComputador();
});
// FUNCAO PARA MOSTRAR AS RESPECTIVAS JOGADAS
const printTela = (jogadaP) => {
  const scoreP = document.getElementById("scoreP");
  const scoreM = document.getElementById("scoreM");

  function naoDuplicar(qualScore, src) {
    const img = document.createElement("img");
    img.src = src;
    img.className = "showImg";
    if (qualScore.childElementCount < 2) {
      qualScore.append(img);
    } else {
      qualScore.lastElementChild.replaceWith(img);
    }
  }
  switch (jogadaP) {
    case "pedra":
      naoDuplicar(scoreimgP, "./PEDRA.PNG");
      break;
    case "papel":
      naoDuplicar(scoreimgP, "./PAPEL.PNG");
      break;
    case "tesoura":
      naoDuplicar(scoreimgP, "./TESOURA.PNG");
      break;
  }

  switch (jogadaM) {
    case "pedra":
      naoDuplicar(scoreimgM, "./PEDRA.PNG");
      break;
    case "papel":
      naoDuplicar(scoreimgM, "./PAPEL.PNG");
      break;
    case "tesoura":
      naoDuplicar(scoreimgM, "./TESOURA.PNG");
      break;
  }

  switch (jogadaP + jogadaM) {
    case "pedratesoura":
      resultado.innerText = ` Parabéns você Venceu, ${jogadaP} vence tesoura `;
      break;
    case "papelpedra":
      resultado.innerText = ` Parabéns você Venceu, ${jogadaP} vence pedra `;
      break;
    case "tesourapapel":
      resultado.innerText = ` Parabéns você Venceu, ${jogadaP} vence papel `;
      break;
    case "tesourapedra":
      resultado.innerText = ` Pedra vence ${jogadaP}, a máquina venceu boa sorte na próxima `;
      break;
    case "pedrapapel":
      resultado.innerText = ` Papel vence ${jogadaP}, a máquina venceu boa sorte na próxima `;
      break;
    case "papeltesoura":
      resultado.innerText = `Tesoura vence ${jogadaP}, a máquina venceu boa sorte na próxima`;
      break;
    default:
      resultado.innerText = "A ESCOLHAS SÃO IGUAIS, É UM EMPATE";
  }

  scoreP.innerText = `Jogador: ${pontuacaoPessoa}`;
  scoreM.innerText = `Computador: ${pontuacaoMaquina}`;
};
