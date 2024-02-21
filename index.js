

function setHalfVolume() {
    var myAudio = document.getElementById("audio1");  
    myAudio.volume = 0.1;
}


// Learn more about Javascript/autoplay rules; For now, good solution in Chrome (may need to test Firefox and Edge as well)
function playMusic() {
    var genshinbgm = document.getElementById("audio1");
    genshinbgm.muted = !genshinbgm.muted;
}
