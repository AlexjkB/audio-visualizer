import WaveSurfer from 'wavesurfer.js'
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.esm.js'

let wavesurfer, record;

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

    button.textContent = 'Play';
    button.onclick = () => wavesurferInstance.playPause();
    wavesurferInstance.on('pause', () => (button.textContent = 'Play'));
    wavesurferInstance.on('play', () => (button.textContent = 'Pause'));
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
  if (record.isRecording() || record.isPaused()) {
    record.stopRecording();
    recButton.textContent = 'Record';
    pauseButton.style.display = 'none';
    return;
  }

  recButton.disabled = true;

  const deviceId = micSelect.value;

  record.startRecording({ deviceId }).then(() => {
    recButton.textContent = 'Stop';
    recButton.disabled = false;
    pauseButton.style.display = 'inline';
  });
};


createWaveSurfer();
