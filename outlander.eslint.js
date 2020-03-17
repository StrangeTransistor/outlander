
module.exports =
{
	parser: require.resolve('babel-eslint'),

	/*
	plugins:
	[
		'eslint-plugin-node',
		'eslint-plugin-flowtype',
	],
	*/

	env:
	{
		es6: true,
		browser: true,
		node: true,
	},

	rules:
	{
		/* indent: [ 2, 'tab' ], */
		'linebreak-style': [ 2, 'unix' ],
		'no-mixed-spaces-and-tabs': [ 2, 'smart-tabs' ],
		'no-trailing-spaces': 2,
		'eol-last': 2,

		 semi: [ 2, 'never' ],

		'comma-style': [ 2, 'last' ],
		'comma-spacing': [ 2, { before: false, after: true } ],
		/* 'comma-dangle': [ 2, 'always-multiline' ], */

		 quotes: [ 2, 'single', { avoidEscape: true, allowTemplateLiterals: true } ],
		'quote-props': [ 2, 'consistent-as-needed' ],

		 curly: [ 2, 'multi-line' ],
		'brace-style': [ 2, 'allman', { allowSingleLine: true } ],

		'keyword-spacing': 2,
		'block-spacing': [ 2, 'always' ],
		'object-curly-spacing': [ 2, 'always',
		{
			objectsInObjects: false,
			/* 'arraysInObjects': false */
		}],
		'key-spacing': [ 2,
		{
			beforeColon: false,
			afterColon: true,
			mode: 'minimum'
		}],

		'dot-notation': 2,
		'dot-location': [ 2, 'property' ],
		'no-whitespace-before-property': 2,

		'space-unary-ops': [ 2,
		{
			words: true,
			// nonwords: true,
			overrides:
			{
				'~':  true,
				'!':  true,
				'!!': true,
			}
		} ],
		'space-infix-ops': 2,

		'space-before-function-paren': [ 2, 'always' ],
		'func-call-spacing': 2,

		'switch-colon-spacing': [ 2 ],
		'arrow-spacing': [ 2, { before: true, after: true } ],
		'rest-spread-spacing': [ 2, 'never' ],
		'template-curly-spacing': [ 2, 'always' ],

		'one-var': [ 2, 'never' ],
		'one-var-declaration-per-line': [ 2, 'always' ],

		'wrap-iife': [ 2, 'outside' ],

		'no-undef': 2,
		'no-unused-vars': 2,

		'no-delete-var': 2,
		'no-undef-init': 2,
		'no-undefined': 2,
		'no-debugger': 2,
		'no-cond-assign': 2,
		'no-func-assign': 2,
		'no-irregular-whitespace': 2,
		'no-return-assign': 2,
		'no-import-assign': 2,
		'no-sparse-arrays': 2,
		'no-throw-literal': 2,
		'no-unexpected-multiline': 2,
		'no-underscore-dangle': 2,
		'no-unsafe-negation': 2,
		'no-multi-str': 2,
		'no-ternary': 2,
		'no-unused-expressions': [ 2, { allowShortCircuit: true } ],
		'no-empty-pattern': 2,
		'no-with': 2,
		'valid-typeof': 2,
		'no-inner-declarations': [ 2, 'functions' ],
		'prefer-arrow-callback': [ 2, { allowNamedFunctions: true } ],
		'require-await': 2,
		'no-return-await': 2,

		 eqeqeq: [ 1, 'smart' ],
		'no-fallthrough': 1,
		'default-case': 1,
		'no-extra-bind': 1,
		'no-unreachable': 1,
		'no-useless-call': 1,
		'no-useless-escape': 1,
		'no-lonely-if': 1,
		'no-implied-eval': 1,
		// 'arrow-parens': [ 1, 'as-needed' ],
		'object-shorthand': [ 1 ],
		'no-useless-rename': [ 1 ],

		 complexity: [ 1, 5 ],
		'id-length': [ 1, { min: 1, max: 24 } ],
		'max-depth': [ 1, 3 ],
		'max-len': [ 1,
		{
			code: 100,
			tabWidth: 3,
			ignoreComments: true,
		}
		],
		'max-params': [ 1, 4 ],
		'max-nested-callbacks': [ 1, 3 ],
		'max-statements': [ 1, 20, { ignoreTopLevelFunctions: true } ],
		'max-statements-per-line': [ 1, { max: 2 } ],
	},
}
