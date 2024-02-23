function playNote(noteName) {
    var audio = document.getElementById(noteName)
    audio.currentTime = 0;
    audio.play();
}

function keyPressed() {
    button = document.getElementById("pianoTest");
    button.innerHTML = "WHITE"
}

document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector(".scrollCard");

    card.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


