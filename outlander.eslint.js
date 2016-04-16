
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
		'arrow-spacing': [ 2, { before: true, after: true } ]
	},
}
