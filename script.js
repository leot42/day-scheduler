// get current hour
let currentHour = new Date(Date.now()).getHours();
//let currentHour = dateTime.getHours();
console.log(`Current hour is ${currentHour}`);

let txtAreaArr = $("textarea");
// console.log(txtAreaArr);
console.log(txtAreaArr[1].hour);
// console.log($("textarea"));

// check hour in each textarea and add a time class
for (let i = 0; i < txtAreaArr.length; i++) {
    console.log(txtAreaArr[i].dataset.hour);
    if (txtAreaArr[i].dataset.hour == currentHour) { txtAreaArr[i].classList.add("present");}
    if (txtAreaArr[i].dataset.hour > currentHour) { txtAreaArr[i].classList.add("future");}
    if (txtAreaArr[i].dataset.hour < currentHour) { txtAreaArr[i].classList.add("past");}

    //test code
    // test access parent node
    let parent = txtAreaArr[i].parentElement;
    // console.log(parent);
    //var textArea = parent.getElementsByTagName("textarea")[0];
    var btnSave = parent.getElementsByTagName("button")[0];

    btnSave.addEventListener("click", logClick)
}

// save text to local storage 
function  logClick(event) {
    let txtArea = event.srcElement.parentElement.getElementsByTagName("textarea")[0];
    txtId = txtArea.id;
    txtValue = txtArea.value;
    //event.srcElement.value
    localStorage.setItem(txtId,txtValue)
}

let localStorage = window.localStorage;
console.log(`local storage ${localStorage}`);