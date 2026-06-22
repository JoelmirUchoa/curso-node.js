import chalk from 'chalk';

const mainPrompt = {
    name: "select",
    description: chalk.blue.bgBlack.bold("Selecione uma opção(1-qr code, 2-password, 3-sair):"),
    pattern: /^[1-3]+$/,
    message: chalk.red("Opção inválida, escolha entre 1, 2 ou 3"),
    // O required é para garantir que o usuário não deixe a resposta em branco, ou seja, ele precisa responder algo para prosseguir
    required: true,
   //ype: "string", 
}

export default mainPrompt;