$(document).ready(function () {

    // Counter Function

    var count = 0;
    $('.counterBtn').on('click', function () {
        if (this.id == 'decreaseCounter') {
            count--;
            $('#counterValue').text(count);
        }
        else {
            count++;
            $('#counterValue').text(count);
        }
    })
    $('.reset').on('click', function () {
        count = 0
        $('#counterValue').text(count);
    });

    // Timer Function
    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        var setTimerFunction = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                clearInterval(setTimerFunction)
                $('.timerBtn').prop('disabled', false);
                $('.stopTimerBtn').prop('disabled', true);
            }
        }, 1000);
        $('.stopTimerBtn').on('click', function () {
            clearInterval(setTimerFunction);
            $('.timerBtn').prop('disabled', false);
            display.textContent = "00:00";
            $(this).prop('disabled', true)
        });

    }
    $('.timerBtn').on('click', function () {
        var userInput = $('#userTime').val();
        var userMinutes = 60 * userInput,
            display = document.querySelector('#time');
        startTimer(userMinutes, display);
        $(this).prop('disabled', true);
        $('.stopTimerBtn').prop('disabled', false);
    });

    // FAQ Content
    $('.faq__toggle').on('click', function () {
        $(this).next().slideToggle('slow');
    });

    // Tab Section

    $('.navBtn').click(function () {
        var id = this.id
        var target = document.getElementsByClassName(id)
        $('.navBox__Content').removeClass('active');
        $(target).addClass('active');
    });

    //  TO DO App

    $('.addTaskBtn').on('click', function () {
        var task = $('#addTask').val();
        if (task.length > 0) {
            var $li = "<li class='toDo__Box__Content'>" +
                "<span>" + task + "</span>" +
                "<button class=" + " removeTaskBtn " + "type='button'> &times; </button>";
            $('.toDo__Box').append($li);
        }
        else {
            alert('Task can not be Blank')
        }
    });

    $('.toDo__Box').on('click', '.removeTaskBtn', function () {
        $(this).closest('li').remove();
    });

    // Calculator App
    function generateBtn(value){
        $('.buttonBox').append("<button class='calcNumBtn' value="+value+">"+value+"</button>");
    }
    for(let i=9;i>=0;i--){
         generateBtn(i);
    }
    var symbols = ['+','-','*','/','%']
    symbols.forEach(element => {
        generateBtn(element);
    });
    
    generateBtn("=")
    
    function display(value){
        $('.outputValue').text(value);
    }

    $('.calcNumBtn').on('click',function(){
        var value = "";
        value = String(value) +  String($(this).text()); 
        display(value)
    });




});