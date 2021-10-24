import { Command, flags } from '@oclif/command'
import { cwd } from '../utils';
import { downloadGitRepo } from '../utils/down'

export default class CreateCLI extends Command {
  static description = '开发命令行工具模板工程'

  static examples = [
    `$ gyro-cli create name`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    name: flags.string({char: 'n', description: 'name to print'}),
    force: flags.boolean({char: 'f'}),
  }

  static args = [
    { name: 'appName' }
  ]

  async run() {
    const { args } = this.parse(CreateCLI);
    const { appName } = args;
    await downloadGitRepo({
      targetDir: `${cwd}/${appName}`,
      projectInfo: {},
      projectName: appName,
      gitRepo: 'https://github.com:LimMem/mobile-app-cli-template',
      gitBranch: 'master',
      options: {
        appName: appName
      }
    });
  }
}
