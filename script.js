function playSound(soundFile) {
  var audio = new Audio('sounds/' + soundFile);
  audio.play();
}

function stopAllSounds() {
  var sounds = document.querySelectorAll('audio');
  sounds.forEach(function(sound) {
    sound.pause();
    sound.currentTime = 0;
  });
}
