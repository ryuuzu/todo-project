const json5 = require("json5");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		index: "./src/index.js",
		header: "./src/header/header.js",
		footer: "./src/footer/footer.js",
		main: "./src/main/main.js",
	},
	devtool: "inline-source-map",
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
	],
	optimization: {
		runtimeChunk: "single",
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},

			{
				test: /\.json5$/i,
				type: "json",
				parser: {
					parse: json5.parse,
				},
			},
		],
	},
};
