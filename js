// YouTube Music Database with your exact embed codes
const musicDatabase = [
    {
        id: 1,
        title: "Levitating",
        artist: "Dua Lipa ft. DaBaby",
        genre: "pop",
        mood: "upbeat",
        cover: "https://i.ytimg.com/vi/TUVcZfQe-Kw/hqdefault.jpg",
        embedCode: '<iframe width="1048" height="729" src="https://www.youtube.com/embed/TUVcZfQe-Kw" title="Dua Lipa - Levitating Featuring DaBaby (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        youtubeId: "TUVcZfQe-Kw",
        featured: true,
        popular: true
    },
    {
        id: 2,
        title: "SICKO MODE",
        artist: "Travis Scott ft. Drake",
        genre: "hip-hop",
        mood: "intense",
        cover: "https://i.ytimg.com/vi/6ONRf7h3Mdk/hqdefault.jpg",
        embedCode: '<iframe width="1296" height="729" src="https://www.youtube.com/embed/6ONRf7h3Mdk?list=RD6ONRf7h3Mdk" title="Travis Scott - SICKO MODE (Official Video) ft. Drake" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        youtubeId: "6ONRf7h3Mdk",
        featured: true,
        popular: true
    },
    {
        id: 3,
        title: "FE!N",
        artist: "Travis Scott ft. Playboi Carti",
        genre: "hip-hop",
        mood: "intense",
        cover: "https://i.ytimg.com/vi/B9synWjqBn8/hqdefault.jpg",
        embedCode: '<iframe width="1296" height="729" src="https://www.youtube.com/embed/B9synWjqBn8?list=RDB9synWjqBn8" title="Travis Scott - FE!N ft. Playboi Carti" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        youtubeId: "B9synWjqBn8",
        featured: false,
        popular: true
    },
    {
        id: 4,
        title: "SAD!",
        artist: "XXXTENTACION",
        genre: "hip-hop",
        mood: "emotional",
        cover: "https://i.ytimg.com/vi/pgN-vvVVxMA/maxresdefault.jpg",
        embedCode: '<iframe width="1296" height="729" src="https://www.youtube.com/embed/pgN-vvVVxMA?list=RDpgN-vvVVxMA" title="XXXTENTACION - SAD!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        youtubeId: "pgN-vvVVxMA",
        featured: true,
        popular: true
    },
    {
        id: 5,
        title: "Tek Tek",
        artist: "Juicce, Ishimaru",
        genre: "electronic",
        mood: "energetic",
        cover: "https://i.ytimg.com/vi/dzo0UoPHZPU/hqdefault.jpg",
        embedCode: '<iframe width="1296" height="729" src="https://www.youtube.com/embed/dzo0UoPHZPU?list=RDdzo0UoPHZPU" title="Juicce, Ishimaru - Tek Tek Tek (Official Audio)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        youtubeId: "dzo0UoPHZPU",
        featured: true,
        popular: true
    }
];

// YouTube Player Variables
let youtubePlayer;
let currentSongIndex = 0;
let isPlaying = false;
let progressInterval;
let userInteracted = false;

// YouTube IFrame API Ready
function onYouTubeIframeAPIReady() {
    console.log('✅ YouTube API Ready');
    
    youtubePlayer = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: '',
        playerVars: {
            'playsinline': 1,
            'controls': 0,
            'disablekb': 1,
            'enablejsapi': 1,
            'fs': 0,
            'rel': 0,
            'modestbranding': 1,
            'autoplay': 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': onPlayerError
        }
    });
}

function onPlayerReady(event) {
    console.log('✅ YouTube Player Ready');
    loadSong(0, false);
}

function onPlayerStateChange(event) {
    console.log('🎵 Player State:', getStateName(event.data));
    
    switch(event.data) {
        case YT.PlayerState.PLAYING:
            isPlaying = true;
            updatePlayButton();
            document.querySelector('.player').classList.add('playing');
            startProgressUpdate();
            break;
        case YT.PlayerState.PAUSED:
            isPlaying = false;
            updatePlayButton();
            document.querySelector('.player').classList.remove('playing');
            stopProgressUpdate();
            break;
        case YT.PlayerState.ENDED:
            nextSong();
            break;
    }
}

function onPlayerError(event) {
    console.error('❌ YouTube Player Error:', event.data);
    showToast('YouTube error: ' + getYouTubeError(event.data));
}

