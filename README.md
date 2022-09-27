# ts-node-starter

The `ts-node-starter` scaffolding project is a [template repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository) which makes it easy for you to start a new Node.js project with TypeScript.

Using this template, you can build **standalone apps**, **libraries** and/or **CLI tools**. The `ts-node-starter` setup is configurable and comes with a lot of features included.

## Features

1. **Automatic changelog generation** powered by [generate-changelog](https://github.com/lob/generate-changelog)
1. **Automatic code & config formatting** powered by [Lefthook](https://github.com/evilmartians/lefthook)
1. **Automatic dependency updates** powered by [Dependabot](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates)
1. **Code coverage reports** powered by [Codecov](https://about.codecov.io/)
1. **Config formatting** powered by [Prettier](https://prettier.io/)
1. **Continuous integration pipeline** powered by [GitHub Actions workflows](https://docs.github.com/en/actions/using-workflows)
1. **Cross-platform compatibility** powered by [cross-env](https://github.com/kentcdodds/cross-env)
1. **Dependency management** powered by [yarn](https://yarnpkg.com/)
1. **Distribution pipeline** powered by [npm](https://www.npmjs.com/)
1. **Static code analysis** powered by [ESLint](https://eslint.org/)
1. **Testing & code coverage** powered by [Jest](https://jestjs.io/)
1. **Type checking** powered by [TypeScript](https://www.typescriptlang.org/)

## Usage

### Make it your own

1. Replace all occurrences of "bennycode" with your own username (or organization name)
2. Replace all occurrences of "ts-node-starter" with your project name (or repository name)
3. Start writing your code in the ["src" directory](./src)
4. Run `yarn` and be happy! 😊

### Build a standalone app

**Source Code**

If you just want to write and run a Node.js app, checkout ["src/start.ts"](./src/start.ts).

**References**

You can start your application by executing `yarn start`. If you want to debug your code, run `yarn debug` ([Debug Instructions](https://dev.to/typescripttv/debug-your-node-js-app-with-chrome-devtools-4c98)).

### Build a Library

**Source Code**

If you want to distribute your code as a Node.js library on [npm](https://www.npmjs.com/), you can have a look at ["src/index.ts"](./src/index.ts). If you build a library, I recommend to always ship an index file from where you export the code of your library for others.

**References**

In the ["package.json" file](./package.json) you will also discover a "main" property which defines the entry point to your library when it gets imported by other developers. The value of the "main" property has to point to the transpiled JavaScript code.

### Build a CLI

**Source Code**

If you want to build a CLI tool for Node.js, you can have a look at ["src/cli.ts"](./src/cli.ts).

**References**

In the ["package.json" file](./package.json) you will also discover a "bin" property which defines the executable name of your tool and the entry point to its transpiled JavaScript code.

If you don't want to publish a CLI, simply remove the "bin" property and the CLI script.

## Conventions

### Test Files

I recommend to colocate your test code with your source code by naming your test files `*.test.ts`.

### Changelog Generation

The automatic changelog generation is based on [Semantic Commit Messages](https://sparkbox.com/foundry/semantic_commit_messages). Simply use the suggested prefixes in your commit messages to make use of it. For example, if you commit a new feature use the "feat" prefix:

**Commit Message**

> feat: My new feature

## Important Refactorings

- Replaced [husky](https://github.com/typicode/husky) with [Lefthook](https://github.com/evilmartians/lefthook) (https://github.com/bennycode/ts-node-starter/commit/9c4161509acf49e56042383c9ea340f68f248582)
- Replaced [action-dependabot-auto-merge](https://github.com/ahmadnassri/action-dependabot-auto-merge) with [Dependabot](https://github.com/dependabot) & [GitHub CLI](https://cli.github.com/) (https://github.com/bennycode/ts-node-starter/commit/86d5696113c2fb4907a1666e25d1b72d698b06a5)
- Replaced [Jasmine](https://jasmine.github.io/) with [Jest](https://jestjs.io/) (https://github.com/bennycode/ts-node-starter/commit/41e9b42bb5b7ca364dbbabf1104955090003d1be)
- Replaced [EditorConfig](https://editorconfig.org/) with [Prettier](https://prettier.io/) (https://github.com/bennycode/ts-node-starter/commit/2e24f7be5f427c26d6cc8281438a6398a211b75c)

## Contributors

[![Benny Neugebauer on Stack Exchange][stack_exchange_bennycode_badge]][stack_exchange_bennycode_url]

[![Panayiotis Lipiridis on Stack Exchange][stack_exchange_lipis_badge]][stack_exchange_lipis_url]

[stack_exchange_bennycode_badge]: https://stackexchange.com/users/flair/203782.png?theme=default
[stack_exchange_bennycode_url]: https://stackexchange.com/users/203782/benny-neugebauer?tab=accounts
[stack_exchange_lipis_badge]: https://stackexchange.com/users/flair/5282.png?theme=default
[stack_exchange_lipis_url]: https://stackexchange.com/users/5282/lipis?tab=accounts
