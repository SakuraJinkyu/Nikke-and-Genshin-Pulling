
// Use to set volume; Updated to add Nikke audio
function setHalfVolume() {
    var gameAudio = document.getElementsByClassName("audioVolume");
    gameAudio[0].volume = 0.1;
    gameAudio[1].volume = 0.1;
}



// Better functionality; addEventListener to load the DOM, add a playing class whenever the audio is playing (can add CSS to this as well for extra functionality)
document.addEventListener("DOMContentLoaded", function() {
    const genshinButton = document.getElementById("button-audio-genshin");
    const genshinAudio = document.getElementById("audio-genshin");
    const nikkeButton = document.getElementById("button-audio-nikke");
    const nikkeAudio = document.getElementById("audio-nikke");

    genshinButton.addEventListener("click", function() {
        if (genshinAudio.paused) {
            genshinAudio.play();
            genshinButton.classList.add("playing");
        } else {
            genshinAudio.pause();
            genshinButton.classList.remove("playing");
        }
    });

    nikkeButton.addEventListener("click", function() {
        if (nikkeAudio.paused) {
            nikkeAudio.play();
            nikkeButton.classList.add("playing");
        } else {
            nikkeAudio.pause();
            nikkeButton.classList.remove("playing");
        }
    });
});
