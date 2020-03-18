const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./base.config.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const PuppeteerRenderer = require("@prerenderer/renderer-puppeteer");

const ROUTES = require("../src/app/router.js");
let routesArray = [];

for (let route of ROUTES.routes) {
  routesArray.push(route.path);
}

console.log(routesArray);

module.exports = merge(baseConfig, {
  mode: "production",
  plugins: [
    // Optimise images
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      jpegtran: {
        // Lossless conversion to progressive.
        progressive: true
      },
      optipng: {
        optimizationLevel: 5
      },
      pngquant: {
        quality: "50-80"
      },
      gifsicle: {
        interlaced: true,
        optimizationLevel: 3
      },
      svgo: {
        options: {
          cleanupAttrs: true,
          removeDoctype: true
        }
      }
    }),

    new MiniCssExtractPlugin({
      filename: "[name].[hash].min.css",
      chunkFilename: "[id].[hash].min.css"
    }),

    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, "../dist"),
      outputDir: path.join(__dirname, "../dist"),
      indexPath: path.join(__dirname, "../dist/index.html"),

      routes: routesArray,

      renderer: new PuppeteerRenderer({
        renderAfterDocumentEvent: "app.rendered",
        inject: {
          prerendered: true
        },
        injectProperty: "__PRERENDER_INJECTED",
        headless: true
      })
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
});
