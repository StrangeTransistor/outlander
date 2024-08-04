
var node = require('./node.js')
var globals = require('globals')


module.exports =
[
	...node,

	{
		languageOptions:
		{
			globals:
			{
				...globals.commonjs,
			}
		}
	}
]
