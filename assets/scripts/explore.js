// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  //create necessary variables
  const synth = window.speechSynthesis;
  const voiceSelection = document.getElementById('voice-select');

  const speakButton = document.querySelector('button');
  let toSpeak = document.getElementById('text-to-speak');

  let voices;
  const face = document.querySelector('img');

  function loadVoices() {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.value = i;
      voiceSelection.appendChild(option);
    }
  }

  if ("onvoiceschanged" in synth) {
    synth.onvoiceschanged = loadVoices;
  } else {
    loadVoices();
  }
  

  speakButton.addEventListener('click', () => {
    if (voiceSelection.value === 'select') { return; }
    let utterance = new SpeechSynthesisUtterance(toSpeak.value);
    utterance.voice = voices[voiceSelection.value];
    synth.speak(utterance);
    face.src = 'assets/images/smiling-open.png';

    utterance.addEventListener('end', () => {
      face.src = 'assets/images/smiling.png';
    });

  });
}

