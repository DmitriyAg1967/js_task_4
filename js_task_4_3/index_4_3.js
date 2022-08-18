const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

let randomNum = Math.floor((Math.random() * 10) + 1);

async function num_entry() {
    let promise = new Promise(function (resolve, reject) {
        rl.question('Введите число от 1 до 10: ', (input) => {
            let user_num = input;
            rl.pause;
            return resolve(user_num);
        });
    });
    return await promise;
}

async function numberСhek() {
    let count = 0;
    while (true) {
        let input = await num_entry();
        let userNum = +input
        if (isNaN(userNum) || userNum < 1 || userNum > 10) {
            console.log('Неправильный ввод. ');
            continue;
        }
        count++;

        if (userNum === randomNum) {
            console.log(`Вы угадали! Число: ${randomNum}. Колличество попыток: ${+count}\n`);
            rl.close();
            break;
        }

        if (userNum > randomNum) {
            console.log(`Ваше число больше! Вы ввели: ${userNum}. Полытка № ${count}\n`);
        } else if (userNum < randomNum) {
            console.log(`Ваше число меньше! Вы ввели: ${userNum}. Полытка № ${count}\n`);
        }
    }
    rl.close();
}
numberСhek();