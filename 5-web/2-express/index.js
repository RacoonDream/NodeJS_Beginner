const express = require('express');

const server = express();

server.listen(4242, () => {
    console.log('Express Server is running...');
    
});

server.get('/', (req, res) => {

    res.send("HOME PAGE");//http://localhost:4242/
    // no need to do res.end
    //res.send is equivalent of res.write in http server

});
server.get('/about', (req, res) => {

    res.send("ABOUT"); //http://localhost:4242/about

});