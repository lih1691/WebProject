const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        ['/api/auth/exists/userID/', '/api/auth/exists/email/', '/api/auth/exists/nickName/', '/api/auth/SignUp/local'
        , '/api/auth/SignIn/local', '/api/auth/check', '/api/auth/logOut'],
        createProxyMiddleware({
            target: "http://localhost:4000",
            changeOrigin: true,
        })
    );
    app.use(
        ['/api/contents/review', '/api/contents/news', 'api/contents/community'],
        createProxyMiddleware({
            target: "http://localhost:4000",
            changeOrigin: true,
        })
    );
};