function getStateName(state) {
    const states = {
        '-1': 'UNSTARTED',
        '0': 'ENDED', 
        '1': 'PLAYING',
        '2': 'PAUSED',
        '3': 'BUFFERING',
        '5': 'CUED'
    };
    return states[state] || 'UNKNOWN';
}

function getYouTubeError(errorCode) {
    const errors = {
        2: 'Invalid URL',
        5: 'HTML5 error',
        100: 'Video not found',
        101: 'Embedding not allowed',
        150: 'Embedding not allowed'
    };
    return errors[errorCode] || 'Unknown error';
}

// Load Song using your embed codes
function loadSong(index, autoPlay = true) {
    const song = musicDatabase[index];
    console.log('🎵 Loading song:', song.title);
    
    // Update UI
    document.getElementById('current-song-title').textContent = song.title;
    document.getElementById('current-song-artist').textContent = song.artist;
    document.getElementById('current-song-thumb').src = song.cover;
    
    currentSongIndex = index;
    
    // Load YouTube video using the ID from your embed code
    if (youtubePlayer && youtubePlayer.loadVideoById) {
        youtubePlayer.loadVideoById(song.youtubeId);
        console.log('✅ YouTube video loaded:', song.youtubeId);
        
        if (autoPlay && userInteracted) {
            setTimeout(() => {
                playCurrentSong();
            }, 1000);
        }
    }
    
    updateFavoriteIcon(song.id);
    
    if (autoPlay && !userInteracted) {
        showToast('Click the page first, then click a song!');
    }
}

// Play Current Song
function playCurrentSong() {
    if (youtubePlayer && userInteracted) {
        console.log('▶️ Starting playback...');
        youtubePlayer.playVideo();
    } else if (!userInteracted) {
        showToast('Please click the page first!');
    }
}

// Play/Pause
function togglePlayPause() {
    if (!youtubePlayer || !userInteracted) {
        showToast('Please click the page first!');
        return;
    }
    
    if (isPlaying) {
        youtubePlayer.pauseVideo();
        console.log('⏸️ Paused');
        showToast('Paused');
    } else {
        youtubePlayer.playVideo();
        console.log('▶️ Playing');
        showToast('Playing');
    }
}

// Update Play Button
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

// Player Animation
function updatePlayerAnimation() {
    if (isPlaying) {
        document.querySelector('.player').classList.add('playing');
    } else {
        document.querySelector('.player').classList.remove('playing');
    }
}

// Progress Update
function updateProgress() {
    if (youtubePlayer && youtubePlayer.getCurrentTime && youtubePlayer.getDuration) {
        const currentTime = youtubePlayer.getCurrentTime();
        const duration = youtubePlayer.getDuration();
        
        if (duration > 0) {
            const progressPercent = (currentTime / duration) * 100;
            document.getElementById('progress').style.width = `${progressPercent}%`;
            document.getElementById('current-time').textContent = formatTime(currentTime);
            document.getElementById('duration').textContent = formatTime(duration);
        }
    }
}

// Format Time
function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
}

// Progress Interval
function startProgressUpdate() {
    stopProgressUpdate();
    progressInterval = setInterval(updateProgress, 1000);
}

function stopProgressUpdate() {
    if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
    }
}

// Seek Progress
function setProgress(e) {
    if (!youtubePlayer || !userInteracted) return;
    
    const width = this.clientWidth;
    const clickX = e.offsetX;
    
    youtubePlayer.getDuration((duration) => {
        const seekTime = (clickX / width) * duration;
        youtubePlayer.seekTo(seekTime, true);
    });
}

// Volume Control
function setVolume() {
    const volume = document.getElementById('volume-slider').value * 100;
    if (youtubePlayer && youtubePlayer.setVolume) {
        youtubePlayer.setVolume(volume);
    }
    
    const volumeIcon = document.getElementById('volume-icon');
    if (volume == 0) {
        volumeIcon.classList.remove('fa-volume-up');
        volumeIcon.classList.remove('fa-volume-down');
        volumeIcon.classList.add('fa-volume-mute');
    } else if (volume < 50) {
        volumeIcon.classList.remove('fa-volume-up');
        volumeIcon.classList.remove('fa-volume-mute');
        volumeIcon.classList.add('fa-volume-down');
    } else {
        volumeIcon.classList.remove('fa-volume-down');
        volumeIcon.classList.remove('fa-volume-mute');
        volumeIcon.classList.add('fa-volume-up');
    }
}

