import WaveSurfer from 'wavesurfer.js'
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.esm.js'

let wavesurfer, record;

const audioContext = new AudioContext();
const analyser = audioContext.createAnalyser();
analyser.fftSize = 1024;
const dataArray = new Float32Array(analyser.frequencyBinCount);

const createWaveSurfer = () => {
  if (wavesurfer) {
    wavesurfer.destroy();
  }

  wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'rgb(200, 0, 200)',
    progressColor: 'rgb(100, 0, 100)',
    plugins: [
      RecordPlugin.create({
        renderRecordedAudio: false,
      }),
    ],
  });

  record = wavesurfer.registerPlugin(RecordPlugin.create());
  record.on('record-end', (blob) => {
    const recordedUrl = URL.createObjectURL(blob);
  });

};

const micSelect = document.querySelector('#mic-select');
RecordPlugin.getAvailableAudioDevices().then((devices) => {
  devices.forEach((device) => {
    const option = document.createElement('option');
    option.value = device.deviceId;
    option.text = device.label || device.deviceId;
    micSelect.appendChild(option);
  });
});

const recButton = document.querySelector('#record');
recButton.onclick = () => {
  if (record.isRecording()) {
    record.stopRecording();
    recButton.textContent = 'Record';
    return;
  }

  recButton.disabled = true;

  const deviceId = micSelect.value;

  record.startRecording({ deviceId }).then(() => {
    recButton.textContent = 'Stop';
    recButton.disabled = false;
  });
};

const updateFrequencyData = () => {
  analyser.getFloatFrequencyData(dataArray);
  console.log(dataArray);
  requestAnimationFrame(updateFrequencyData);
};

const connectMicToAnalyser = (stream) => {
  const source = audioContext.createMediaStreamSource(stream);
  source.connect(analyser);
  analyser.connect(audioContext.destination);
  updateFrequencyData();
};

navigator.mediaDevices.getUserMedia({ audio: true })
  .then(connectMicToAnalyser)
  .catch((err) => {
    console.error('Error accessing microphone:', err);
  });



createWaveSurfer();
