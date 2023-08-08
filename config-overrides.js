const webpack = require('webpack');
module.exports = function override(config, env) {
    config.resolve.fallback = {
        url: require.resolve('url'),
        fs: false,
        assert: require.resolve('assert'),
        crypto: require.resolve('crypto-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        buffer: require.resolve('buffer'),
        stream: require.resolve('stream-browserify'),
        path: require.resolve("path-browserify"),
        querystring: require.resolve("querystring-es3") ,
        zlib: require.resolve("browserify-zlib")
    };
    config.plugins.push(
        new webpack.ProvidePlugin({
           // process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
            target: "node"
        }),
    );

    return config;
}