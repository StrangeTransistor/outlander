
module.exports =
{
	parserOptions:
	{
		ecmaVersion: 6,
	},

	env:
	{
		browser: true,
		node: true
	},

	rules:
	{
		/* indent: [ 2, 'tab' ], */
		'linebreak-style': [ 2, 'unix' ],
		'no-mixed-spaces-and-tabs': [ 2, 'smart-tabs' ],
		'no-trailing-spaces': 2,
		'eol-last': 2,

		 semi: [ 2, 'never' ],

		'comma-style': [ 2, 'last' ],
		'comma-spacing': [ 2, { before: false, after: true } ],

		 quotes: [ 2, 'single', { avoidEscape: true, allowTemplateLiterals: true } ],
		'quote-props': [ 2, 'consistent-as-needed' ],

		 curly: [ 2, 'all' ],
		'brace-style': [ 2, 'allman', { allowSingleLine: true } ],

		'keyword-spacing': 2,
		'block-spacing': [ 2, 'always' ],
		'object-curly-spacing': [ 2, 'always',
		{
			objectsInObjects: false,
			/* 'arraysInObjects': false */
		}],
		'key-spacing': [ 2,
		{
			beforeColon: false,
			afterColon: true,
			mode: 'minimum'
		}],

		'dot-notation': 2,
		'dot-location': [ 2, 'property' ],
		'no-whitespace-before-property': 2,
		'newline-per-chained-call': 1,

		'space-unary-ops': [ 2, { words: true, nonwords: true } ],
		'space-infix-ops': 2,

		'space-before-function-paren': [ 2, 'always' ],
		'no-spaced-func': 2,
		'arrow-spacing': [ 2, { before: true, after: true } ],

		'one-var': [ 2, 'never' ],
		'one-var-declaration-per-line': [ 2, 'always' ],
		'newline-after-var': [ 2, 'always' ],

		'newline-before-return': 2,

		'wrap-iife': [ 2, 'outside' ],

		'no-delete-var': 2,
		'no-undef': 2,
		'no-undef-init': 2,
		'no-undefined': 2,
		'no-unused-vars': 2,
		'no-cond-assign': 2,
		'no-debugger': 2,
		'no-irregular-whitespace': 2,
		'no-negated-in-lhs': 2,
		'no-return-assign': 2,
		'no-sparse-arrays': 2,
		'no-unexpected-multiline': 2,
		'no-underscore-dangle': 2,
		'no-unreachable': 2,
		'no-multi-str': 2,
		'no-nested-ternary': 2,
		'no-with': 2,
		'valid-typeof': 2,

		/* eqeqeq: 1, */
		'no-fallthrough': 1,
		'no-extra-bind': 1,
		'no-useless-call': 1,
		'no-useless-escape': 1,
		'no-ternary': 1,

		'id-length': [ 1, { min: 1, max: 18 } ],
		'max-depth': [ 1, 3 ],
		'max-len': [ 1, 80, 3 ],
		'max-params': [ 1, 3 ],
		'max-nested-callbacks': [ 1, 3 ],
		'max-statements': [ 1, 20 ],
		'max-statements-per-line': [ 1, { max: 1 } ]
	},
}
