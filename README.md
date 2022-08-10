# todo-parser

Extracts todo and create github issues

## useage

from command line: `yarn start` or `ts-node todo-parser.ts`
from vs code: F5 (while the `Create ToDo's` profile is active)

```bash
Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
  --cwd      Project root folder                                        [string]
  --owner    Project owner                                   [string] [required]
  --project  Project name                                    [string] [required]
  --token    GITHUB token                                    [string] [required]
```

> NOTE! required options above, need to be provided.
> While running from vs-code replace the value `yourTokenHere` from the [launch.json](.vscode\launch.json) with your token.

## TODO

- ~~find all project / files~~
- ~~extract all ToDo's~~
- ~~convert todo to issue~~
- ~~create (update) issues on github~~
- ~~add label / tags to issues (other than TODO)~~

### Future

- Update all "non standard ToDo's", with PR

## Dependencies

- [leasot](https://github.com/pgilad/leasot#readme)
- [node-glob](https://github.com/isaacs/node-glob#readme)
- [ts-node](https://github.com/TypeStrong/ts-node)
- [typescript](typescriptlang.org)
- [yargs](https://github.com/yargs/yargs)
