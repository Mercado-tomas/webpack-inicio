
// cargamos archivo de otros paquetes
const HtmlWebpackPlugin = require('html-webpack-plugin');

// configuramos webpack

module.exports = {
    mode: 'development',
    module:{
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options:{
                    attributes: false
                }
             
                    
                
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]




}
