module.exports = {
  '*': 'prettier --plugin-search-dir=. --ignore-unknown --write',
  '*.js': 'eslint --ext .js --fix',
};
