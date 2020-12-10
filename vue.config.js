// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
module.exports = {
    configureWebpack: config => {
        config.externals = {
            AMap: "window.AMap",
            AMapUI: "window.AMapUI",
            BasicControl: "window.BasicControl",
        };
    },
    lintOnSave: false,
    chainWebpack: config => {
        config.resolve.alias.set("@", path.join(__dirname, "./src"));
        // .set('assets', path.join(__dirname, './src/assets'))
        // .set('common', path.join(__dirname, './src/common'))
        // .set('styles', path.join(__dirname, './src/assets/styles'));
    },
    runtimeCompiler: true,
    publicPath: './',
    productionSourceMap: false,
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                  @import "@/scss/_variabel.scss";
                  @import "@/scss/_mixin.scss";
                  @import "@/scss/_base.scss";
            `
            }
        }
    },
    devServer: {
        port: 8080, // 端口号
        host: "0.0.0.0",
        https: false,
        open: false,
        hotOnly: false,
        proxy: {
            "/api": {
                // target: "http://10.237.205.162:8085/",
                target: "http://10.237.120.74:8080/city-operation/",
                ws: true,
                changeOrigin: true,
                pathRewrite: {"^/api": ""}
            },
            "/mock": {
                target: "http://61.152.122.122/JDData/JDDataForm.aspx",
                ws: true,
                changeOrigin: true,
                pathRewrite: {"^/mock": ""}
            }, "/videoApi": {
                target: "http://10.237.120.74:8080/citysituation/videoStream/",
                ws: true,
                changeOrigin: true,
                pathRewrite: {"^/videoApi": ""}
            },
        } // 配置多个代理
    }
};
