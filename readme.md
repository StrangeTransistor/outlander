# js-outlander
## install
```sh
$ cd
$ npm i StrangeTransistor/js-outlander
```

## eslint
```sh
$ eslint -c ./node_modules/js-outlander/outlander.eslint.js .

# +Node
$ eslint -c ./node_modules/js-outlander/node.js .

# +TypeScript
$ eslint -c ./node_modules/js-outlander/typescript.js .

# +React
$ eslint -c ./node_modules/js-outlander/react.js .

# +Flow
$ eslint -c ./node_modules/js-outlander/flow.js .
```

`.eslintrc.js`
```js
module.exports =
{
	extends: require.resolve('js-outlander'),

	// +Node       ("eslint-plugin-node": "11")
	extends: require.resolve('js-outlander/node'),

	// +TypeScript ("@typescript-eslint/eslint-plugin": "4")
	extends: require.resolve('js-outlander/typescript'),

	// +React      ("eslint-plugin-react": "7")
	extends: require.resolve('js-outlander/react'),

	// +Flow       ("eslint-plugin-flowtype": "5")
	extends: require.resolve('js-outlander/flow'),
}
```

## license
ISC © 2022 Strider.
