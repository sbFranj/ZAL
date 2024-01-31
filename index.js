
document.addEventListener('DOMContentLoaded', function () {
    var enlaceMusica = document.getElementById('enlaceMusica');
    var audio = document.getElementById('pistaMusical');

    enlaceMusica.addEventListener('click', function (event) {
       

        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    });
});

document.getElementById('abrir').addEventListener('click', function() {
    var contenidoSobre = document.getElementById('contenidoSobre');
    contenidoSobre.classList.toggle('visible'); 
})