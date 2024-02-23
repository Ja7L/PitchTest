
function playNote(noteName) {
    var audio = document.getElementById(noteName)
    audio.currentTime = 0;
    audio.play();

}

function keyPressed() {
    button = document.getElementById("pianoTest");
    button.innerHTML = "WHITE"
}

document.addEventListener('keydown', function(event) {
    if (event.key.toLowerCase() == 'a') {
        playNote('C3');
        letter = document.getElementById('1');
        letter.style.backgroundImage = "linear-gradient(150deg, #7d5fff, #ff73a1)";
    }
    if (event.key.toLowerCase() == 'w') {
        playNote('C#3');
        letter = document.getElementById('2');
        letter.style.backgroundImage = "linear-gradient(150deg, #7d5fff, #ff73a1)";
    }
    if (event.key.toLowerCase() == 's') {
        playNote('D3');
        letter = document.getElementById('3');
        letter.style.backgroundImage = "linear-gradient(150deg, #7d5fff, #ff73a1)";
    }
    if (event.key.toLowerCase() == 'e') {
        playNote('D#3');
        letter = document.getElementById('4');
        letter.style.backgroundImage = "linear-gradient(150deg, #7d5fff, #ff73a1)";
    }
    if (event.key.toLowerCase() == 'd') {
        playNote('E3');
        letter = document.getElementById('5');
        letter.style.backgroundImage = "linear-gradient(150deg, #7d5fff, #ff73a1)";
    }
    if (event.key.toLowerCase() == 'f') {
        playNote('F3');
        letter = document.getElementById('6');
        letter.style.backgroundImage = "linear-gradient(150deg, #7d5fff, #ff73a1)";
    }
    if (event.key.toLowerCase() == 't') {
        playNote('F#3');
        letter = document.getElementById('7');
        letter.style.backgroundImage = "linear-gradient(150deg, #7d5fff, #ff73a1)";
    }
    if (event.key.toLowerCase() == 'g') {
        playNote('G3');
        letter = document.getElementById('8');
        letter.style.backgroundImage = "linear-gradient(150deg, #7d5fff, #ff73a1)";
    }
    if (event.key.toLowerCase() == 'y') {
        playNote('G#3');
        letter = document.getElementById('9');
        letter.style.backgroundImage = "linear-gradient(150deg, #7d5fff, #ff73a1)";
    }
    if (event.key.toLowerCase() == 'h') {
        playNote('A3');
        letter = document.getElementById('10');
        letter.style.backgroundImage = "linear-gradient(150deg, #7d5fff, #ff73a1)";
    }
    if (event.key.toLowerCase() == 'u') {
        playNote('Bb3');
        letter = document.getElementById('11');
        letter.style.backgroundImage = "linear-gradient(150deg, #7d5fff, #ff73a1)";
    }
    if (event.key.toLowerCase() == 'j') {
        playNote('B3');
        letter = document.getElementById('12');
        letter.style.backgroundImage = "linear-gradient(150deg, #7d5fff, #ff73a1)";
    }





    if (event.key.toLowerCase() == 'k') {
        playNote('C');
        letter = document.getElementById('13');
        letter.style.backgroundImage = "linear-gradient(150deg, #7d5fff, #ff73a1)";
    }
    if (event.key.toLowerCase() == 'o') {
        playNote('C#');
        letter = document.getElementById('14');
        letter.style.backgroundImage = "linear-gradient(150deg, #7d5fff, #ff73a1)";
    }
    if (event.key.toLowerCase() == 'l') {
        playNote('D');
        letter = document.getElementById('15');
        letter.style.backgroundImage = "linear-gradient(150deg, #7d5fff, #ff73a1)";
    }
    if (event.key.toLowerCase() == 'p') {
        playNote('D#');
        letter = document.getElementById('16');
        letter.style.backgroundImage = "linear-gradient(150deg, #7d5fff, #ff73a1)";
    }
    if (event.key.toLowerCase() == ';') {
        playNote('E');
        letter = document.getElementById('17');
        letter.style.backgroundImage = "linear-gradient(150deg, #7d5fff, #ff73a1)";
    }

    if (event.key.toLowerCase() === "'") {
        playNote('F');
        letter = document.getElementById('18');
        letter.style.backgroundImage = "linear-gradient(150deg, #7d5fff, #ff73a1)";
    }
    if (event.key.toLowerCase() == "]") {
        playNote('F#');
        letter = document.getElementById('19');
        letter.style.backgroundImage = "linear-gradient(150deg, #7d5fff, #ff73a1)";
    }
    if (event.key.toLowerCase() == '1') {
        playNote('G');
        letter = document.getElementById('20');
        letter.style.backgroundImage = "linear-gradient(150deg, #7d5fff, #ff73a1)";
    }
    if (event.key.toLowerCase() == '2') {
        playNote('G#');
        letter = document.getElementById('21');
        letter.style.backgroundImage = "linear-gradient(150deg, #7d5fff, #ff73a1)";
    }
    if (event.key.toLowerCase() == '3') {
        playNote('A');
        letter = document.getElementById('22');
        letter.style.backgroundImage = "linear-gradient(150deg, #7d5fff, #ff73a1)";
    }
    if (event.key.toLowerCase() == '4') {
        playNote('Bb');
        letter = document.getElementById('23');
        letter.style.backgroundImage = "linear-gradient(150deg, #7d5fff, #ff73a1)";
    }
    if (event.key.toLowerCase() == '5') {
        playNote('B');
        letter = document.getElementById('24');
        letter.style.backgroundImage = "linear-gradient(150deg, #7d5fff, #ff73a1)";
    }

});
document.addEventListener('keyup', function(event) {
    if (event.key.toLowerCase() == 'a') {
        letter = document.getElementById('1');
        letter.style.backgroundImage = "";
    }
    if (event.key.toLowerCase() == 'w') {
        letter = document.getElementById('2');
        letter.style.backgroundImage = "";
    }
    if (event.key.toLowerCase() == 's') {
        letter = document.getElementById('3');
        letter.style.backgroundImage = "";
    }
    if (event.key.toLowerCase() == 'e') {
        letter = document.getElementById('4');
        letter.style.backgroundImage = "";
    }
    if (event.key.toLowerCase() == 'd') {
        letter = document.getElementById('5');
        letter.style.backgroundImage = "";
    }
    if (event.key.toLowerCase() == 'f') {
        letter = document.getElementById('6');
        letter.style.backgroundImage = "";
    }
    if (event.key.toLowerCase() == 't') {
        letter = document.getElementById('7');
        letter.style.backgroundImage = "";
    }
    if (event.key.toLowerCase() == 'g') {
        letter = document.getElementById('8');
        letter.style.backgroundImage = "";
    }
    if (event.key.toLowerCase() == 'y') {
        letter = document.getElementById('9');
        letter.style.backgroundImage = "";
    }
    if (event.key.toLowerCase() == 'h') {
        letter = document.getElementById('10');
        letter.style.backgroundImage = "";
    }
    if (event.key.toLowerCase() == 'u') {
        letter = document.getElementById('11');
        letter.style.backgroundImage = "";
    }
    if (event.key.toLowerCase() == 'j') {
        letter = document.getElementById('12');
        letter.style.backgroundImage = "";
    }

    if (event.key.toLowerCase() == 'k') {
        letter = document.getElementById('13');
        letter.style.backgroundImage = "";
    }
    if (event.key.toLowerCase() == 'o') {
        letter = document.getElementById('14');
        letter.style.backgroundImage = "";
    }
    if (event.key.toLowerCase() == 'l') {
        letter = document.getElementById('15');
        letter.style.backgroundImage = "";
    }
    if (event.key.toLowerCase() == 'p') {
        letter = document.getElementById('16');
        letter.style.backgroundImage = "";
    }
    if (event.key.toLowerCase() == ';') {
        letter = document.getElementById('17');
        letter.style.backgroundImage = "";
    }
    if (event.key.toLowerCase() === "'") {
        letter = document.getElementById('18');
        letter.style.backgroundImage = "";
    }
    if (event.key.toLowerCase() == ']') {
        letter = document.getElementById('19');
        letter.style.backgroundImage = "";
    }
    if (event.key.toLowerCase() == '1') {
        letter = document.getElementById('20');
        letter.style.backgroundImage = "";
    }
    if (event.key.toLowerCase() == '2') {
        letter = document.getElementById('21');
        letter.style.backgroundImage = "";
    }
    if (event.key.toLowerCase() == '3') {
        letter = document.getElementById('22');
        letter.style.backgroundImage = "";
    }
    if (event.key.toLowerCase() == '4') {
        letter = document.getElementById('23');
        letter.style.backgroundImage = "";
    }
    if (event.key.toLowerCase() == '5') {
        letter = document.getElementById('24');
        letter.style.backgroundImage = "";
    }
});
/*
<audio id="C3" src="/static/C3.mp3"></audio>
<audio id="C#3" src="/static/Db3.mp3"></audio>
<audio id="D3" src="/static/D3.mp3"></audio>
<audio id="D#3" src="/static/Eb3.mp3"></audio>
<audio id="E3" src="/static/E3.mp3"></audio>
<audio id="F3" src="/static/F3.mp3"></audio>
<audio id="F#3" src="/static/Gb3.mp3"></audio>
<audio id="G3" src="/static/G3.mp3"></audio>
<audio id="G#3" src="/static/Ab3.mp3"></audio>
<audio id="A3" src="/static/A3.mp3"></audio>
<audio id="Bb3" src="/static/Bb3.mp3"></audio>
<audio id="B3" src="/static/B3.mp3"></audio>

<audio id="C" src="/static/C4.mp3"></audio>
<audio id="C#" src="/static/Cs4.mp3"></audio>
<audio id="D" src="/static/D4.mp3"></audio>
<audio id="D#" src="/static/Ds4.mp3"></audio>
<audio id="E" src="/static/E4.mp3"></audio>
<audio id="F" src="/static/F4.mp3"></audio>
<audio id="F#" src="/static/Fs4.mp3"></audio>
<audio id="G" src="/static/G4.mp3"></audio>
<audio id="G#" src="/static/Gs4.mp3"></audio>
<audio id="A" src="/static/A4.mp3"></audio>
<audio id="Bb" src="/static/Bb4.mp3"></audio>
<audio id="B" src="/static/B4.mp3"></audio>

*/
