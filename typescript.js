
module.exports =
{
	extends: require.resolve('./outlander.eslint'),

	parser: require.resolve('@typescript-eslint/parser'),
	parserOptions:
	{
		sourceType: 'module',
	},

	plugins:
	[
		// https://github.com/eslint/eslint/issues/10644
		// https://github.com/eslint/eslint/issues/10644#issuecomment-430726105

		// require.resolve('eslint-plugin-node'),
		// './node_modules/eslint-plugin-node',
		'@typescript-eslint',
	],

	rules:
	{
		'require-await': 0,
		'default-case': 0,

		'no-unused-vars': 0,
		'@typescript-eslint/no-unused-vars': [ 2, { varsIgnorePattern: '^_$' } ],

		'no-unused-expressions': 0,
		'@typescript-eslint/no-unused-expressions': 2,
	},
}
