//--------pseudocode--------//
//step 1 : add moment.js into the 'jumbotron' to display the date and time.

//step 2 : create my rows in html that will contain a time stamp, a textarea, am a save button.

//step 3 : use jquery to change the colours of each timeblock based on past, present, and future when the timeblock is viewed.

//step 4 : Allow a user to enter an event when they click a timeblock and allow them to save the value to local storage

//creating an array of timestamps that i will try and create rows for - this will contain the time, a type box and a save button
let notification = $('#notification');
let saveEvent = $(".saveEvent");
let diary = $(".container");
let input = $(".description");
let currentDay = $("#currentDay");
// code to add date and time to currentDayID
var today = moment();

//code to live update the time
window.setInterval(function () {
    currentDay.html(moment().format("dddd, D MMMM YYYY, h:mm:ss a"))
}, 1000);


//function to display notification
saveEvent.on("click", function(){
    notification.removeClass("hide");
    setTimeout(function(){
    notification.addClass("hide");   
},2000)
})