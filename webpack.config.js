const path = require('path');

module.exports = {
  entry: './app.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output bundle filename
    path: path.resolve(__dirname, 'build'), // Output directory (e.g., 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply the loader to JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel for transpilation
          options: {
            presets: ['@babel/preset-env'], // Use the @babel/preset-env preset for modern JavaScript
          },
        },
      },
    ],
  },
};
