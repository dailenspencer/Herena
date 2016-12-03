module.exports = {
    devtool: 'source-map',
    entry: ["./public/index.js"],
    output: {
        path: __dirname + '/public/compiled/components',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx|\.js$/, 
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react', 'stage-0']
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};