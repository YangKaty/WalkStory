    var steps = 0;
    var lastZ;
function handleMotionEvent(event) {
    
    var z = event.accelerationIncludingGravity.z;

    //if z changes in value (not too small of a change) from a positive to negative then count it as a step
    
    if((lastZ > 0 && z < 0) && (lastZ - z > 0.25)) {
        steps++;
    }
    lastZ = z;
    $("#accel").text(z);    
    $("#steps").text(steps);
}
window.addEventListener('devicemotion', handleMotionEvent, true);

$(document).ready(function(){
    var dialogs = ["i HATE YOU",
                    "BUT I LOVE YOU",
                    "BUT I HATE YOU",
                    "AND I LOVE YOU",
                    "BAKA",
        ];
    var currentDialog = 0;
    $(".contain").click(function(){
        $("#dia").empty();
        if(currentDialog == dialogs.length){
            $("#dia").append("End");
        } else {
            $("#dia").append(dialogs[currentDialog]);
            currentDialog++;
        }
        
    })
    
    
})