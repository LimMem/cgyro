gyro
====

命令号工具

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/gyro.svg)](https://npmjs.org/package/gyro)
[![CircleCI](https://circleci.com/gh/LimMem/gyro/tree/master.svg?style=shield)](https://circleci.com/gh/LimMem/gyro/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/LimMem/gyro?branch=master&svg=true)](https://ci.appveyor.com/project/LimMem/gyro/branch/master)
[![Downloads/week](https://img.shields.io/npm/dw/gyro.svg)](https://npmjs.org/package/gyro)
[![License](https://img.shields.io/npm/l/gyro.svg)](https://github.com/LimMem/gyro/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g gyro
$ gyro COMMAND
running command...
$ gyro (-v|--version|version)
gyro/0.0.1 darwin-x64 node-v12.20.0
$ gyro --help [COMMAND]
USAGE
  $ gyro COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`gyro create-cli [APPNAME]`](#gyro-create-cli-appname)
* [`gyro hello [FILE]`](#gyro-hello-file)
* [`gyro help [COMMAND]`](#gyro-help-command)

## `gyro create-cli [APPNAME]`

开发命令行工具模板工程

```
USAGE
  $ gyro create-cli [APPNAME]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ gyro-cli create cli-name
```

_See code: [src/commands/create-cli.ts](https://github.com/LimMem/gyro/blob/v0.0.1/src/commands/create-cli.ts)_

## `gyro hello [FILE]`

describe the command here

```
USAGE
  $ gyro hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ gyro hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/LimMem/gyro/blob/v0.0.1/src/commands/hello.ts)_

## `gyro help [COMMAND]`

display help for gyro

```
USAGE
  $ gyro help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_
<!-- commandsstop -->
