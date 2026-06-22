import chalk from 'chalk';

const qrCodePrompt = [
    { 
        name: 'Link',
        description: chalk.yellow('Digite o link para gerar o QR Code:'),
        //type: 'string'
    },
    {
        name: 'type',
        description: chalk.yellow('escolha o tipo de QR Code: 1 - normal ou 2 - terminal'),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic('Opção inválida, escolha entre 1 ou 2'),
        required: true,
        //type: 'list',
        //choices: ['Text', 'URL']
    }
];

export default qrCodePrompt;