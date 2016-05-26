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
    $("#steps").text(steps+" times");
}
function buttonRestart(){
steps = 0;    
alert("You have reset the counter.");
}




//if(steps % 3)
//{
// swooshSFX.play();
//}
window.addEventListener('devicemotion', handleMotionEvent, true);


$(document).ready( function(){
    
   var dialogs = [ 
                    "**You're just about done when you hear two people's voices.",
                    "??? : That was great! Don't you think? ",
                    "??? : It could have been better...",
                    "??? : Well you're not WRONG... Still, it wasn't THAT bad.",
                    "You : ...I'm right here , you know!",
                    "??? & ??? : We know.",
                    "**They walk up to you.",
                    "??? : Oh, you left one.",
                    "You : What do you mean?",
                    "**You turned around, and a slime who was still alive suddenly jumps onto your face and begins to suffocate you!!",
                    "You : WHAt THE- BLUGBH BLUGHB--",
                    "!! !! !!",
                    "\< Slash around with your device as if it were a sword! \>"
                    ];
            
    var currentDialog = 0;
        $("#akaSprite").hide();
        $("#diaSprite").hide();
    $(".contain").click(function(){
        $("#akaSprite").show();
        $("#diaSprite").show();
        $("#dialog").empty();
        if(currentDialog == dialogs.length){
            $("#dialog").append("...");
            $("#akaSprite").hide();
            $("#diaSprite").hide();
        } else {
            $("#dialog").append(dialogs[currentDialog]);
            currentDialog++;
        }
            $('#sword')[0].play();
            
        if (steps == 10){
            $("#dialog").append("done");
            
        }
        
    });
    
});