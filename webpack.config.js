//Plugin responsavel por gerar o Bundle e exportar no HTML
const HtmlWebpackPlugin = require('html-webpack-plugin')
//Caminho do arquivo
const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')


const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    //Tipo de ambiente
    mode: 'development',
    //Tratamento de erro
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    //Função de criação do Bundle
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    //Tipos de arquivos suportados
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],

    },
    //Importação dos plugins
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
    ].filter(Boolean),
    //Executando Babel
    module: {
        rules: [
            {
                test: /\.(j|t)sx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']

            }
        ],
    }
}