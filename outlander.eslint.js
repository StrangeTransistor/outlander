
module.exports =
{
	parserOptions:
	{
		ecmaVersion: 6,
	},

	rules:
	{
		// indent: [ 2, 'tab' ],
		'linebreak-style': [ 2, 'unix' ],
		'no-mixed-spaces-and-tabs': [ 2, 'smart-tabs' ],
		'no-trailing-spaces': [ 2 ],
		'eol-last': [ 2 ],

		semi:  [ 2, 'never' ],
		'comma-style': [ 2, 'last'],
		quotes: [ 2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
		'quote-props': [ 2, 'consistent-as-needed' ],

		'brace-style': [ 2, 'allman' ],

		'keyword-spacing': [ 2 ],
		// 'block-spacing': [ 2, 'always' ],
		'object-curly-spacing': [ 2, 'always',
		{
			'objectsInObjects': false,
			// 'arraysInObjects': false
		}],
		'key-spacing': [ 2,
		{
			beforeColon: false,
			afterColon: true,
			mode: 'minimum'
		}],

		'space-unary-ops': [ 2, { words: true, nonwords: true } ],

		'space-before-function-paren': [ 2, 'always' ],
		// 'no-spaced-func': [ 2 ],
		'arrow-spacing': [ 2, { before: true, after: true } ],

		'one-var': [ 2, 'never' ],
		'one-var-declaration-per-line': [ 2, 'always' ],
		'newline-after-var': [ 2, 'always' ],

		'no-delete-var': [ 2 ],
		// 'no-undef': [ 2 ],
		'no-undefined': [ 2 ],
		'no-unused-vars': [ 2 ],

		// 'no-unexpected-multiline': [ 2 ],

		'no-underscore-dangle': [ 2 ],
		'no-multi-str': [ 2 ],
		'no-nested-ternary': [ 2 ],
	},
}
