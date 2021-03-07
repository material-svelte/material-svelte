module.exports = {
  hooks: {
    'commit-msg': 'commitlint --edit $1',
    'pre-commit': 'lint-staged',
  },
};
