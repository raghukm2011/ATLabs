const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));
const port = process.env.port || 8080;
const server  = app.listen(port, function(){
    console.log('server start');
})