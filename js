// Saját zene adatbázis - SAJÁT zenéiddel
const musicDatabase = [
    {
        id: 1,
        title: "Az én zeném 1",
        artist: "Az én neveim",
        genre: "pop",
        mood: "upbeat",
        cover: "images/cover1.jpg",
        audioUrl: "https://tudomain.github.io/soundwave/audio/song1.mp3",
        duration: "3:45",
        featured: true,
        popular: true
    },
    {
        id: 2,
        title: "Az én zeném 2", 
        artist: "Az én neveim",
        genre: "rock",
        mood: "energetic",
        cover: "images/cover2.jpg",
        audioUrl: "https://tudomain.github.io/soundwave/audio/song2.mp3",
        duration: "4:20",
        featured: true,
        popular: true
    },
    {
        id: 3,
        title: "Az én zeném 3",
        artist: "Az én neveim",
        genre: "electronic",
        mood: "chill",
        cover: "images/cover3.jpg",
        audioUrl: "https://tudomain.github.io/soundwave/audio/song3.mp3",
        duration: "3:15",
        featured: false,
        popular: true
    }
    // Add hozzá a többi zenéd...
];

// HTML5 Audio Player
let audioPlayer;
let currentSongIndex = 0;
let isPlaying = false;
let progressInterval;

// Audio player inicializálása
function initializeAudioPlayer() {
    audioPlayer = new Audio();
    audioPlayer.preload = "none"; // Csak streamelés
    
    // Eseményfigyelők
    audioPlayer.addEventListener('loadedmetadata', function() {
        updateDuration();
    });
    
    audioPlayer.addEventListener('timeupdate', function() {
        updateProgress();
    });
    
    audioPlayer.addEventListener('ended', function() {
        nextSong();
    });
    
    audioPlayer.addEventListener('canplaythrough', function() {
        console.log('✅ Zene készen áll a lejátszásra');
    });
    
    console.log('✅ HTML5 Audio Player kész');
}

// Zene betöltése
function loadSong(index, autoPlay = true) {
    const song = musicDatabase[index];
    console.log('🎵 Zene betöltése:', song.title);
    
    // Előző zene leállítása
    if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }
    
    // Felület frissítése
    document.getElementById('current-song-title').textContent = song.title;
    document.getElementById('current-song-artist').textContent = song.artist;
    document.getElementById('current-song-thumb').src = song.cover;
    
    currentSongIndex = index;
    
    // Új zene betöltése
    audioPlayer.src = song.audioUrl;
    audioPlayer.load();
    
    // Automatikus lejátszás
    if (autoPlay) {
        setTimeout(() => {
            playCurrentSong();
        }, 500);
    }
    
    // Kedvenc állapot frissítése
    updateFavoriteIcon(song.id);
}

// Lejátszás
function playCurrentSong() {
    if (audioPlayer) {
        audioPlayer.play().then(() => {
            isPlaying = true;
            updatePlayButton();
            document.querySelector('.player').classList.add('playing');
            startProgressUpdate();
            console.log('▶️ Lejátszás elindítva');
        }).catch(error => {
            console.error('❌ Lejátszási hiba:', error);
            showToast('Kattints az oldalra a lejátszáshoz');
        });
    }
}

// Play/Pause
function togglePlayPause() {
    if (!audioPlayer) return;
    
    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
        stopProgressUpdate();
    } else {
        audioPlayer.play().then(() => {
            isPlaying = true;
            startProgressUpdate();
        }).catch(error => {
            console.error('Lejátszási hiba:', error);
        });
    }
    updatePlayButton();
    updatePlayerAnimation();
}

// Play gomb frissítése
function updatePlayButton() {
    const playIcon = document.querySelector('#play-pause i');
    if (isPlaying) {
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
    } else {
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    }
}

// Player animáció
function updatePlayerAnimation() {
    if (isPlaying) {
        document.querySelector('.player').classList.add('playing');
    } else {
        document.querySelector('.player').classList.remove('playing');
    }
}

// Progress frissítése
function updateProgress() {
    if (audioPlayer && audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        document.getElementById('progress').style.width = `${progressPercent}%`;
        document.getElementById('current-time').textContent = formatTime(audioPlayer.currentTime);
    }
}

// Idő formázása
function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
}

// Duration frissítése
function updateDuration() {
    if (audioPlayer.duration) {
        document.getElementById('duration').textContent = formatTime(audioPlayer.duration);
    }
}

// Progress intervallum indítása
function startProgressUpdate() {
    stopProgressUpdate();
    progressInterval = setInterval(updateProgress, 1000);
}

// Progress intervallum leállítása
function stopProgressUpdate() {
    if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
    }
}

// Progress beállítása kattintásra
function setProgress(e) {
    if (!audioPlayer || !audioPlayer.duration) return;
    
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    
    const seekTime = (clickX / width) * duration;
    audioPlayer.currentTime = seekTime;
}

