
function handleMotionEvent(event) {

    var x = Math.floor(event.accelerationIncludingGravity.x);
    var y = Math.floor(event.accelerationIncludingGravity.y);
    var z = Math.floor(event.accelerationIncludingGravity.z);
    
    // Do something awesome.
    //if x, y, or z changes in value (not too small of a change) then count it as a step
    $("#deviceMotion").text(x + " " + y + " " + z);    
}
window.addEventListener('devicemotion', handleMotionEvent, true);

$(document).ready(function(){
    var dialogs = ["test 1",
                    "test 2",
                    "test 3",
                    "test 4"
        ];
    var currentDialog = 0;
    
    function showDialog (i){
        $("#dialogs").empty();
        $("#dialogs").append(dialogs[i]);
    }
    $("#contain").click(function(){
        showDialog(currentDialog)
        currentDialog++;
    });
    
})

  var highz = 0;
 
  window.addEventListener('devicemotion', function(eventData) {
    document.getElementById("doEvent").innerHTML = JSON.stringify(eventData);
  }
    