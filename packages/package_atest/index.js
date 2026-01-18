import { program } from 'commander';
import spawn from 'cross-spawn';

program
  .command('init')
  .description('一键接入：为项目初始化规范工具和配置')
  .option('--vscode <value>', '写入.vscode/setting.json配置')
  .argument('<string>', 'string to split')
  .action(async (cmd, options) => {
    // 在命令行输入这个命令会执行什么
    console.log('options.12=============', cmd, options)
    // if (cmd.vscode) {
    //   const configPath = path.resolve(cwd, `${PKG_NAME}.config.js`);
    // } else {
    //   // await init({
    //   //   cwd,
    //   //   checkVersionUpdate: true,
    //   // });
    // }
  });


program
  .command('commit-msg-scan')
  .description('commit message 检查: git commit 时对 commit message 进行检查')
  .action(() => {
    const result = spawn.sync('commitlint', ['-E', 'HUSKY_GIT_PARAMS'], { stdio: 'inherit' });
    console.log('result=============', result)
    if (result.status !== 0) {
      process.exit(result.status);
    }
  });

program.parse(process.argv);

// 修改加一些 去 changelog
// test
// 再来一次
