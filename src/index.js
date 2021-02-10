import chalk from 'chalk';
import inquirer from 'inquirer';

import stringToDigit from './stringToDigit';

(async () => {
    const { answer } = await inquirer.prompt({
        name: 'answer',
        message: 'Answer to decode?'
    });

    console.log(`Decoded answer is: ${chalk.green(stringToDigit(answer))}`);
})();

