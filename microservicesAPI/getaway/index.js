const express = require('express');
const morgan = require('morgan');

const { createProxyMiddleware } = require('http-proxy-middleware');
const PORT = 8000

const app = express();
app.use(morgan('dev'));

app.use('/characters', createProxyMiddleware({
    target: 'http://localhost:8001',
    changeOrigin: true
}))

app.use('/films', createProxyMiddleware({
    target: 'http://localhost:8002',
    changeOrigin: true
}))

app.use('/planets', createProxyMiddleware({
    target: 'http://localhost:8003',
    changeOrigin: true
}))


app.listen(PORT, ()=> {
    console.log(`Getaway listening on port ${PORT}`)
})
