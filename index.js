
// Use to set volume; Updated to add Nikke audio
function setHalfVolume() {
    var gameAudio = document.getElementsByClassName("audioVolume");
    gameAudio[0].volume = 0.1;
    gameAudio[1].volume = 0.1;
}



// ? functionality (condition to test ? value if true : value if false; creates an ifelse statement); myAudio.pause must be set t pause, not play (else audio will not pause)o
function toggleGenshin() {
    var genshinAudio = document.getElementById("audio-genshin");
    return genshinAudio.paused ? genshinAudio.play() : genshinAudio.pause();
};

function toggleNikke() {
    var nikkeAudio = document.getElementById("audio-nikke");
    return nikkeAudio.paused ? nikkeAudio.play() : nikkeAudio.pause();
};
