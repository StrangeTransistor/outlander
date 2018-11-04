
module.exports =
{
	extends: require.resolve('./outlander.eslint'),

	plugins:
	[
		// https://github.com/eslint/eslint/issues/10644
		// https://github.com/eslint/eslint/issues/10644#issuecomment-430726105

		// require.resolve('eslint-plugin-flowtype'),
		// './node_modules/eslint-plugin-flowtype',
		'flowtype',
	],

	rules:
	{
		'flowtype/define-flow-type': 2,
		'flowtype/use-flow-type': 2,
	},
}
