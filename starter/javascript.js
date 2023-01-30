//--------pseudocode--------//
//step 1 : add moment.js into the 'jumbotron' to display the date and time.

//step 2 : create my rows in html that will contain a time stamp, a textarea, am a save button.

//step 3 : use jquery to change the colours of each timeblock based on past, present, and future when the timeblock is viewed.

//step 4 : Allow a user to enter an event when they click a timeblock and allow them to save the value to local storage
$(document).ready(function(){
//creating an array of timestamps that i will try and create rows for - this will contain the time, a type box and a save button
let notification = $('#notification');
let saveEvent = $(".saveEvent");
let diary = $(".container");
let input = $(".description");
let currentDate = $("#currentTime");
// code to add date and time to currentDayID
var today = moment();


//code to live update the time
window.setInterval(function () {
    currentDate.html(moment().format("dddd, D MMMM YYYY, h:mm:ss a"))
}, 1000);


//function to display notification
saveEvent.on("click", function(){
    notification.removeClass("hide");
    setTimeout(function(){
    notification.addClass("hide");   
},2000)

//function to save description input and time to localStorage
let time = $(this).parent().attr("id");
let event = $(this).siblings(".description").val();

localStorage.setItem(time,event);


})

//function to check current time and adjust row bg colour to determine past/present/future
function hourStatus(){
    var currentHour = moment().hours();

    for(let i = 0; i < $(".time-block").length; i++){
    let hourID = parseInt($(".time-block")[i].getAttribute('id'));
    if (hourID < currentHour){
        $(".time-block")[i].classList.add("past");
    } else if(hourID == currentHour){
        $(".time-block")[i].classList.remove("past")
        $(".time-block")[i].classList.add("present");
    } else {
        $(".time-block")[i].classList.remove("past")
        $(".time-block")[i].classList.remove("present")
        $(".time-block")[i].classList.add("future")
    }
}
}
hourStatus();
})