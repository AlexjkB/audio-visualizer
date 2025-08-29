import butterchurn from 'butterchurn';
import butterchurnPresets from 'butterchurn-presets';

const canvas = document.getElementById('visualizerCanvas');
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const width = window.innerWidth;
const height = window.innerHeight;

const visualizer = butterchurn.createVisualizer(audioContext, canvas, {
  width: width,
  height: height
});

const fileInput = document.getElementById('audioFileInput');

function loadAudioFile(file) {
  const reader = new FileReader();

  reader.onload = function (event) {
    const audioData = event.target.result;

    audioContext.decodeAudioData(audioData, (buffer) => {
      const audioSourceNode = audioContext.createBufferSource();
      audioSourceNode.buffer = buffer;

      visualizer.connectAudio(audioSourceNode);

      audioSourceNode.connect(audioContext.destination);

      const presets = butterchurnPresets.getPresets();
      const preset = presets['Flexi, martin + geiss - dedicated to the sherwin maxawow'];

      visualizer.loadPreset(preset, 0.0);

      visualizer.setRendererSize(window.innerWidth, window.innerHeight);

      audioSourceNode.start(0);

      animate();
    }, (error) => {
      console.error('Error decoding audio data:', error);
    });
  };

  reader.readAsArrayBuffer(file);
}

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    loadAudioFile(file);
  }
});

function animate() {
  visualizer.render();
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  visualizer.setRendererSize(window.innerWidth, window.innerHeight);
});
