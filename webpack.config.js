const isDev = process.env.NODE_ENV === 'development';

const path = require('path');
const PugPlugin = require('pug-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: {
    index: './src/views/index.pug',
    about: './src/views/about.pug',
    media: './src/views/media.pug',
    'media-content': './src/views/media-content.pug',
    news: './src/views/news.pug',
    'news-content': './src/views/news-content.pug',
    products: './src/views/products.pug',
    //☝🏽 Insert your PUG HTML files here
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    publicPath: '/',
    filename: 'assets/js/[name].[contenthash:8].js'
    //☝🏽 Output filename of files with hash for unique id
  },
  resolve: {
    alias: {
      // use alias to avoid relative paths like `./../../images/`
      '@images': path.join(__dirname, './src/assets/images/'),
      '@fonts': path.join(__dirname, './src/assets/fonts/'),
      '@templates': path.join(__dirname, './src/templates/'),
      '@components': path.join(__dirname, './src/components/'),
      '@mixins': path.join(__dirname, './src/mixins/'),
      '@styles': path.join(__dirname, './src/styles/'),
      '@js': path.join(__dirname, './src/js/')
    }
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { context: './src/assets/lottie/', from: '*/images/*.*', to: 'assets/lottie' },
        { context: './src/assets/lottie/', from: '*/data.json', to: 'assets/lottie' },
        { context: './src/assets/images/', from: 'arrow-*.png', to: 'assets/img' },
      ],
      options: {
        concurrency: 100,
      },
    }),
    new PugPlugin({
      pretty: true,
      //☝🏽 Format HTML (only in dev mode)
      js: {
        // output filename of extracted JS file from source script
        filename: 'assets/js/[name].[contenthash:8].js',
      },
      css: {
        filename: 'assets/css/[name].[contenthash:8].css'
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
        options: {
          data: {
            isDev, // pass global variable into all Pug files
          }
        },
        //☝🏽 Load Pug files
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader', 'sass-loader']
        //☝🏽 Load Sass files
      },
      {
        // To use images on pug files:
        test: /\.(png|jpg|jpeg|ico|svg)/,
        type: 'asset/resource',
        resourceQuery: { not: [/inline/] }, // ignore images with `?inline` query
        generator: {
          filename: 'assets/img/[name].[hash:8][ext]'
        }
      },
      // force inline svg file containing `?inline` query
      // https://github.com/webdiscus/pug-plugin/blob/master/examples/hello-world/webpack.config.js
      {
        test: /\.(svg)$/i,
        type: 'asset/inline',
        resourceQuery: /inline/,
      },
      {
        // To use fonts on pug files:
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext][query]'
        }
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    watchFiles: {
      paths: ['src/**/*.*', 'assets/scss/**/*.*'],
      //☝🏽 Enables HMR in these folders
      options: {
        usePolling: true
      }
    }
  },
  stats: 'errors-only',
  //☝🏽 For a cleaner dev-server run
  devtool: 'source-map',
  externals: {
    jquery: 'jQuery',
  },
};