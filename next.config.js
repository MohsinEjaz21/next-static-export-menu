const path = require('node:path');
const nextConfig = {
  assetPrefix: '.',
  reactStrictMode: true,
  swcMinify: true,

  webpack(config) {
    // config.resolve.alias["@assets"] = path.join(__dirname, "./public/assets");
    // config.resolve.alias["@styles"] = path.join(__dirname, "./styles");

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    },

    );

    return config;
  }
}

module.exports = nextConfig



      // {
      //   test: /\.s[ac]ss$/i,
      //   use: [

      //     "style-loader",
      //     "css-loader",
      //     'resolve-url-loader',
      //     {
      //       loader: "sass-loader",
      //       options: {
      //         // Prefer `dart-sass`
      //         implementation: require("sass"),
      //       },
      //     },
      //   ],
      // },

      // {
      //   test: /\.scss$/,
      //   use: [
      //     "style-loader",
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: {
      //           auto: true,
      //           localIdentName: "[local]--[hash:base64:5]",
      //         },
      //       },
      //     },
      //     'resolve-url-loader',
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         sourceMap: true, // <-- !!IMPORTANT!!
      //       }
      //     }
      //   ]
      // },