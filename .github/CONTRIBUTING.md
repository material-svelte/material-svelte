# Contributing to material-svelte

Hello there fellow human.
We're excited that you are considering to contribute to this project.

Contributions of all kinds are welcome. These include, but are not limited to:

- new components
- bugfixes
- tests
- documentation
- ideas

Before submitting your contribution, please take a moment and read through the following guide:

## Repo Setup

The material-svelte repo is a monorepo using `pnpm`-workspaces.

There are several directories of interest with separate purposes:

- `apps` - packages that are used to present our work (e.g. the website)
- `components` - packages that contain individual components
- `examples` - packages that demonstrate how to use `material-svelte` with specific toolchains
- `packages` - meta-packages that bundle all or several components
- `tools` - packages that provide tooling for working with or maintaining `material-svelte`

## Prepare development environment

1. Ensure you have [pnpm](https://pnpm.io/installation) installed.
2. After cloning the repository, run `pnpm install` in the root of the repository.

# Work on components

## Create a new component

1. Enter the `components`-directory
2. Run `pnpm init @material-svelte/component`
3. Provide the name of the main-component (i.e. `TimePicker`) in capitalized `CamelCase`
4. Provide the name of the component-package (i.e. `time-picker`) in `kebab-case`
5. Follow the on screen instructions

This bootstraps a component-directory with vite-, test- and storybook-integration

## Improve an existing component

1. Enter the components directory (e.g. `components/button`)
2. Run `pnpm dev` to start the dev-server which serves the development-sandbox (located in `component-directory/example/App.svelte`)
3. Open the displayed url in the browser of your choice
4. Start working on the component files in `component-directory/src`

## Improve stories of an existing component

1. Enter the repo-root-directory
2. Run `pnpm storybook`
3. Start working on the component stories in `component-directory/stories`

# Pull requests

- Checkout a feature-branch from a base branch (e.g. `main`) and merge back against that branch
- If adding new features:
  - Consider opening a feature-request issue before investing alot of time
  - Add accompanying stories
  - Add accompanying tests
- Please mark your PR as `Draft` if you're still working on it
- Please ensure a tidy, linear commit-history and rebase your feature-branch before marking it as `Ready`
- Commits must be signed-off for [DCO](https://probot.github.io/apps/dco/)
- Commit messages must follow the [commit message convention](./COMMIT_CONVENTION.md) so that changelogs can be automatically generated. Commit messages are automatically validated before commit (by commit-hooks) and in the PR-pipeline
- Code-style and -formatting is automatically applied and verified before commit (by commit-hooks) and in the PR-pipeline

# License

By contributing to `material-svelte`, you agree that your contributions will be licensed under its [MIT license](../LICENSE.md)
