import { CommandParser } from './command-parser';
import { Command } from './commands/command.interface';

type CommandCollection = Record<string, Command>;

export class CLIApplication {
  private commands: CommandCollection = {};

  constructor(
    private readonly defaultCommand = '--help'
  ) {}

  public registerCommands(commandList: Command[]): void {
    commandList.forEach((command) => {
      if (Object.hasOwn(this.commands, command.getName())) {
        throw new Error(`Command ${command.getName} has been registered already`);
      }
      this.commands[command.getName()] = command;
    });
  }

  public getDefaultCommand (): Command | never {
    if(!this.commands[this.defaultCommand]) {
      throw new Error(`The default command ${this.defaultCommand} has been not registered.`);
    }
    return this.commands[this.defaultCommand];
  }

  public getCommand(commandName: string): Command {
    return this.commands[commandName] ?? this.getDefaultCommand();
  }

  public processCommand(parameters: string[]): void {
    const parsedCommand = CommandParser.parse(parameters);
    const [commandName] = Object.keys(parsedCommand);
    const command = this.getCommand(commandName);
    const commandArguments = parsedCommand[commandName] ?? [];
    command.execute(...commandArguments);
  }

}
