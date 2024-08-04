/* @deprecated */
/*

		"eslint-plugin-flowtype":
			"8"

		"eslint-plugin-flowtype":           { "optional": true }

		"@babel/plugin-syntax-flow":
			"7",

		require.resolve('@babel/plugin-syntax-flow'),

*/

var outlander = require('./outlander.eslint.js')


module.exports =
[
	...outlander,

	{
		plugins:
		{
			// eslint-disable-next-line node/no-missing-require
			flowtype: require('eslint-plugin-flowtype'),
		},
		rules:
		{
			'flowtype/define-flow-type': 2,
			'flowtype/use-flow-type': 2,
		},
	}
]
