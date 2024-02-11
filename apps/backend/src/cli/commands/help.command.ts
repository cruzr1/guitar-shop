import chalk from 'chalk';
import { Command } from './command.interface';

export class HelpCommand implements Command {
  public getName(): string {
    return '--help';
  }

  public async execute(): Promise<void> {
    console.info(`
      ${chalk.blue.bold('Программа для подготовки данных для REST API сервера.')}
          ${chalk.green('Пример:')}
              ${chalk.yellow('cli.js --<command> [--arguments]')}
          ${chalk.magenta.underline('Команды:')}
              ${chalk.white.italic('--help:')}                              ${chalk.bgGray('# печатает этот текст')}
              ${chalk.white.italic('--generate <n> <connection string>:')}  ${chalk.cyan('# генерирует')} ${chalk.bgMagenta('<n>')} ${chalk.cyan('тестовых карточек, и записывает их в базу данных по пути')} ${chalk.bgGreenBright('<connection string>')}
    `);
  }
}
