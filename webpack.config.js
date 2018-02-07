const path = require("path");

module.exports = {
    entry: ["babel-polyfill", path.join(__dirname, "src/index.js")],
    devtool: 'source-map',
    output: {
        path: __dirname,
        filename: "build.js"
    },
    module: {
        loaders: [
            {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"},
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['react', 'es2015'],
                            plugins: ['transform-object-rest-spread', 'transform-regenerator']
                        },
                    },
                    {
                        loader: 'eslint-loader',
                    }
                ]
            },
            {test: /\.json$/, loader: "json-loader"},
            {test: /\.svg$/, loader: "svg-loader"},
            {test: /\.jpg$/, loader: "file-loader"}
        ]
    },
    node: { fs: "empty"},
    resolve: {
        modules: [path.resolve(__dirname), "node_modules"],
        alias: {
            "@Components": "src/Components",
            "@Styles": "src/styles",
            "@Assets": "assets",
            "@Locales": "locales",
            "@Root": "src",
            "@Utils": "src/Utils/index"
        }
    }
};
