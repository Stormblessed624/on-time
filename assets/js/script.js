

var time = moment();

// current time and date
function openPlanner() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    // pull from localstorage
    $(".time-block").each(function () {
        var textLoad = $(this).attr("id");
        var schedule = localStorage.getItem(textLoad);
        if (schedule !== null) {
            $(this).children(".textarea").val(schedule);
        }
    });
}

// calling time and saved events
openPlanner();

// save text to localStorage
$(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var textarea = $(this).siblings(".textarea").val();
    localStorage.setItem(time, textarea);
})

// update the section colors
function colorCoding() {
  hour = time.hours();
  $(".time-block").each(function() {
      var currentHour = parseInt($(this).attr("id"));
      
      if (currentHour > hour) {
        $(this).removeClass(["past", "present"]).addClass("future");
      } 
      else if (currentHour === hour) {
        $(this).removeClass(["past", "future"]).addClass("present");
      } 
      else {
        $(this).removeClass(["present", "future"]).addClass("past");
      }
  });
}

colorCoding();

