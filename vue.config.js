module.exports = {
    devServer: {
        port: 8080,
        host: '0.0.0.0',
        https: false,
        open: true,
        proxy: {
            '/svga': {
                target: 'http://localhost:8080',
            },
        },
    },
};
