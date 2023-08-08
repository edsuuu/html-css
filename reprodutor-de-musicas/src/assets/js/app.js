function playSong(song, songName) {
    var audioPlayer =
        document.getElementById("music-player");
    var currentSong = document.getElementById("current-song");
    audioPlayer.src = song;
    currentSong.textContent = "Tocando: " + songName;
}