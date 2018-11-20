// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var distName = "public";

module.exports = {
  build: {
    index: path.resolve(__dirname, '../'+distName+'/index.html'),
    assetsRoot: path.resolve(__dirname, '../'+distName),
    assetsSubDirectory: 'static',
    // assetsPublicPath: '/'+distName+'/',
    assetsPublicPath: '/',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env:{NODE_ENV:'"dev"'},
    port: 9008,
    autoOpenBrowser: false,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false
  }
}
