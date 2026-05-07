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

async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "RETA";  
            break;
        case random < 0.66:
            result = "CURVA";  
            break;
        default:
            result = "CONFRONTO";
    }
return result;
}

async function playRaceEngine(character1, character2) {
    for (let round = 0; round < 5; round++) {
        console.log(`🏁 Rodada ${round + 1}`);

        //Sorteio do bloco
        let block = await getRandomBlock();
        console.log(`Bloco sorteado: ${block}`);
    }

    //rolar o dado
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //teste de habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "RETA") {
        diceResult1 = diceResult1 + character1.velocidade;
        diceResult2 = diceResult2 + character2.velocidade;
    }
    if (block === "CURVA") {
        diceResult1 = diceResult1 + character1.manobrilidade;
        diceResult2 = diceResult2 + character2.manobrilidade;
    }
    if (block === "CONFRONTO") {
        diceResult1 = diceResult1 + character1.poder;
        diceResult2 = diceResult2 + character2.poder;
    }
}



(async function main() {
    console.log(`🏁🚨Corrida entre ${player1.nome} e ${player2.nome} começando...`
    );

    await playRaceEngine(player1, player2);
})();

