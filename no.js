document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play-button');
    const audio = document.getElementById('audio');

    playButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playButton.textContent = '⏸️ Pausar Música';
        } else {
            audio.pause();
            playButton.textContent = '▶️ Reproducir Música';
        }
    });
});