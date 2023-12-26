//setInterval

// setInterval(() => console.log("This function will be executed every 2 seconds"), 2000);

//setTimeout

// setTimeout(function () {
//   console.log('This function will be executed after 3 seconds');
// }, 3000)

//clearInterval->stop interval after 10 seconds

const intervalid = setInterval(function () {
  console.log("This function is being executed at the interval")
}, 1000);

//stop interval after 10 seconds
setTimeout(function () {
  clearInterval(intervalid);
  console.log("interval stopped")
}, 10000)