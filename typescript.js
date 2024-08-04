
var outlander = require('./outlander.eslint.js')


module.exports =
[
	...outlander,

	{
		languageOptions:
		{
			parser: require('@typescript-eslint/parser'),
		},
		plugins:
		{
			'@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
		},
		rules:
		{
			'require-await': 0,
			'default-case': 0,

			'no-unused-vars': 0,
			'@typescript-eslint/no-unused-vars': [ 2, { varsIgnorePattern: '^_$' } ],

			'no-unused-expressions': 0,
			'@typescript-eslint/no-unused-expressions': [ 2,
			{
				allowShortCircuit: true,
				allowTaggedTemplates: true,
				enforceForJSX: true,
			}
			],
		},
	}
]
