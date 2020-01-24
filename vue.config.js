/* eslint-disable no-param-reassign */
function webpackResolveConfig(resolve) {
  return ({
    ...resolve,
    alias: {
      ...resolve.alias,
      Vue$: 'vue',
    },
  });
}

module.exports = {
  lintOnSave: 'error',
  outputDir: './dist/',
  chainWebpack(webpackOptions) {
    webpackOptions
      .module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap((options) => {
        options.emitError = true;
        options.fix = false;
        return options;
      });

    webpackOptions
      .plugin('extract-css')
      .tap(({ params }) => [{
        ...params,
        filename: 'index.css',
      }]);
  },
  configureWebpack(webpackConfig) {
    webpackConfig.entry.app = './src/index.js';
    webpackConfig.name = '@example/package';
    webpackConfig.output.filename = 'index.min.js';
    webpackConfig.output.library = '@example/package';
    webpackConfig.output.libraryTarget = 'umd';
    webpackConfig.output.umdNamedDefine = true;
    webpackConfig.output.sourceMapFilename = 'index.min.js.map';
    webpackConfig.resolve = webpackResolveConfig(webpackConfig.resolve);

    webpackConfig.externals = [
      {
        vue: 'Vue',
        'vue-router': 'vue-router',
      },
    ];

    webpackConfig.optimization.splitChunks = false;
    webpackConfig.optimization.minimize = !process.argv.includes('--watch');
  },
};