// Hangerő beállítása
function setVolume() {
    const volume = document.getElementById('volume-slider').value;
    if (audioPlayer) {
        audioPlayer.volume = volume;
    }
    
    // Hangerő ikon frissítése
    const volumeIcon = document.getElementById('volume-icon');
    if (volume == 0) {
        volumeIcon.classList.remove('fa-volume-up');
        volumeIcon.classList.remove('fa-volume-down');
        volumeIcon.classList.add('fa-volume-mute');
    } else if (volume < 0.5) {
        volumeIcon.classList.remove('fa-volume-up');
        volumeIcon.classList.remove('fa-volume-mute');
        volumeIcon.classList.add('fa-volume-down');
    } else {
        volumeIcon.classList.remove('fa-volume-down');
        volumeIcon.classList.remove('fa-volume-mute');
        volumeIcon.classList.add('fa-volume-up');
    }
}

// Következő szám
function nextSong() {
    let nextIndex = (currentSongIndex + 1) % musicDatabase.length;
    loadSong(nextIndex, isPlaying);
}

// Előző szám
function prevSong() {
    let prevIndex = (currentSongIndex - 1 + musicDatabase.length) % musicDatabase.length;
    loadSong(prevIndex, isPlaying);
}

// Kedvenc állapot frissítése
function updateFavoriteIcon(songId) {
    const isFavorite = appState.favorites.includes(songId);
    document.getElementById('player-favorite').className = isFavorite ? 
        'fas fa-heart favorite active' : 'far fa-heart';
}

// Kedvenc hozzáadása/eltávolítása
function toggleFavorite(songId) {
    const index = appState.favorites.indexOf(songId);
    if (index === -1) {
        appState.favorites.push(songId);
        showToast('Hozzáadva a kedvencekhez');
    } else {
        appState.favorites.splice(index, 1);
        showToast('Eltávolítva a kedvencekből');
    }
    updateFavoriteIcon(songId);
}

// Zene kártya létrehozása
function createSongCard(song, index) {
    const isFavorite = appState.favorites.includes(song.id);
    
    const songCard = document.createElement('div');
    songCard.className = 'song-card';
    songCard.setAttribute('data-id', song.id);
    
    songCard.innerHTML = `
        <img src="${song.cover}" alt="${song.title}" class="album-cover">
        <div class="song-actions">
            <i class="${isFavorite ? 'fas' : 'far'} fa-heart favorite-btn ${isFavorite ? 'active' : ''}"></i>
            <i class="fas fa-plus add-to-playlist-btn"></i>
        </div>
        <div class="song-card-content">
            <div class="song-card-title">${song.title}</div>
            <div class="song-card-artist">${song.artist}</div>
        </div>
    `;
    
    // Eseményfigyelők
    songCard.addEventListener('click', (e) => {
        if (!e.target.closest('.song-actions')) {
            loadSong(index, true);
        }
    });
    
    const favBtn = songCard.querySelector('.favorite-btn');
    favBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(song.id);
        favBtn.className = appState.favorites.includes(song.id) ? 
            'fas fa-heart favorite-btn active' : 'far fa-heart favorite-btn';
    });
    
    return songCard;
}

// Zenék renderelése
function renderSongs() {
    const container = document.getElementById('home-songs');
    container.innerHTML = '';
    
    musicDatabase.forEach((song, index) => {
        container.appendChild(createSongCard(song, index));
    });
}

// Toast értesítés
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Alkalmazás állapota
const appState = {
    currentSongIndex: 0,
    isPlaying: false,
    favorites: [],
    playlists: {
        'favorites': { name: 'Kedvencek', songs: [] },
        'chill': { name: 'Chill zenék', songs: [1, 3] }
    }
};

// Inicializálás
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ SoundWave Player elindítva');
    
    // Audio player inicializálása
    initializeAudioPlayer();
    
    // Eseményfigyelők
    document.getElementById('play-pause').addEventListener('click', togglePlayPause);
    document.getElementById('next').addEventListener('click', nextSong);
    document.getElementById('prev').addEventListener('click', prevSong);
    document.getElementById('progress-bar').addEventListener('click', setProgress);
    document.getElementById('volume-slider').addEventListener('input', setVolume);
    document.getElementById('player-favorite').addEventListener('click', () => {
        const currentSong = musicDatabase[currentSongIndex];
        toggleFavorite(currentSong.id);
    });
    
    // Alapértelmezett hangerő
    document.getElementById('volume-slider').value = 0.7;
    setVolume();
    
    // Zenék betöltése
    renderSongs();
    
    // Első zene betöltése
    loadSong(0, false);
    
    console.log('🎵 SoundWave kész! Kattints egy zénére.');
    
    // Autoplay engedélyezése - user interakció után
    document.body.addEventListener('click', function initAutoplay() {
        console.log('✅ Autoplay engedélyezve');
        document.body.removeEventListener('click', initAutoplay);
    });
});
