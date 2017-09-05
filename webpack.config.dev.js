import path from 'path';
export default {
    devtool: 'inline-source-map',
    entry: [
        path.resolve(__dirname, 'src/app.js')
    ],
    target: 'web',
    output: {
        path:path.resolve(__dirname, 'src'),
        publicPath: '/', //directory or path in serevr to create the bundle
        filename: 'bundle.js'
    },
    plugins: [],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: ['babel-loader'] },
            { test: /\.css$/, loader: ['css-loader'] }
        ]
    }
};
