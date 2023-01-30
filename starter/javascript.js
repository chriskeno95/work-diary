//--------pseudocode--------//
//step 1 : add moment.js into the 'jumbotron' to display the date and time.

//step 2 : create my rows in html that will contain a time stamp, a textarea, am a save button.

//step 3 : use jquery to change the colours of each timeblock based on past, present, and future when the timeblock is viewed.

//step 4 : Allow a user to enter an event when they click a timeblock and allow them to save the value to local storage
$(document).ready(function(){
//creating an array of timestamps that i will try and create rows for - this will contain the time, a type box and a save button
let notification = $('#notification');
let saveEvent = $(".saveEvent");
let currentDate = $("#currentTime");

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
let event = $(this).siblings(".description").val().trim();

localStorage.setItem(time,event);

})

//function to check current time and adjust row bg colour to determine past/present/future
function hourStatus(){
    var currentHour = moment().hours();
//first i set the current hour and create a forloop to run through the sections with the class 'time-block'
    for(let i = 0; i < $(".time-block").length; i++){
//secondly i grab the id from the classes and store the value as the hourID for each section
    let hourID = parseInt($(".time-block")[i].getAttribute('id'));
//thirdly i create if statements to compare the hourID with the current hour and execute code that will add or remove classes.
    if (hourID < currentHour){
        $(".time-block")[i].classList.add("past");
    } else if(hourID == currentHour){
        $(".time-block")[i].classList.remove("past")
        $(".time-block")[i].classList.add("present");
    // initially i tried $(".time-block")[i].addClass("present"); but this did not work so i have used $(".time-block")[i].classList.remove("past") - i got this from the speed run
    } else {
        $(".time-block")[i].classList.remove("past")
        $(".time-block")[i].classList.remove("present")
        $(".time-block")[i].classList.add("future")
    }
}
}
hourStatus();

//below i am selecting the description from every ID avaiable and setting the value for the textarea to be the value from the local storage with the key matching to the ID
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

})
