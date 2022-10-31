//Current day is displayed at the top of the calendar
$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));

//Each timeblock is color coded to indicate whether is is in the past, present or future
function timeColorCode() {
    //Set current time in hours to a variable 
    var currentHour = moment().hours();

    $('.time-block').each(function() {
        //Sets hour to the respective id of each time block
        var hour = parseInt($(this).attr('id'));
        //If the hour of the timeblock is less than the currentHour,
        if (hour < currentHour) {
            //Add class = 'past'
            $(this).addClass('past');
        //if the hour is the same as the currentHour,
        } else if (hour == currentHour) {
            //Add class = 'present'
            $(this).addClass('present');
        //If the hour is greater than the currentHour,
        } else {
            //Add class = 'future'
            $(this).addClass('future');
        };
    });
};