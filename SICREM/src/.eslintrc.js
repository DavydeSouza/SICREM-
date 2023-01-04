// https://eslint.org/docs/user-guide/configuring

module.exports = {
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 2020
	},
	env: {
		node: true
	},
	extends: [
		'plugin:vue/recommended',
		'eslint:recommended',
		'plugin:prettier/recommended'
	],
	// required to lint *.vue files
	plugins: ['vue', 'prettier'],
	rules: {
		'prettier/prettier': [
			'warn',
			{ singleQuote: true, semi: false, 'space-before-function-paren': 'off' }
		],
		'vue/attribute-hyphenation': 'off',
		'vue/prop-name-casing': 'off',
		'generator-star-spacing': 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		indent: [2, 'tab'],
		'no-tabs': 0
	}
}
