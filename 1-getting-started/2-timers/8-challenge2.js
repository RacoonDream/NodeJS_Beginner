// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

//let counter = 1;
//const timerID = setInterval(
//    () => {
//        console.log("Counting.. " + counter);
//        counter += 1;
//        if (counter === 6) {
//            console.log("Done");
//            clearInterval(timerID);

//        }
//    }, 2000);

//Challenge 1:

//Print "Hello World" forever.Starting with a delay of 1 second
//but then incrementing the delay by 1 second each time.
//The second time will have a delay of 2 seconds
//The third time will have a delay of 3 seconds.

//Include the delay in the printed message
//Hello World. 1
//Hello World. 2
//Hello World. 3
//  ...

//Constraints: You can only use const (no let or var)

// setTimeout(function, time)

//const lazyPrinter = (seed) => {
//    setTimeout(() => {

//        console.log(" i am getting slower , you will see me next after " + seed + " seconds");
//        lazyPrinter(seed + 1);
//    }, seed * 1000);
//};

//lazyPrinter(1);

//Challenge 2:

//Just like Challenge 1 but this time with repeated delay values.
//Print Hello World 5 times with a delay of 100 ms.
//Then Print it again 5 more times with a delay of 200 ms.
//Then print it again 5 more times with a delay of 300 ms.
//And so on until the program is killed.

//Include the delay in the printed message:
//Hello World. 100
//Hello World. 100
//Hello World. 100
//Hello World. 100
//Hello World. 100
//Hello World. 200
//Hello World. 200
//Hello World. 200
//  ...

//Constraints:
//- Only use setInterval(not setTimeout)
//    - Use only ONE if statement
let counter = 0;
const timerID = seed => {
   intervalManager= setInterval(
        () => {

            console.log("i will be seen after " + seed + " sec");
            counter++;
            if (counter === 5) {
                counter = 0;
                clearInterval(intervalManager);
                timerID(seed += 1);
            }
        }, seed * 1000);
};
timerID(1);