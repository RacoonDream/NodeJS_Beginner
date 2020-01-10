const http = require('http');

//const server = http.createServer((req, res) => {
//  res.end('Nodemon rocks\n');
//});

//server.listen(4242, () => {
//  console.log('Server is running, nodemon is active...');
//});

const RequestListnerFunc = (req, res) => {
    console.dir(res, { depth: 0 });
    res.write('Writing on response stream...');
    res.end("Ending server");
};
const server = http.createServer();
server.on('request', RequestListnerFunc);
server.listen(4242, () => {
  console.log('Server is running, nodemon is active...');
});