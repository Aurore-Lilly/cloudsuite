const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");


module.exports = {
	
	mode: 'development',
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
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
				  loader: 'babel-loader',
				  options: {
				    cacheCompression: false,
			   	    cacheDirectory: true,
				    presets: ['@babel/preset-env']
				  }
				}
			},		
		],
	},

	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},

	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 8080,
	},
};