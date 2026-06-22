import chalk from 'chalk';
import qr from 'qrcode-terminal';

async function handle(err, result) {
    if (err) {
        console.log("error na aplicação");
        return;
    }

    const isSmall = result.type == "2";
    qr.generate(result.Link, { small: isSmall }, (qrcode) =>{
        console.log(chalk.green('QR Code gerado com sucesso:'));
        console.log(qrcode);
    });

}

export default handle;