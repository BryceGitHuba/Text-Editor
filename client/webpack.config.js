const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
  mode: 'development',
  // Entry point files: Adjust the path if your js files are in a different directory
  entry: {
    main: path.resolve(__dirname, 'src', 'js', 'index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    // Output directory as dist within the client directory
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      title: 'Text Editor',
    }),
    new InjectManifest({
      swSrc: path.resolve(__dirname, 'src-sw.js'),
      swDest: 'service-worker.js',
    }),
    new WebpackPwaManifest({
      fingerprints: false,
      inject: true,
      name: 'Text Editor',
      short_name: 'Editor',
      description: 'A text editor that works offline',
      background_color: '#225ca3',
      theme_color: '#225ca3',
      start_url: '/',
      publicPath: '/',
      icons: [
        {
            src: 'C:\\Users\\bryce\\bootcamp\\Text-Editor\\client\\images\\logo.png',
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};
console.log('Path to logo.png:', path.resolve(__dirname, 'images', 'logo.png'));