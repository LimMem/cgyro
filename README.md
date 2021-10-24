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
$ npm install -g cgyro
$ cgyro COMMAND
running command...
$ cgyro (-v|--version|version)
cgyro/0.0.4 darwin-x64 node-v12.20.0
$ cgyro --help [COMMAND]
USAGE
  $ cgyro COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cgyro create-cli [APPNAME]`](#cgyro-create-cli-appname)
* [`cgyro hello [FILE]`](#cgyro-hello-file)
* [`cgyro help [COMMAND]`](#cgyro-help-command)

## `cgyro create-cli [APPNAME]`

开发命令行工具模板工程

```
USAGE
  $ cgyro create-cli [APPNAME]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ cgyro-cli create name
```

_See code: [src/commands/create-cli.ts](https://github.com/LimMem/gyro/blob/v0.0.4/src/commands/create-cli.ts)_

## `cgyro hello [FILE]`

describe the command here

```
USAGE
  $ cgyro hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ cgyro hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/LimMem/gyro/blob/v0.0.4/src/commands/hello.ts)_

## `cgyro help [COMMAND]`

display help for cgyro

```
USAGE
  $ cgyro help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_
<!-- commandsstop -->
