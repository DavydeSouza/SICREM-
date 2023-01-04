module.exports = {
	presets: [['@vue/cli-plugin-babel/preset', { useBuiltIns: 'entry' }]],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				alias: {
					'~': './src'
				}
			}
		],
		['@babel/plugin-syntax-dynamic-import']
	]
}
