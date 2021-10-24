const fs = require("fs-extra");
const path = require("path");
import handlebars from 'handlebars';
import inquirer from 'inquirer';
import { ignoreFiles } from '.';
import {
  warn,
} from './logger'

/**
 * 从文件夹读取所有文件路径
 * @param dir 文件路径
 */
const getFilesPathWithDir = (dirPath: string) => {
  const paths: any[] = [];
  const fsSync = (dPath: string) => {
    const files = fs.readdirSync(dPath) || [];
    files.forEach((file: string) => {
      let fPath = path.join(dPath, file);
      const stat = fs.statSync(fPath);
      if (stat) {
        if (stat?.isFile()) {
          paths.push({
            file,
            path: fPath
          });
        } else {
          fsSync(fPath);
        }
      }
    });
  }
  fsSync(dirPath);
  return paths;
}

export const tplFile = ({ file, path }: any, options: any) => {
  if (ignoreFiles.includes(file)) {
    return;
  }
  const packageContent = fs.readFileSync(path, 'utf-8');
  //使用handlebars解析模板引擎
  const packageResult = handlebars.compile(packageContent)(options);
  //将解析后的结果重写到package.json文件中
  fs.writeFileSync(path, packageResult);
};

export const tplDir = (dir: string, options: any) => {
  if (!dir) {
    return;
  }
  const paths = getFilesPathWithDir(dir);
  paths.forEach(path => {
    tplFile(path, options);
  });
};

// 检查是否已经存在相同名字工程
export const checkProjectExist = async (targetDir: string) => {
  if (fs.existsSync(targetDir)) {
    const answer: any = await inquirer.prompt({
      type: 'list',
      name: 'checkExist',
      message: `\n仓库路径${targetDir}已存在，请选择`,
      choices: ['覆盖', '取消'],
    })
    if (answer?.checkExist === '覆盖') {
      warn(`删除${targetDir}...`)
      fs.removeSync(targetDir);
    } else {
      return true
    }
  }
  return false
}

