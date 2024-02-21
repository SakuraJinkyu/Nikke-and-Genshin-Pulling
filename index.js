

function setHalfVolume() {
    var myAudio = document.getElementById("audio1");  
    myAudio.volume = 0.1;
}

// Set a onclick function for the two Nav's (current plan, change color to blue, and add a hover)

// If this doesn't work, will need to do more research on javascript audio setups (possibly an if else statement)
function playMusic() {
    var genshinbgm = document.getElementById("audio1");
    genshinbgm.muted = !genshinbgm.muted;
}
