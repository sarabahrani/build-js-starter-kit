import browserSync from 'browser-sync';
import webpack from 'webPack';
import webpackConfig from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
let bundler = webpack(webpackConfig);
browserSync.init({
    server: {
        baseDir: "src",
        routes: {
            '/user': 'src/api/db.json'
        }
    },
    browser:"chrome",
    middleware: [
        webpackDevMiddleware(bundler, {
            publicPath: webpackConfig.output.publicPath,
            stats: { colors: true } //to show info in console colorful
        }), 
    ],
    plugins: [],
    files: [
        'src/style/*.css',
        'src/*.html'
    ]

});
