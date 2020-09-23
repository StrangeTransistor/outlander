
module.exports =
{
	extends: require.resolve('./outlander.eslint'),

	plugins:
	[
		// https://github.com/eslint/eslint/issues/10644
		// https://github.com/eslint/eslint/issues/10644#issuecomment-430726105

		// require.resolve('eslint-plugin-node'),
		// './node_modules/eslint-plugin-node',
		'react',
	],

	rules:
	{
		'react/jsx-uses-react': 2,
		'react/jsx-uses-vars':  2,
	},
}
