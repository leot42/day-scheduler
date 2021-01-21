
var localStorage = window.localStorage;
var txtAreaArr = $("textarea");
populateTextAreas(localStorage);
// get current hour
var currentHour = new Date(Date.now()).getHours();
//let currentHour = dateTime.getHours();
console.log(`Current hour is ${currentHour}`);

// console.log(txtAreaArr);
//console.log(txtAreaArr[1].hour);
// console.log($("textarea"));

// check hour in each textarea and add a time class
for (let i = 0; i < txtAreaArr.length; i++) {
    console.log(txtAreaArr[i].dataset.hour);
    if (txtAreaArr[i].dataset.hour == currentHour) { txtAreaArr[i].classList.add("present");}
    if (txtAreaArr[i].dataset.hour > currentHour) { txtAreaArr[i].classList.add("future");}
    if (txtAreaArr[i].dataset.hour < currentHour) { txtAreaArr[i].classList.add("past");}

    //test code
    // access parent node
    let parent = txtAreaArr[i].parentElement;
    // console.log(parent);
    let textAreaId = parent.getElementsByTagName("textarea")[0].id;
    console.log(`AreaId = ${textAreaId}`);
    let textAreaValue = parent.getElementsByTagName("textarea")[0].innerHTML;
    console.log(`Stored text = ${textAreaValue}`);
    parent.getElementsByTagName("textarea")[0].value = localStorage.getItem(textAreaId);
    console.log(`loggeg value is ${textAreaValue}`); // 
    
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

console.log(`local storage ${localStorage}`);

function populateTextAreas(localStorage) {
    for (let i = 0; i < localStorage.length-1; i++) {
        // const element = localStorage[i-1];
        console.log(localStorage.get);
    }

}