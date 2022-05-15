var todayDate = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function(){
    console.log('ready!')

    //attach an event listener to the save buttons
    $('.saveBtn').on('click', function(){
        //capture tasks when save button is clicked
        var task = $(this).siblings('textarea').val()
        var time = $(this).parent().attr('id')
        console.log(task, time)
        //save task in local storage
        localStorage.setItem(time, task)
    })

    function timeTracker() {
        var timeNow = moment().hour();
    // Split hours into blocks and add past, present and future classes
        $(".time-block").each(function () {
            var blockTime = $(this).attr("id").split('hr')[1];
    
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    //populate text area with save tasks
    $('#hr9 textarea').val(localStorage.getItem('hr9'))
    $('#hr10 textarea').val(localStorage.getItem('hr10'))
    $('#hr11 textarea').val(localStorage.getItem('hr11'))
    $('#hr12 textarea').val(localStorage.getItem('hr12'))
    $('#hr13 textarea').val(localStorage.getItem('hr13'))
    $('#hr14 textarea').val(localStorage.getItem('hr14'))
    $('#hr15 textarea').val(localStorage.getItem('hr15'))
    $('#hr16 textarea').val(localStorage.getItem('hr16'))
    $('#hr17 textarea').val(localStorage.getItem('hr17'))

    
    
    timeTracker();
})