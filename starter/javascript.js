//--------pseudocode--------//
//step 1 : add moment.js into the 'jumbotron' to display the date and time.

//step 2 : create my rows in html that will contain a time stamp, a textarea, am a save button.

//step 3 : use jquery to change the colours of each timeblock based on past, present, and future when the timeblock is viewed.

//step 4 : Allow a user to enter an event when they click a timeblock and allow them to save the value to local storage

let currentDay = $("#currentDay");
// code to add date and time to currentDayID
var today = moment();

//code to live update the time
window.setInterval(function () {
    currentDay.html(moment().format("dddd, D MMMM YYYY, h:mm:ss a"))
}, 1000);
