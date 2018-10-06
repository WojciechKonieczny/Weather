const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   entry: "./src/index.js",
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
   },

   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: ["@babel/preset-env"]
               }
            }
         },
         {
            test: /\.scss$/,
            use: [
               "style-loader", // creates style nodes from JS strings
               "css-loader", // translates CSS into CommonJS
               "sass-loader" // compiles Sass to CSS
            ]
         },
         {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {}
              }
            ]
          },
          {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
          }
      ]
   },

   plugins: [
      new HtmlWebpackPlugin({
         template: "./src/index.html"
      })
   ]
};
