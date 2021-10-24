#!/usr/bin/env node
const exec = require('child_process').exec;
const fs = require('fs');
const chalk = require('chalk');
const inquirer = require('inquirer');

const packagePath = `${process.cwd()}/package.json`;

const info = (text) => {
  console.log(chalk.cyan(`\n${text}\n`))
}

const error = (text) => {
  console.log(chalk.bgRed(`\n❎ ${text}\n`))
}

const success = (text) => {
  console.log(chalk.green(`\n🎉 ${text}\n`))
}

const incrementVersion = async () => {
  const pkg = getPkgInfo();
  const version = pkg.version;
  const vers = version.split('.');
  const answer = {
    type: 'list',
    name: 'v',
    message: `\n请选择版本号( 按“上、下”键切换，按“enter”键确认选择):`,
    choices: getTargetVersions(vers),
  };
  const { v } = await inquirer.prompt(answer);
  setPkgInfo({ version: v });
};


const getPkgInfo = () => {
  if (!fs.existsSync(packagePath)) {
    error('package.json文件不存在');
    process.exit(0);
  }
  try {
    return require(packagePath);
  } catch (error) {
    error('package.json文件内容不正确');
    process.exit(0);
  }
};

const getTargetVersions = (vers) => {
  const target = [];
  for (let index = 0; index < vers.length; index++) {
    const v = vers[index];
    const bit = vers.length - target.length - 1;
    const version = [];
    for (let j = 0; j < vers.length; j++) {
      if (j === bit) {
        const incrBite = parseInt(vers[j]) + 1;
        version.push(incrBite);
      } else {
        version.push(vers[j]);
      }
    }
    target.push(version.join('.'));
  }
  return target;
};

const setPkgInfo = (pkg) => {
  const pkgInfo = getPkgInfo();
  try {
    const pkgContent = Object.assign(pkgInfo, pkg);
    fs.writeFileSync(packagePath, JSON.stringify(pkgContent, null, 4));
  } catch (error) {
    error('版本自增失败');
    process.exit(0);
  }
};

const start = () => {
  incrementVersion();
  exec('npm run build', function (error, stdout, stderr) {
    console.log('error', error, stdout, stderr)
    if (!error) {
      const pkgInfo = getPkgInfo();
      info('正在发布node包...');
      exec(`npm publish`, function (error, stdout, stderr) {
        console.log('error', error, stdout, stderr)
        if (!error) {
          success("发布成功");
          info('正在推送标签...');
          exec(`git tag -a V${pkgInfo.version} -m ""`, function (error, stdout, stderr) {
            console.log('error', error, stdout, stderr)
            if (!error) {
              exec("git push --tags", function (error, stdout, stderr) {
                console.log('error', error, stdout, stderr)
                if (!error) {
                  success("发布成功");
                } else {
                  error('标签推送失败,请手动执行: git push --tags');
                }
                process.exit(0);
              });
            } else {
              error('标签失败,请手动执行: git tag -a V【version】 -m 【message】');
            }
          })
        }
      })

    }
  });
};

start();
