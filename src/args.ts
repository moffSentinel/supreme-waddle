import path from "path";
import yargs from "yargs/yargs";

export const args = yargs(process.argv.slice(2))
  .option({
    cwd: { type: "string", describe: "Project root folder" },
    owner: { type: "string", describe: "Project owner", demandOption: true },
    project: { type: "string", describe: "Project name", demandOption: true },
    token: { type: "string", describe: "GITHUB token", demandOption: true },
  })
  .parseSync();

export const WORKSPACE_FOLDER = args.cwd ?? process.cwd();
export const GITHUB_TOKEN = args.token;
export const PACKAGES_FOLDER = path.join(WORKSPACE_FOLDER, "packages");
export const GITHUB_OWNER = args.owner;
export const GITHUB_PROJECT_NAME = args.project;
