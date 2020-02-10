/* global require, module, __dirname */
const path = require( 'path' );

module.exports = {
	entry: './src/responsive-embeds.js',
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: 'responsive-embeds.js',
		library: 'ResponsiveEmbeds',
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: /\.js/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env' ],
					},
				},
			},
		],
	},
};
