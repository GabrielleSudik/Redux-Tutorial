//we created this file to bundle all of the index's imports into one object.

module.exports = {
    entry: "./src/index.js",
    //entry says where to get the js bundle.
    output: {
        path: "dist/assets",
        filename: "bundle.js",
        publicPath: "assets"
    //output says where to place the js bundle
    },
    devServer: {
        inLine: true,
        contentBase: "./dist",
        port: 3000
    },
    //devServer says where to run it.
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ['babel'],
                query: {
                    presets: ['latest', 'stage-0']
                }
            },
            {
                test: /\.json$/,
                exclude: /(node-odules)/,
                loader: 'json-loader'
            }
        ]
    }
    //module is instructions for how to run it.
}