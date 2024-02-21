

function setHalfVolume() {
    var myAudio = document.getElementById("audio1");  
    myAudio.volume = 0.1;
}

// Set a onclick function for the two Nav's (current plan, change color to blue, and add a hover)

// Testing toggle JS function; Create const for what's being queried, then can use aria-pressed in HTML to trigger button (if, else to set the audio to pause or play). 
const toggleBtn = document.querySelector("#button-audio");
const genshinbgm = document.querySelector("audio1")

// listen for when the button is clicked, and call toggle when so
toggleBtn.addEventListener("click", toggle);

function toggle(){
  // always unmute the audio
  audio.muted = false;

  // is the button currently 'pressed'?
  const pressed = toggleBtn.getAttribute("aria-pressed") === "true";
  
  // toggle the audio based-on the state of the button
  if(pressed) audio.pause();
  else        audio.play();

  // update the state of the button
  toggleBtn.setAttribute("aria-pressed", !pressed);
}// toggle
