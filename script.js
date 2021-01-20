// get current hour
let currentHour = new Date(Date.now()).getHours();
//let currentHour = dateTime.getHours();
console.log(`Current hour is ${currentHour}`);

let txtAreaArr = $("textarea");
// console.log(txtAreaArr);
console.log(txtAreaArr[1].hour);
// console.log($("textarea"));

// check hour in each textarea
for (let i = 0; i < txtAreaArr.length; i++) {
    console.log(txtAreaArr[i].dataset.hour);
    if 
    
}