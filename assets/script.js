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

//Calls timeColorCode to color code each hour 
timeColorCode();

//Access element using class
var saveBtn = $('.saveBtn');

//Add click event to saveBtn element to save description to localStorage
saveBtn.on('click', function() {
    //Sets respective hour class text to a variable
    var time = $(this).siblings('.hour').text();
    //Sets respective description value to a variable
    var description = $(this).siblings('.description').val();

    //Save time and description as an object in localStorage
    localStorage.setItem(time, description);
});

//Saved events persist after refreshed page
function renderDescription() {
    $('.hour').each(function() {
        //Sets respective hour class text to a variable
        var hour = $(this).text();
        //Retrieve data for each respective hour from local storage
        var description = localStorage.getItem(hour);

        //If a description exists
        if (description !== null) {
            //Set value to the respective description 
            $(this).siblings('.description').val(description);
        };
    });
};

//Calls renderDescription to persist saved events after refreshing
renderDescription();
