#!/usr/bin/env node
import { CLIApplication } from './cli/cli-application';
import { GenerateCommand} from './cli/commands/generate.command';
import { HelpCommand} from './cli/commands/help.command';

function bootstrap() {
  const cliApplication = new CLIApplication();
  cliApplication.registerCommands([
    new HelpCommand(),
    new GenerateCommand()
  ]);
  cliApplication.processCommand(process.argv);
}

bootstrap();

