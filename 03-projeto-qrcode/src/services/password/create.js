import chalk from 'chalk';
import handlePassword from './handle.js';

async function createPassword() {
    console.log(chalk.green("password"));
    const password = await handlePassword();
    console.log(password);
}

export default createPassword;