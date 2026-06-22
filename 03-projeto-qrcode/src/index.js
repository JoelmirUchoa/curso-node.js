import prompt from 'prompt';

import mainPrompt from './prompts/prompt-main.js';
import createQRCode from './services/qr-code/create.js';
import createPassword from './services/password/create.js';

async function main() {
    prompt.get(mainPrompt, async (err, choose) => {
        if (choose.select === "1") await createQRCode();
        if (choose.select === "2") await createPassword();
        if (choose.select === "3") console.log("Você selecionou a opção 3: Sair"); 
    });
    prompt.start();
}

main();