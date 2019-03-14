const proxy = require("http-proxy-middleware");
 
module.exports = function(app) {
  app.use(
    proxy("/daxun", {
      target: "http://39.96.193.22",
      changeOrigin: true,
      pathRewrite: {
        '^/daxun': ''
      }
    })
  );
  app.use(
    proxy("/api", {
      target: "http://bixby.red",
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  );
};