const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode:"development",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {    
    static: {
      directory: path.join(__dirname, 'public/'),
    },
    devMiddleware: {
      publicPath:"http://localhost:9000/dist/",
    }, 
    compress: true,   
    port: 9000,
    open:true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }, {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          rules: {
            "react/no-unknown-property": "off"
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/medias/'
            },
          },
        ],
      },
      {
        test: /\.cube$/,
        use: 'raw-loader',
      },
      {
        test: /\.(mp4|avi)$/i,
        use: 'file-loader?name=videos/[hash]-[name].[ext]',
      },
      {
        test: /\.(wav)$/i,
        use: 'file-loader?name=audios/[hash]-[name].[ext]',
      },     
      {
        test: /\.(glb|gltf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/maps/'
            },
          },
        ],
      },
    ]
  }
};