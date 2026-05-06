const player1 = {
    nome: "Mario",
    velocidade: 4,
    manobrilidade: 3,
    poder: 3,
    pontos: 0,
};

const player2 = {
    nome: "Luigi",
    velocidade: 3,
    manobrilidade: 4,
    poder: 4,
    pontos: 0,
};

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
};

async function main() {
    console.log("Bem-vindo ao Mario Kart!");
}

main();