module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-config-prettier',
  ],
  rules: {
    'max-nesting-depth': 2,
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute', 'class', 'id'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'no-descending-specificity': null,
    'property-no-vendor-prefix': null,
    // see: https://github.com/10up/stylelint-config/issues/8
    // and: https://github.com/stylelint/stylelint/issues/2600#issuecomment-304978387
    // TODO build a stylelint pattern for postcss-mixins
    'scss/at-mixin-pattern': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['define-mixin', 'breakpoint'],
      },
    ],
  },
};
