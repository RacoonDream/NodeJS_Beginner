const timerId = setInterval(
  () => console.log('I will be print myself 5 times!'),
  1000
);

const clearTimerID = () => {
    console.log("Done");
    clearTimeout(timerId);
};
setTimeout(clearTimerID, 6 * 1000);

//let counter = 1;
//const timerID = setInterval(
//    () => {
//        console.log("Counting.. " + counter);
//        counter += 1;
//        if (counter === 6) {
//            console.log("Done");
//            clearInterval(timerID);

//        }
//    },2000);
