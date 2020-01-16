const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
})
module.exports = {
    module: {
        rules: [
            {
                //rule 1
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                },
                // {
                //     loader: 'eslint-loader'
                // }
            ]
            },
            {
                //rule 2
                test: /\.s[ac]ss$/i,
                use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: "[name]__[local]___[hash:base64:5]"
                        }
                    }
                },
                {
                    loader: 'sass-loader'
                }
                ]
            },
            {
                //rule 3
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader'
                }]
            }
        ]
    },
    plugins: [htmlPlugin]
}