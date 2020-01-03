var webpack = require('webpack');
var path = require('path');

module.exports = {

    devtool:'inline-source-map',

entry:{
    'index':'./src/index.js'
},
mode:"development",

output:{
    
    path:path.resolve(__dirname,'dist'),
    filename:'main.js'
},
    
module:{
    rules:[ 
        {
            test:/\.js$/,   
            exclude:/node_modules/,
            use: 'babel-loader'

        }
    ]
},
    
    devServer:{
        contentBase: path.join(__dirname,"public/"),
        port:3002,
        hot:true,
        publicPath: "http://localhost:3002/dist/"
    }
}