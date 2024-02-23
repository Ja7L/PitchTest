
function init() {
    var source;
    var audioContext = new (window.AudioContext || window.webkitAudioContext)();
    var analyser = audioContext.createAnalyser();
    analyser.minDecibels = -100;
    analyser.maxDecibels = -10;
    analyser.smoothingTimeConstant = 0.85;
    if (!navigator?.mediaDevices?.getUserMedia) {
        // No audio allowed
        alert('getUserMedia is required')
        return;
    } else {
        var constraints = { audio: true };
        navigator.mediaDevices.getUserMedia(constraints)
            .then(
                function (stream) {
                    // Initialize the SourceNode
                    source = audioContext.createMediaStreamSource(stream);
                    // Connect the source node to the analyzer
                    source.connect(analyser);
                    visualize();
                }
            )
            .catch(function (err) {
                alert('Microphone Required');
            });
    }
  
    // Visualizing, copied from voice change o matic
    var canvas = document.querySelector('.visualizer');
  
    var canvasContext = canvas.getContext("2d");
  
    var WIDTH;
    var HEIGHT;
  
    function visualize() {
        WIDTH = canvas.width;
        HEIGHT = canvas.height;
  
        const drawFrequency = () => {
            const bufferLengthAlt = analyser.frequencyBinCount;
            const dataArrayAlt = new Uint8Array(bufferLengthAlt);
  
            canvasContext.clearRect(0, 0, WIDTH, HEIGHT);
  
            const drawAlt = () => {
                const drawVisual = requestAnimationFrame(drawAlt);
  
                analyser.getByteFrequencyData(dataArrayAlt);
  
                canvasContext.fillStyle = 'rgb(255, 255, 255)';
                canvasContext.fillRect(0, 0, WIDTH, HEIGHT);
  
                const barWidth = (WIDTH / bufferLengthAlt) * 2.5;
                let x = 0;
  
                for (let i = 0; i < bufferLengthAlt; i++) {
                    const barHeight = dataArrayAlt[i];
  
                    // Change color scheme
                    let red, green;
  
                    if (barHeight < 128) {
                        red = 255;
                        green = barHeight;
                    } else {
                        red = 255 - barHeight;
                        green = 255;
                    }
                    let blue = 100;
  
                    canvasContext.fillStyle = `rgb(${red}, ${green}, ${blue})`;
                    canvasContext.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight / 2);
  
                    x += barWidth + 1;
                }
            };
  
            drawAlt();
        };
  
        drawFrequency();
  
        // Thanks to PitchDetect: https://github.com/cwilso/PitchDetect/blob/master/js/pitchdetect.js
        var noteStrings = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
        function noteFromPitch(frequency) {
            // Calculate the note number based on the frequency
            var noteNum = 12 * (Math.log(frequency / 440) / Math.log(2));
  
            // Round the note number and add the MIDI note number offset
            var midiNoteNum = Math.round(noteNum) + 69;
  
            return midiNoteNum;
        }
  
  
        const drawNote = () => {
            const drawVisual = requestAnimationFrame(drawNote);
            const bufferLength = analyser.fftSize;
            const buffer = new Float32Array(bufferLength);
            analyser.getFloatTimeDomainData(buffer);
            const pitch = autoCorrelate(buffer, audioContext.sampleRate);
  
            let pitchDisplay = 'Too quiet...';
            let noteDisplay = 'Too quiet...';
            if (pitch !== -1) {
                // Round to nearest Hz
                const roundedPitch = Math.round(pitch);
                pitchDisplay = `Pitch: ${roundedPitch} Hz`;
  
                // Get closest note
                const noteIndex = noteFromPitch(pitch) % 12;
                noteDisplay = `Note: ${noteStrings[noteIndex]}`;
            }
  
            document.getElementById('pitch').innerText = pitchDisplay;
            document.getElementById('note').innerText = noteDisplay;
        };
  
  
        drawNote();
    }
  }
  
  
  /*
  The MIT License (MIT)
  
  Copyright (c) 2014 Chris Wilson
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
  */
  
  // AutoCorrelate from https://github.com/cwilso/PitchDetect/pull/23
  
  function autoCorrelate(buffer, sampleRate) {
  
    var SIZE = buffer.length;
    var sumOfSquares = 0;
    for (var i = 0; i < SIZE; i++) {
        var val = buffer[i];
        sumOfSquares += val * val;
    }
    var rootMeanSquare = Math.sqrt(sumOfSquares / SIZE)
    if (rootMeanSquare < 0.01) {
        return -1;
    }
  
    var r1 = 0;
    var r2 = SIZE - 1;
    var threshold = 0.2;
  
    for (var i = 0; i < SIZE / 2; i++) {
        if (Math.abs(buffer[i]) < threshold) {
            r1 = i;
            break;
        }
    }
  
    for (var i = 1; i < SIZE / 2; i++) {
        if (Math.abs(buffer[SIZE - i]) < threshold) {
            r2 = SIZE - i;
            break;
        }
    }
  
    buffer = buffer.slice(r1, r2);
    SIZE = buffer.length
  
    var c = new Array(SIZE).fill(0);
  
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE - i; j++) {
            c[i] = c[i] + buffer[j] * buffer[j + i]
        }
    }
  
    var d = 0;
    while (c[d] > c[d + 1]) {
        d++;
    }
  
    var maxValue = -1;
    var maxIndex = -1;
    for (var i = d; i < SIZE; i++) {
        if (c[i] > maxValue) {
            maxValue = c[i];
            maxIndex = i;
        }
    }
  
    var T0 = maxIndex;
  
    var x1 = c[T0 - 1];
    var x2 = c[T0];
    var x3 = c[T0 + 1]
  
    var a = (x1 + x3 - 2 * x2) / 2;
    var b = (x3 - x1) / 2
    if (a) {
        T0 = T0 - b / (2 * a);
    }
  
    return sampleRate / T0;
  }
  