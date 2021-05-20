## Git Commit Message Convention

> This is adapted from [Angular's commit convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular).

#### TL;DR:

Messages must match the following structure:

```
type(scope): message
```

Valid types are:

- `chore`
- `ci`
- `docs`
- `feat`
- `fix`
- `perf`
- `refactor`
- `test`

Names of packages within the pnpm-workspace are applicable for `scope` (i.e. `@material-svelte/button`)

For more details refer to the [commitlint configuration](../.commitlintrc.js)

#### Examples

Let's assume you implemented a new feature for the `Button`-Component, which is contained in it's own package `@material-svelte/button`.

A proper commit-message would look like this:

```
feat(@material-svelte/button): add coffee-making functionality
```

This commit then automatically appears under "Features" header within the `CHANGELOG.md`.

Now you found a bug in the `Checkbox`-Component, so you fix it and provide a PR.

An appropriate commit-message would look like this:

```
fix(@material-svelte/checkbox): brew correct brand of coffee
```

This commit then automatically appears under the "Bug Fixes" header within the `CHANGELOG.md`.

### Type

If the prefix is `feat`, `fix` or `perf`, it will appear in the changelog.

Suggested prefixes for non-changelog related tasks are `docs`, `chore`, `refactor`, and `test`.

However, if there is any [BREAKING CHANGE](#footer), the commit will always appear in the changelog.

### Scope

The scope should be a specific workspace-package (i.e. `@material-svelte/button`) or one of the scopes in the [configuration](../.commitlintrc.js)

### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.
