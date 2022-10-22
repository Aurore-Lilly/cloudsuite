const path = require('path');

module.exports = {
	mode: 'none',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},

	module: {
		rules: [
			{
			test: /\.s[ac]ss$/i,
				use: [
				"style-loader",
				"css-loader",
				{
					loader: "sass-loader",
					options: {
					// Prefer `dart-sass`
					implementation: require("sass"),
					},
				},
				],
			},
		],
	},

	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 8080,
	},
};