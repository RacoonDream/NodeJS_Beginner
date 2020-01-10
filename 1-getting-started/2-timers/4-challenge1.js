const theOneFunc = (message,delay)=> { console.log(message + " after " +delay+ " sec");};



// Hello after 4 seconds
setTimeout(theOneFunc, 4*1000, "hello4",4);
// Hello after 8 seconds
setTimeout(theOneFunc, 8*1000, "hello",8);
// You can define only ONE function
