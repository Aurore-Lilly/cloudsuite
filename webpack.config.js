const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, './src/index.js'),
    devtool: "eval-source-map",
    module: {
        rules: [
          {
             test: /\.(js|jsx)$/,
             exclude: /node_modules/,
             use: ['babel-loader']
          },
          {
             test: /\.(s(a|c)ss)$/,
             use: ['style-loader','css-loader', 'sass-loader']
          },
	  {
		test: /\.(png|svg|jpg|jpeg|gif)$/i,
		type: 'asset/resource',
	  },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    devServer: {
	static: {
		directory: path.join(__dirname, 'dist'),
	},
	compress: true,
	port: 8080,
  },
};