// Next Song
function nextSong() {
    if (!userInteracted) {
        showToast('Please click the page first!');
        return;
    }
    
    let nextIndex = (currentSongIndex + 1) % musicDatabase.length;
    console.log('⏭️ Next song:', musicDatabase[nextIndex].title);
    loadSong(nextIndex, isPlaying);
}

// Previous Song
function prevSong() {
    if (!userInteracted) {
        showToast('Please click the page first!');
        return;
    }
    
    let prevIndex = (currentSongIndex - 1 + musicDatabase.length) % musicDatabase.length;
    console.log('⏮️ Previous song:', musicDatabase[prevIndex].title);
    loadSong(prevIndex, isPlaying);
}

// Favorite Functions
function updateFavoriteIcon(songId) {
    const isFavorite = appState.favorites.includes(songId);
    document.getElementById('player-favorite').className = isFavorite ? 
        'fas fa-heart favorite active' : 'far fa-heart';
}

function toggleFavorite(songId) {
    const index = appState.favorites.indexOf(songId);
    if (index === -1) {
        appState.favorites.push(songId);
        showToast('Added to favorites');
    } else {
        appState.favorites.splice(index, 1);
        showToast('Removed from favorites');
    }
    updateFavoriteIcon(songId);
}

// Create Song Card
function createSongCard(song, index) {
    const isFavorite = appState.favorites.includes(song.id);
    
    const songCard = document.createElement('div');
    songCard.className = 'song-card';
    songCard.setAttribute('data-id', song.id);
    
    songCard.innerHTML = `
        <img src="${song.cover}" alt="${song.title}" class="album-cover">
        <div class="song-actions">
            <i class="${isFavorite ? 'fas' : 'far'} fa-heart favorite-btn ${isFavorite ? 'active' : ''}"></i>
        </div>
        <div class="song-card-content">
            <div class="song-card-title">${song.title}</div>
            <div class="song-card-artist">${song.artist}</div>
        </div>
    `;
    
    songCard.addEventListener('click', (e) => {
        if (!e.target.closest('.song-actions')) {
            console.log('🎵 Clicked:', song.title);
            
            if (!userInteracted) {
                userInteracted = true;
                console.log('✅ User interaction recorded');
                showToast('Ready! Loading music...');
            }
            
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

// Render Songs
function renderSongs() {
    const container = document.getElementById('home-songs');
    if (!container) {
        console.error('❌ home-songs container not found');
        return;
    }
    
    container.innerHTML = '';
    musicDatabase.forEach((song, index) => {
        container.appendChild(createSongCard(song, index));
    });
    console.log('✅ Songs rendered:', musicDatabase.length);
}

// Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// App State
const appState = {
    currentSongIndex: 0,
    isPlaying: false,
    favorites: []
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ SoundWave YouTube Player Started');
    
    // Create YouTube player div if it doesn't exist
    if (!document.getElementById('youtube-player')) {
        const playerDiv = document.createElement('div');
        playerDiv.id = 'youtube-player';
        playerDiv.style.display = 'none';
        document.body.appendChild(playerDiv);
        console.log('✅ YouTube player div created');
    }
    
    // User interaction handler
    document.body.addEventListener('click', function initUserInteraction() {
        if (!userInteracted) {
            userInteracted = true;
            console.log('✅ User interaction - autoplay enabled');
            showToast('Ready! Click on songs to play.');
        }
    });
    
    // Event listeners
    document.getElementById('play-pause').addEventListener('click', togglePlayPause);
    document.getElementById('next').addEventListener('click', nextSong);
    document.getElementById('prev').addEventListener('click', prevSong);
    document.getElementById('progress-bar').addEventListener('click', setProgress);
    document.getElementById('volume-slider').addEventListener('input', setVolume);
    document.getElementById('player-favorite').addEventListener('click', () => {
        const currentSong = musicDatabase[currentSongIndex];
        toggleFavorite(currentSong.id);
    });
    
    // Default volume
    document.getElementById('volume-slider').value = 0.7;
    setVolume();
    
    // Render songs
    renderSongs();
    
    console.log('🎵 SoundWave ready! First click the page, then click songs.');
});
