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

function getList() {
    // pulls items from the local storage to planner
    $("#9").html(localStorage.getItem("9"));
    $("#10").html(localStorage.getItem("10"));
    $("#11").html(localStorage.getItem("11"));
    $("#12").html(localStorage.getItem("12"));
    $("#1").html(localStorage.getItem("1"));
    $("#2").html(localStorage.getItem("2"));
    $("#3").html(localStorage.getItem("3"));
    $("#4").html(localStorage.getItem("4"));
    $("#5").html(localStorage.getItem("5"));
}

// storing entered todo's into local storage
$('.saveBtn').on("click", function () {

    var text = $(this).siblings("textarea").val();
    var time = $(this).attr("index");

    localStorage.setItem(time, text);
})

// compares the time of day to the time on the tracker and applies css stylings
function timeTracker() {
    $('.time').each(function () {
        var timeOnTracker = parseInt($(this).attr('id'));

        // I changed the hours to show in a standard format to match the convential timing I used as opposed to 24hr time
        var currentTime = moment().hour();
        console.log(timeOnTracker, currentTime);
        if (timeOnTracker < currentTime) {
            $(".description-" + timeOnTracker).addClass("past")
            $(".description-" + timeOnTracker).removeClass("future")
            $(".description-" + timeOnTracker).removeClass("present")
        }

        else if (timeOnTracker === currentTime) {
            $(".description-" + timeOnTracker).removeClass("past");
            $(".description-" + timeOnTracker).addClass("present");
            $(".description-" + timeOnTracker).removeClass("future");
        }
        else {
            $(".description-" + timeOnTracker).removeClass("present");
            $(".description-" + timeOnTracker).removeClass("past");
            $(".description-" + timeOnTracker).addClass("future");
        }
    })
}
getList()
timeTracker()