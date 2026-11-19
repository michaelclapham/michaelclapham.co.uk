var audio = document.getElementsByTagName("audio")[0];
var image = document.getElementsByTagName("img")[0];

image.onclick = function () {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

setInterval(function() {
    audio.play();
}, 30000);