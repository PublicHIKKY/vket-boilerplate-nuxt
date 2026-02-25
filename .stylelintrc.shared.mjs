export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-rscss', 'stylelint-config-clean-order'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['/^.*/'],
      },
    ],
    'scss/dollar-variable-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep', 'global'],
      },
    ],
    'max-nesting-depth': null,
    'property-no-vendor-prefix': null,
    'selector-pseudo-element-no-unknown': null,
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'at-rule-empty-line-before': [
      'always',
      {
        ignore: ['first-nested', 'blockless-after-same-name-blockless', 'after-comment'],
        ignoreAtRules: ['else'],
        severity: 'warning',
      },
    ],
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute', 'class'],
      },
    ],
    'value-no-vendor-prefix': null,
    'selector-max-compound-selectors': 5,
    'function-no-unknown': null,
    'declaration-property-value-disallowed-list': [
      {
        '// noneを許可する': '',
        '/^border/': [],
      },
    ],
    'media-query-no-invalid': null,
  },
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
}
