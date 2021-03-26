module.exports = {
  '*': 'prettier --plugin-search-dir=. --ignore-unknown --write',
  '*.{js,svelte}': 'eslint --ext .js,.svelte --fix',
  '*.{css,scss,svelte}': 'stylelint --fix',
};
