/* https://github.com/mysticatea/eslint-plugin-node/issues/358 */

var outlander = require('./outlander.eslint.js')


module.exports =
[
	...outlander,

	{
		plugins:
		{
			node: require('eslint-plugin-n'),
		},
		rules:
		{
			'node/no-unpublished-bin': 2,
			'node/process-exit-as-throw': 2,

			'node/no-unsupported-features/es-builtins': 2,
			'node/no-unsupported-features/es-syntax':
			[
				2, { ignores: [ 'modules', 'dynamicImport' ] },
			],
			'node/no-unsupported-features/node-builtins': 2,
			'node/no-deprecated-api': 1,

			'node/exports-style': [ 2, 'module.exports' ],
			'node/no-exports-assign': 2,

			'node/no-extraneous-import': 1,
			'node/no-extraneous-require': 1,

			'node/no-missing-import': 1,
			'node/no-missing-require': 1,

			'node/no-unpublished-import': 1,
			'node/no-unpublished-require': 1,
		},
	},
]
