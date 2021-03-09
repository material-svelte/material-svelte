module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'footer-leading-blank': [2, 'always'],
    'type-enum': [
      2,
      'always',
      [
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'release',
        'repo',
        'revert',
      ],
    ],
    'scope-empty': [2, 'never', ['ci', 'repo']],
    'scope-enum': [
      2,
      'always',
      [
        '.gitignore',
        'commitlint',
        'eslint',
        'package.json',
        'pnpm-workspace.yaml',
        'prettier',
        'semantic-release',
      ],
    ],
  },
  plugins: ['scope-empty-exceptions', 'workspace-scopes'],
};
