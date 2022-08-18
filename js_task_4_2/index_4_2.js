const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

let count = 0;
let randomNum = Math.floor((Math.random() * 10) + 1);

function num_entry(numberСhek) {
    rl.question('Введите число от 1 до 10: ', (input) => {
        let user_num = +input;
        numberСhek(user_num);
    });

    function numberСhek(user_num) {
        if (isNaN(user_num) || user_num < 1 || user_num > 10) {
            console.log('Неправильный ввод. ');
        }
        count++;

        if (user_num === randomNum) {
            console.log(`Вы угадали! Число: ${randomNum}. Колличество попыток: ${+count}\n`);
            rl.close();
            return;
        }

        if (user_num > randomNum) {
            console.log(`Ваше число больше! Вы ввели: ${user_num}. Полытка № ${count}\n`);
        } else if (user_num < randomNum) {
            console.log(`Ваше число меньше! Вы ввели: ${user_num}. Полытка № ${count}\n`);
        }
        rl.pause();
        num_entry();
    }
}
num_entry(input);