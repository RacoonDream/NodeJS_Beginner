const EventEmitter = require('events');

// Streams are Event Emitters
// process.stdin, process.stdout

const myEmitter = new EventEmitter();
//myEmitter.emit('MY_EVENT'); emit was fired before subscription so no output

// to get output put the callback on the next tick of event loop
setImmediate(() => { myEmitter.emit('MY_EVENT'," setImmediate");});

// subscription
myEmitter.on('MY_EVENT', (message) => {
    console.log('CUSTOM Event fired' + message);
});

//publish event after subscription so that it can be handled.
myEmitter.emit('MY_EVENT', " normal subscription");