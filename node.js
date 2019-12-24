
module.exports =
{
	extends: require.resolve('./outlander.eslint'),

	plugins:
	[
		// https://github.com/eslint/eslint/issues/10644
		// https://github.com/eslint/eslint/issues/10644#issuecomment-430726105

		// require.resolve('eslint-plugin-node'),
		// './node_modules/eslint-plugin-node',
		'node',
	],

	env:
	{
		// es6: true,
		// node: true,
	},

	rules:
	{
		'node/no-unsupported-features/es-builtins': 2,
		'node/no-unsupported-features/es-syntax':
		[
			2, { ignores: [ 'modules', 'dynamicImport' ] },
		],
		'node/no-unsupported-features/node-builtins': 2,
		'node/no-deprecated-api': 1,

		'node/no-exports-assign': 2,
		'node/process-exit-as-throw': 2,
	},
}
