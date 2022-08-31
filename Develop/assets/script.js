// displaying date, year and time at the top of the planner
var timeStamp = moment().format('LLL');
$('#currentDay').text(timeStamp);

// all the times of the working day in the calendar
var nineAm = moment("09:00:00 AM", "h:mm:ss A").format('ha');
$('#9am').text(nineAm);

var tenAm = moment("10:00:00 AM", "h:mm:ss A").format('ha');
$('#10am').text(tenAm);

var elevenAm = moment("11:00:00 AM", "h:mm:ss A").format('ha');
$('#11am').text(elevenAm);

var twelvePm = moment("12:00:00 PM", "h:mm:ss A").format('ha');
$('#12pm').text(twelvePm);

var onePm = moment("01:00:00 PM", "h:mm:ss A").format('ha');
$('#1pm').text(onePm);

var twoPm = moment("02:00:00 PM", "h:mm:ss A").format('ha');
$('#2pm').text(twoPm);

var threePm = moment("03:00:00 PM", "h:mm:ss A").format('ha');
$('#3pm').text(threePm);

var fourPm = moment("04:00:00 PM", "h:mm:ss A").format('ha');
$('#4pm').text(fourPm);

var fivePm = moment("05:00:00 PM", "h:mm:ss A").format('ha');
$('#5pm').text(fivePm);


// storing entered todo's into local storage
$('.saveBtn').on("click", function () {

    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $('.time');

    localStorage.setItem(time, text);
})

// $("#9am .description").val(localStorage.getItem("9am"));


// function timeTracker() {
//     var timeOnTracker = $('.hour');
//     var currentTime = moment().hour();

//     $(".todos").each(function () {
//         console.log(timeOnTracker, currentTime);
//     })
// }

// timeTracker()