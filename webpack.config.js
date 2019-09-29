var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
	  entry : './src/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".jsx", ".js"]
    },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
	   {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']},
			{test: /\.(png|svg|jpg|gif|ico)$/,  use: ['file-loader'] },
	  {
       test: /\.(otf)$/,
       loaders: [
         'url-loader'
       ]
     }
    ]
  },
    mode:'development',
   plugins : [
        new HtmlWebpackPlugin ({
            template : './public/index.html'
        })
    ]
};