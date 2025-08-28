// Import Butterchurn and Butterchurn presets
import butterchurn from 'butterchurn';
import butterchurnPresets from 'butterchurn-presets';

// Get the canvas element and initialize the audio context
const canvas = document.getElementById('visualizerCanvas');
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const width = window.innerWidth;
const height = window.innerHeight;

// Initialize the Butterchurn visualizer
const visualizer = butterchurn.createVisualizer(audioContext, canvas, {
  width: width,
  height: height
});

// Get the file input element
const fileInput = document.getElementById('audioFileInput');

// Function to load and play the uploaded audio file
function loadAudioFile(file) {
    // Create an audio element and a file reader
    const reader = new FileReader();

    reader.onload = function (event) {
        const audioData = event.target.result;
        
        // Decode the audio data into an AudioBuffer
        audioContext.decodeAudioData(audioData, (buffer) => {
            // Create a buffer source node
            const audioSourceNode = audioContext.createBufferSource();
            audioSourceNode.buffer = buffer;
            
            // Connect the audio node to the visualizer
            visualizer.connectAudio(audioSourceNode);

            // Connect the audio node to the audio context's destination (speakers)
            audioSourceNode.connect(audioContext.destination);

            // Load a preset from Butterchurn's preset collection
            const presets = butterchurnPresets.getPresets();
            const preset = presets['Flexi, martin + geiss - dedicated to the sherwin maxawow']; // Example preset

            // Load the preset into the visualizer
            visualizer.loadPreset(preset, 0.0); // Blend to preset over 0 seconds

            // Resize the visualizer
            visualizer.setRendererSize(window.innerWidth, window.innerHeight);

            // Start the audio playback
            audioSourceNode.start(0);
            
            // Start rendering the visualizer
            animate();
        }, (error) => {
            console.error('Error decoding audio data:', error);
        });
    };

    // Read the audio file as an ArrayBuffer
    reader.readAsArrayBuffer(file);
}

// Event listener to handle file uploads
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        loadAudioFile(file);
    }
});

// Render function to continuously update the visualizer
function animate() {
    visualizer.render();
    requestAnimationFrame(animate);
}

// Optional: Resize the visualizer dynamically on window resize
window.addEventListener('resize', () => {
    visualizer.setRendererSize(window.innerWidth, window.innerHeight);
});
