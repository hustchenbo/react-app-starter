/**
 * @file mock服务入口
 * @author chenbo09
 */

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('mockup/db.json');
const customRoutes = require('./custom.routes.js');

const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use(jsonServer.rewriter(customRoutes));
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
    // 因为本地mock不想改数据 先把所有的POST请求转为GET
    if (req.method === 'POST' || req.method === 'PUT') {
        req.method = 'GET';
    }
    // Continue to JSON Server router
    next();
});

// Use default router
server.use(router);
server.listen(3001, () => {
    console.log('The JSON Server is listening on port 3001!');
});
