var audio = document.getElementsByTagName("audio")[0];

audio.autoplay = true;

setInterval(function() {
    audio.play();
}, 20000);