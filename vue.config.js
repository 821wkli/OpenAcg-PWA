const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

function resolve (dir) {
  return path.join(__dirname, dir)
}

const isEnvProduction = process.env.NODE_ENV === 'production'
process.env.VUE_APP_VERSION = require('./package.json').version
module.exports = {
  publicPath: '/',
  devServer: {
    port: 8088,
    open: true,
    proxy: {
      '^/api': {
        target: 'https://openacg.ml',
        changeOrigin: true
      }
    }
  },
  productionSourceMap:false,
  chainWebpack (config) {
    config.resolve.alias
      .set('apis', resolve('src/apis'))
      .set('config', resolve('src/config'))
      .set('utils', resolve('src/utils'))
      .set('assets', resolve('src/assets'))
      .set('base', resolve('src/base'))
      .set('components', resolve('src/components'))
      .set('pages', resolve('src/pages'))
      .set('plugins', resolve('src/plugins'))
    // config.plugin('html').tap(args => {
    //   if (isEnvProduction) {
    //     args[0].minify.minifyJS = true
    //     args[0].minify.minifyCSS = true
    //   }
    //   return args
    // })
  },
  configureWebpack: {
    plugins: [
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      })
    ],
    performance: {
      hints: 'warning',
      // 入口起点的最大体积
      maxEntrypointSize: 5000000000,
      // 生成文件的最大体积
      maxAssetSize: 3000000000,
      // 只给出 js 文件的性能提示
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js')
      }
    }
  },
  pwa: {
    name: 'OpenAcg',
    themeColor: '#F3F3F3',
    backgroundColor: '#F3F3F3',
    appleMobileWebAppCapable: 'yes',
    manifestOptions: {
      start_url: '/'
    },
    iconPaths: {
      favicon32: 'https://openacg.ml/img/icons/icon-72x72.png',
      favicon16: 'https://openacg.ml/img/icons/icon-72x72.png',
      appleTouchIcon: 'https://openacg.ml/img/icons/icon-152x152.png',
      maskIcon: 'https://openacg.ml/img/icons/icon-192x192.png',
      msTileImage: 'https://openacg.ml/img/icons/icon-144x144.png'
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/mixin.scss";'
      }
    }
  }
}
