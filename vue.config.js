const path = require('path');

module.exports = {
    // sass-loader
    css: {
        loaderOptions: {
            sass: {
                data: `
                  @import "./src/assets/style/utilities/_index.scss";
                  @import "./src/assets/style/modules/_index.scss";
                `
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('image', path.resolve(__dirname, './src/assets/image'))
            .set('style', path.resolve(__dirname, './src/assets/style'));

        // pdf loader
        config.module
            .rule('pdf')
            .test(/\.pdf/)
            .use('file-loader')
            .loader('file-loader?name=[name].[hash:20].[ext]')
            .end();
    },
    pluginOptions: {
        i18n: {
            locale: 'ko',
            fallbackLocale: 'en',
            localeDir: 'locale',
            enableInSFC: true
        }
    },
    devServer: {
        overlay: {
            info : true,
            warnings: true,
            errors: true
        }
    },
    lintOnSave: process.env.NODE_ENV !== 'production',
    baseUrl: process.env.NODE_ENV === 'production'
        ? './'
        : '/'
};
