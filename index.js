

function setHalfVolume() {
    var myAudio = document.getElementById("audio1");  
    myAudio.volume = 0.1;
}

// Test code to play audio for Github Pages (Java issue?)
  var hasPlayed = false;
  var audio = new Audio(
    "https://raw.githubusercontent.com/SakuraJinkyu/Nikke-and-Genshin-Pulling/audio/genshin-bgm.mp3"
  );
  function playAudio() {
    // This func will check if the file hasPlayed and then will disable after first interaction.
    if (!hasPlayed) {
      audio.play();
      hasPlayed = true;
    }
  }
  document.addEventListener("click", playAudio);

// Set a onclick function for the two Nav's (current plan, change color to blue, and add a hover)
