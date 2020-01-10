setTimeout(() => process.exit(), 2000);// timeout is 

// exit is the event and the function after it is the handler of the event.
// so the below line means - on exit event, perform that function which writes to teh console.
process.on('exit', () => {
  console.log('Process will exit now. See you later!');
});

console.log('Hello!');
