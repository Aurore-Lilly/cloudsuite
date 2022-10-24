const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");



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
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
				  loader: 'babel-loader',
				  options: {
				    presets: ['@babel/preset-env']
				  }
				}
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
				  {
				    loader: 'file-loader',
				    options: {
				      name: '[name].[ext]',
				      outputPath: 'fonts/'
				    }
				  }
				]
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