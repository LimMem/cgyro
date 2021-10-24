import download from 'download-git-repo';
import inquirer from 'inquirer';
import { spinner } from './spinner';
import {
  error,
  success,
  cwd
} from './index'
import { checkProjectExist, tplDir } from './file';
import { finish } from './logger';

const validationInfo = async ({
  targetDir,
  projectInfo,
  projectName,
  gitRepo,
  gitBranch = 'master'
}: any) => {
  const isExit = await checkProjectExist(targetDir);
  if (isExit) {
    error('文件夹已存在，请切换到其他目录或者手动删除当前目录后再试');
    return false;
  }

  if (!gitRepo) {
    error('仓库地址不能为空, 请设置仓库地址');
    return false;
  }

  if (!projectName) {
    error('项目名称不能为空, 请设置项目名称');
    return false;
  }


  return {
    targetDir,
    projectInfo,
    projectName,
    gitRepo,
    gitBranch
  }
};

const answerList = [
  {
    type: 'input',
    name: 'author',
    message: '请输入作者名称'
  },
  {
    type: 'input',
    name: 'version',
    message: '请输入版本号(0.1.0)'
  },
  {
    type: 'input',
    name: 'description',
    message: '请输入项目简介'
  },
];


export const downloadGitRepo = async ({
  targetDir,
  projectInfo,
  projectName,
  gitRepo,
  gitBranch,
  options
}: any) => {

  return new Promise(async (resolve, reject) => {
    try {
      const validate = await validationInfo({
        targetDir,
        projectInfo,
        projectName,
        gitRepo,
        gitBranch,
      });

      if (validate !== false) {
        inquirer.prompt(answerList).then((answers) => {
          const sp = spinner.start(`正在下载：${gitRepo}#${gitBranch}`)
          download(`${gitRepo}#${gitBranch}`, targetDir, { clone: true }, (err: any) => {
            sp.stop();
            if (err) {
              error(`下载失败: ${err?.message || 'unkown'}`);
              reject(err);
              return;
            }
            const path = targetDir;
            Object.assign(options, answers);
            tplDir(path, options);
            finish('gyro', '初始化模板成功');
            resolve(path);
          });
        });
      } else {
        process.exit(0);
      }
    } catch (error) {
      reject(error);
    }

  });
};
