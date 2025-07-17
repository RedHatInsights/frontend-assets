const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = require('glob');
const path = require('path');
const { DefinePlugin } = require('webpack');

const basePath = path.resolve(__dirname, 'src');

const getAllTsxFiles = () => {
  const files = glob
    .sync(path.resolve(__dirname, 'src/**/*.tsx'))
    .filter((path) => {
      return !path.includes('demo.tsx');
    });
  return files.map((file) => {
    let componentName = path.basename(file, '.tsx');
    componentName = `${componentName[0].toUpperCase()}${componentName.slice(1)}`;
    const componentPath = file
      .replace(basePath, '')
      .replace(/^\//, './')
      .replace(/\.tsx$/, '');
    return {
      componentName,
      componentPath,
    };
  });
};

const componentImportsPlugin = new DefinePlugin({
  'process.env.COMPONENT_IMPORTS': JSON.stringify(getAllTsxFiles()),
});

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  mode: 'development',
  entry: {
    'demo-app': './src/demo.tsx',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx/,
        loader: 'swc-loader',
        exclude: /node_modules/,
        options: {
          jsc: {
            parser: {
              syntax: 'typescript',
              tsx: true,
            },
            transform: {
              react: {
                runtime: 'automatic',
              },
            },
          },
        },
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                silenceDeprecations: ['legacy-js-api'],
              },
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|jpg|png|eot|gif|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {
          filename: (pathData) => {
            // Get the relative path from src directory
            const relativePath = path.relative(
              path.resolve(__dirname, 'src'),
              pathData.module.resourceResolveData.path,
            );

            // Replace directory separators with dashes to create unique filenames
            // Remove the src prefix and create a flattened path
            const flatPath = relativePath
              .replace(/\\/g, '/') // normalize path separators
              .replace(/\//g, '-') // replace / with -
              .replace(/^-/, ''); // remove leading dash if present

            const ext = path.extname(pathData.filename);

            return `fonts/${flatPath}${ext}`;
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    componentImportsPlugin
  ],
  devServer: {
    port: 8003,
  },
};

module.exports = config;
