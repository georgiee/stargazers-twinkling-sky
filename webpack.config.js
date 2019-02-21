const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path');

const devPlugins = [
  new HTMLWebpackPlugin({
    inject: true,
    chunks: ['presentation'],
    template: 'src/index.html',
  }),
  new HTMLWebpackPlugin({
    inject: true,
    chunks: ['page1'],
    filename: 'apps/page1/index.html',
    template: 'src/codepens/example/index.html'
  }),
  new HTMLWebpackPlugin({
    inject: true,
    chunks: ['page2'],
    filename: 'apps/page2/index.html',
    template: 'src/codepens/example2/index.html'
  }),
]

const plugins = [
  ...devPlugins,
  new CopyWebpackPlugin([ { from: 'codepens/**/*', to: '' }]),

  new CopyWebpackPlugin([ { from: 'public', to: '' }])
];

module.exports = {
  entry: {
    'presentation': './src/main.ts',
    'page1': './src/codepens/example/test.ts',
    'page2': './src/codepens/example2/test.ts'
  },
  mode: 'development',
  optimization: {
    minimize: true
  },
  devServer: {
    contentBase: './public'
  },
  output: {
    filename: "apps/[name]/bundle.js",
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: plugins,
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};