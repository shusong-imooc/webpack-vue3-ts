const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    resolve: {
        // 别名配置
        alias: {
            "@": path.resolve(__dirname, "../src")
        },
    },
    // 打包缓存
    cache: {
        type: "filesystem",
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [devMode ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                type: "asset",
                generator: {
                    filename: "images/[name]-[hash][ext]",
                },
            },
            {
                test: /\.(eot|svg|ttf|woff2?|)$/,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[name]-[hash][ext]",
                },
            },
            {
                test: /\.(t|j)s$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "webpack5-ts-vue3",
            template: "public/index.html"
        }),
        new VueLoaderPlugin()
    ]
};