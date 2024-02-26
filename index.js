
// Use to set volume; Keeping it quiet for now so it won't blast eardrums
function setHalfVolume() {
    var myAudio = document.getElementById("audio1");  
    myAudio.volume = 0.1;
}



// ? functionality (condition to test ? value if true : value if false; creates an ifelse statement); myAudio.pause must be set t pause, not play (else audio will not pause)o
function toggleBGM() {
    var myAudio = document.getElementById("audio1");
    return myAudio.paused ? myAudio.play() : myAudio.pause();
};
