const playPauseButton = document.getElementById('play-pause');
const playIcon = document.getElementById('play-icon');
const audioPlayer = document.getElementById('audio-player');
const progressBar = document.getElementById('progress-bar');
const volumeButton = document.getElementById('volume-btn');
const volumeIcon = document.getElementById('volume-icon');
const volumeBar = document.getElementById('volume-bar');
const prevSongButton = document.getElementById('prev-song');
const nextSongButton = document.getElementById('next-song');
const albumCover = document.getElementById('album-cover');

// Canzoni
const songs = [
    { title: "Kiss me", artist: "Sixpence None The Richer", url: "song1.mp3", cover: "cover1.jpg" },
    { title: "Canzone", artist: "Lucio Dalla", url: "song2.mp3", cover: "cover2.jpg" },
    { title: "Chasing Cars", artist: "Snow Patrol", url: "song3.mp3", cover: "cover3.jpg" },
    { title: "Me gustas Tu", artist: "Manu Chao", url: "song4.mp3", cover: "cover4.jpg" },
    { title: "Enjoy The Silence", artist: "Depeche Mode", url: "song5.mp3", cover: "cover5.jpg" },
    { title: "Junk Of The Heart (Happy)", artist: "The Kooks", url: "song6.mp3", cover: "cover6.jpg" },
    { title: "Nothing's Gonna Hurt you baby", artist: "Cigarettes After Sex", url: "song7.mp3", cover: "cover7.jpg" },
    { title: "There is a Light That Never Goes Out", artist: "The Smiths", url: "song8.mp3", cover: "cover8.jpg" },

    { title: "I'll Be Your Mirror", artist: "The Velvet Underground", url: "song9.mp3", cover: "cover9.jpg" },
    { title: "Unintended", artist: "Muse", url: "song10.mp3", cover: "cover10.jpg" },
    { title: "Sailor Song", artist: "Gigi Perez", url: "song11.mp3", cover: "cover11.jpg" },
    { title: "You & Me", artist: "Disclosure, Flume", url: "song12.mp3", cover: "cover12.jpg" },
    { title: "Be My Baby", artist: "The Ronettes", url: "song13.mp3", cover: "cover13.jpg" },
    { title: "Eternal Flames", artist: "The Bangles", url: "song14.mp3", cover: "cover14.jpg" },
    { title: "Come Te", artist: "Fabri Fibra", url: "song15.mp3", cover: "cover15.jpg" },
    { title: "A Question of Lust", artist: "Depeche Mode", url: "song16.mp3", cover: "cover16.jpg" },
    { title: "Baby I'm Yours", artist: "Arctic Monkeys", url: "song17.mp3", cover: "cover17.jpg" },
    { title: "Never Let Me Go", artist: "Rachel Portman", url: "song18.mp3", cover: "cover18.jpg" },
    { title: "Just The Two Of Us", artist: "Grover Washington", url: "song19.mp3", cover: "cover19.jpg" },
    { title: "Bad", artist: "Wave To Earth", url: "song20.mp3", cover: "cover20.jpg" },
];

let currentSongIndex = 0;

// Canzone in riproduzione
function loadSong (index) {
    const song = songs[index];
    audioPlayer.src = song.url;
    albumCover.src = song.cover;
    document.getElementById('song-title').textContent = song.title;
    document.getElementById('song-artist').textContent = song.artist;
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');
    audioPlayer.play();
}

// Play / Pause 
playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
    } else {
        audioPlayer.pause();
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    }
});

// Progress bar
audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;
});

progressBar.addEventListener('input', (e) => {
    const newTime = (e.target.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = newTime;
});

// Controlli volume
volumeBar.addEventListener('input', () => {
    audioPlayer.volume = volumeBar.value / 100;
    if (audioPlayer.volume === 0) {
        volumeIcon.classList.remove('fa-volume-up');
        volumeIcon.classList.add('fa-volume-off');
    } else {
        volumeIcon.classList.remove('fa-volume-off');
        volumeIcon.classList.add('fa-volume-up');
    }
});

// Setup volume
audioPlayer.volume = volumeBar.value / 100;

// Canzone successiva
nextSongButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
});

// Canzone precedente
prevSongButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
});

// Carica la prima canzone
loadSong(currentSongIndex);
