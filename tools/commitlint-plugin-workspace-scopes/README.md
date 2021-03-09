# commitlint-plugin-workspace-scopes

A `commitlint` plugin to discover workspace packages as scopes.

## Installation

**pnpm**

```sh
pnpm install --dev commitlint-plugin-workspace-scopes
```

**yarn**

```sh
yarn add --dev commitlint-plugin-workspace-scopes
```

**npm**

```sh
npm install --save-dev commitlint-plugin-workspace-scopes
```

## Usage

To configure that only workspace-packages are accepted scopes:

```js
module.exports = {
  plugins: ['workspace-scopes'],
  rules: {
    'scope-enum': [2, 'always', []],
  },
};
```

To configure that workspace-packages and `codeowners` are accepted scopes:

```js
module.exports = {
  plugins: ['workspace-scopes'],
  rules: {
    'scope-enum': [2, 'always', ['codeowners']],
  },
};
```

## Examples

```
$ cat commitlint.config.js

module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['workspace-scopes'],
  rules: {
    'scope-enum': [2, 'always', ['codeowners']]
  }
}

$ tree packages

packages
├── api
├── app
└── web

$ echo "feat(api): this will succeed" | npx commitlint --verbose
⧗   input: feat(api): this will succeed
✔   found 0 problems, 0 warnings

$ echo "feat(codeowners): this will succeed" | npx commitlint --verbose
⧗   input: feat(codeowners): this will succeed
✔   found 0 problems, 0 warnings

$ echo "feat(foo): this will fail" | npx commitlint --verbose
⧗   input: feat(foo): this will fail
✖   scope must be one of [api, app, web] [scope-enum]
✖   found 1 problems, 0 warnings
```
