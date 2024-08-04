# Outlander

> Unorthodox and opinionated code style for modern JS and TS

This is my personal approach to code style. All opinions here are based on long-term observation and practice. This work is an attempt to create a balanced and aesthetic code style where statements are highly independent and stylistic noise is reduced. It also provides regular structure for better greppability. It is mostly close to Allman Style. I think the only way for curly-brace-based syntaxes is to keep opening and closing braces at the same level. But you can't find a lot of code styles with this idea. That's why Outlander came in.

## install
```sh
$ cd
$ npm i StrangeTransistor/outlander
```

## eslint
```sh
$ eslint -c ./node_modules/outlander/outlander.eslint.js

# +Node
$ eslint -c ./node_modules/outlander/node.js

# +TypeScript
$ eslint -c ./node_modules/outlander/typescript.js

# +React
$ eslint -c ./node_modules/outlander/react.js
```

`eslint.config.js`
```js
var outlander = require('outlander')
var outlander = require('outlander/node')
var outlander = require('outlander/typescript')
var outlander = require('outlander/react')

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
```

## license
ISC © 2024 Strider.
