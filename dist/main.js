"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const server = restify.createServer({
    name: 'meat-api',
    version: '1.0.0'
});
server.use(restify.plugins.queryParser());
server.get('/hello', (req, resp, next) => {
    // resp.contentType = 'application/json';
    resp.status(400);
    resp.setHeader('Content-Type', 'application/json');
    resp.json({ message: 'hello' });
    return next();
});
server.get('/info', (req, resp, next) => {
    // if(req.userAgent() && req.userAgent().includes('MSIE 7.0')){
    //   // resp.status(400);
    //   // resp.json({message: 'Please, update your browser'});
    //   // let error = new Error();
    //   // error.statusCode = 400;
    //   // error.message = 'Please, update your browser';
    //   return next(false);
    // }
    resp.json({
        browser: req.userAgent(),
        method: req.method,
        url: req.href(),
        path: req.path(),
        query: req.query
    });
    return next();
});
server.listen(3000, () => {
    console.log('API is running on http://localhost:3000');
});
