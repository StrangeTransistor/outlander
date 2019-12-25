# js-outlander
## install
```sh
$ cd
$ npm i StrangeTransistor/js-outlander
```

## eslint
```sh
$ eslint -c ~/node_modules/js-outlander/outlander.eslint.js src/

# +Node
$ eslint -c ~/node_modules/js-outlander/node.js src/

# +Flow
$ eslint -c ~/node_modules/js-outlander/flow.js src/
```

`.eslintrc.js`
```js
module.exports =
{
	extends: require.resolve('js-outlander'),

	// +Node   ("eslint-plugin-node": "10")
	extends: require.resolve('js-outlander/node'),

	// +Flow   ("eslint-plugin-flowtype": "3")
	extends: require.resolve('js-outlander/flow'),
}
```

## license
ISC © 2019 Strider.
