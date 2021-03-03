const ensure = require('@commitlint/ensure');
const { default: message } = require('@commitlint/message');

module.exports = {
  rules: {
    'scope-empty': (parsed, when, value) => {
      value = value || [];
      const negated = when === 'always';
      const notEmpty = ensure.notEmpty(parsed.scope || '');
      const isException = value.includes(parsed.type);
      return [
        negated ? !notEmpty || isException : notEmpty || isException,
        message(['scope', negated ? 'must' : 'may not', 'be empty']),
      ];
    },
  },
};
