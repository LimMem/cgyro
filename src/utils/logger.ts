import chalk from 'chalk'
const figlet = require('figlet');
const clear = require("cli-clear");


export const warn = (text: string) => {
  console.log(chalk.yellow(`\n⚠️ ${text}\n`))
}

export const info = (text: string) => {
  console.log(chalk.cyan(`\n${text}\n`))
}

export const error = (text: string) => {
  console.log(chalk.bgRed(`\n❎ ${text}\n`))
}

export const success = (text: string) => {
  console.log(chalk.green(`\n🎉 ${text}\n`))
}

export const finish = (text: string, msg: string) => {
  clear();
  success(msg);
  figlet(text, function(err: Error, data: any) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
  });
};
