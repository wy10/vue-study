const path = require('path')

module.exports = {
    // chosen mode tell webpack to use its built-in optimizations accordingly
    entry: './src/main.js',
    output: {
        // 入口文件打包后的 文件名称
        filename: 'bundle.js',
        // 所有输出文件的目标路径
        path: path.resolve(__dirname,'dist'),
        // 输出解析文件的目录，url相对于html页面
        publicPath: '/assets/',
    },
    // 模块配置
    module: {   
        // 模块规则（配置loader、解析器等选项）
        rules: [
            /*  test: 文件名匹配使用正则表达式
                include exclude 使用绝对路径数组
                尽量避免 exclude
            */
           {
                test: /\.css$/,
                use: [
                   'vue-style-loader',
                   'css-loader'
               ]
           },{
                test: /\.html$/,
                // 应用多个loader情况
                use: [
                    'htmllint-loader',
                    {
                        loader: 'html-loader',
                        options: {
                            // 
                        } 
                    }
                ]
           }, {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
           }, {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_modules/
           }, {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]?[hash]'
                        }
                    }
                ]
           }
        ]
    }
} 