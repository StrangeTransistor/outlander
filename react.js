
var outlander = require('./outlander.eslint.js')


module.exports =
[
	...outlander,

	{
		plugins:
		{
			react: require('eslint-plugin-react'),
		},
		rules:
		{
			'react/jsx-uses-react': 2,
			'react/jsx-uses-vars':  2,
		},
	}
]
