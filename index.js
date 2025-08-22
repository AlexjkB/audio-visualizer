import WaveSurfer from 'wavesurfer.js'
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.esm.js'

let wavesurfer, record;
let scrollingWaveform = false;
let continuousWaveform = true;

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
        scrollingWaveform,
        continuousWaveform,
        continuousWaveformDuration: 30, 
      }),
    ],
  });

  record = wavesurfer.registerPlugin(RecordPlugin.create());
  record.on('record-end', (blob) => {
    const container = document.querySelector('#recordings');
    const recordedUrl = URL.createObjectURL(blob);

    const wavesurferInstance = WaveSurfer.create({
      container,
      waveColor: 'rgb(200, 100, 0)',
      progressColor: 'rgb(100, 50, 0)',
      url: recordedUrl,
    });

    const button = container.appendChild(document.createElement('button'));
    button.textContent = 'Play';
    button.onclick = () => wavesurferInstance.playPause();
    wavesurferInstance.on('pause', () => (button.textContent = 'Play'));
    wavesurferInstance.on('play', () => (button.textContent = 'Pause'));

    const link = container.appendChild(document.createElement('a'));
    Object.assign(link, {
      href: recordedUrl,
      download: 'recording.' + (blob.type.split(';')[0].split('/')[1] || 'webm'),
      textContent: 'Download recording',
    });
  });

  record.on('record-progress', (time) => {
    updateProgress(time);
  });
};

const progress = document.querySelector('#progress');
const updateProgress = (time) => {
  const formattedTime = [
    Math.floor((time % 3600000) / 60000), 
    Math.floor((time % 60000) / 1000), 
  ]
    .map((v) => (v < 10 ? '0' + v : v))
    .join(':');
  progress.textContent = formattedTime;
};

const pauseButton = document.querySelector('#pause');
pauseButton.onclick = () => {
  if (record.isPaused()) {
    record.resumeRecording();
    pauseButton.textContent = 'Pause';
    return;
  }

  record.pauseRecording();
  pauseButton.textContent = 'Resume';
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

document.querySelector('#scrollingWaveform').onclick = (e) => {
  scrollingWaveform = e.target.checked;
  if (continuousWaveform && scrollingWaveform) {
    continuousWaveform = false;
    document.querySelector('#continuousWaveform').checked = false;
  }
  createWaveSurfer();
};

document.querySelector('#continuousWaveform').onclick = (e) => {
  continuousWaveform = e.target.checked;
  if (continuousWaveform && scrollingWaveform) {
    scrollingWaveform = false;
    document.querySelector('#scrollingWaveform').checked = false;
  }
  createWaveSurfer();
};

createWaveSurfer();
