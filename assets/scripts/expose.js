// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector("img");

  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();
  const hornSound = document.querySelector('audio');
  
  const audioControls = document.getElementById('volume');
  let audioPath = '';

  const volImage = document.querySelector('#volume-controls img');

  //event listener for changing the image of the horn
  hornSelect.addEventListener("change", (event) => {
    const imgPath = 'assets/images/' + event.target.value + '.svg';

    audioPath = 'assets/audio/' + event.target.value + '.mp3'
    hornSound.src = audioPath;

    hornImage.src = imgPath;
  });

  //event listener for clicking the play button to play sound
  playButton.addEventListener("click", () => {
    hornSound.volume = audioControls.value / 100;
    hornSound.play();

    if(audioPath == 'assets/audio/party-horn.mp3') {
      jsConfetti.addConfetti();
    }
  });
  
  //event listener for changing the volume of the horn
  audioControls.addEventListener("input", () => {

    if(audioControls.value >= 1 && audioControls.value < 33) {
      volImage.src = 'assets/icons/volume-level-1.svg';
    } else if(audioControls.value >= 33 && audioControls.value < 67) {
      volImage.src = 'assets/icons/volume-level-2.svg';
    } else if (audioControls.value >= 67) {
      volImage.src = 'assets/icons/volume-level-3.svg';
    } else {
      volImage.src = 'assets/icons/volume-level-0.svg';
    }

  });
}