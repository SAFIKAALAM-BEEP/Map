// shared.js - Shared JavaScript for all subpages

// YouTube audio player functionality
class YouTubeAudioPlayer {
    constructor() {
        this.player = null;
        this.isPlaying = false;
        this.currentVideoId = null;
        this.isPlayerReady = false;

        // Create audio player elements
        this.createPlayerElements();

        // Load YouTube IFrame API
        this.loadYouTubeAPI();
    }

    createPlayerElements() {
        // Create play/pause button
        const playerContainer = document.createElement('div');
        playerContainer.className = 'music-player';

        this.playBtn = document.createElement('button');
        this.playBtn.className = 'play-btn';
        this.playBtn.innerHTML = '▶';
        this.playBtn.title = 'Play Music';

        this.pauseBtn = document.createElement('button');
        this.pauseBtn.className = 'pause-btn';
        this.pauseBtn.innerHTML = '❚❚';
        this.pauseBtn.title = 'Pause Music';
        this.pauseBtn.style.display = 'none';

        playerContainer.appendChild(this.playBtn);
        playerContainer.appendChild(this.pauseBtn);

        document.body.appendChild(playerContainer);

        // Create YouTube iframe container (hidden initially)
        this.iframeContainer = document.createElement('div');
        this.iframeContainer.id = 'youtube-player-container';
        this.iframeContainer.style.cssText = `
            position: fixed;
            top: -1000px;
            left: -1000px;
            width: 100px;
            height: 100px;
            overflow: hidden;
        `;

        this.iframe = document.createElement('div');
        this.iframe.id = 'youtube-player';
        this.iframeContainer.appendChild(this.iframe);

        document.body.appendChild(this.iframeContainer);

        // Set up event listeners
        this.setupEventListeners();
    }

    loadYouTubeAPI() {
        // Load YouTube IFrame API script
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // Set up global callback for when API is ready
        window.onYouTubeIframeAPIReady = () => {
            this.initializePlayer();
        };
    }

    initializePlayer() {
        this.player = new YT.Player('youtube-player', {
            height: '100',
            width: '100',
            playerVars: {
                'autoplay': 0,
                'controls': 0,
                'disablekb': 1,
                'fs': 0,
                'iv_load_policy': 3,
                'modestbranding': 1,
                'playsinline': 1,
                'rel': 0,
                'showinfo': 0
            },
            events: {
                'onReady': (event) => {
                    this.isPlayerReady = true;
                    console.log('YouTube player is ready');

                    // Set video quality to low for better audio performance
                    event.target.setPlaybackQuality('small');
                },
                'onStateChange': (event) => {
                    this.handlePlayerStateChange(event.data);
                },
                'onError': (error) => {
                    console.error('YouTube player error:', error);
                }
            }
        });
    }

    setupEventListeners() {
        this.playBtn.addEventListener('click', () => {
            this.playMusic();
        });

        this.pauseBtn.addEventListener('click', () => {
            this.pauseMusic();
        });

        // Stop music when leaving page
        window.addEventListener('beforeunload', () => {
            if (this.player && this.isPlaying) {
                this.player.stopVideo();
            }
        });
    }

    handlePlayerStateChange(state) {
        switch (state) {
            case YT.PlayerState.PLAYING:
                this.isPlaying = true;
                this.playBtn.style.display = 'none';
                this.pauseBtn.style.display = 'flex';
                break;
            case YT.PlayerState.PAUSED:
            case YT.PlayerState.ENDED:
                this.isPlaying = false;
                this.pauseBtn.style.display = 'none';
                this.playBtn.style.display = 'flex';
                break;
        }
    }

    playMusic() {
        if (!this.isPlayerReady || !this.player) {
            console.log('Player not ready yet');
            return;
        }

        if (this.currentVideoId) {
            if (this.isPlaying) {
                this.player.pauseVideo();
            } else {
                this.player.playVideo();
            }
        } else {
            console.log('No video loaded');
        }
    }

    pauseMusic() {
        if (this.isPlayerReady && this.player && this.isPlaying) {
            this.player.pauseVideo();
        }
    }

    loadVideo(videoId) {
        this.currentVideoId = videoId;
        console.log(`Loading YouTube video: ${videoId}`);

        if (this.isPlayerReady && this.player) {
            this.player.loadVideoById(videoId);
            // Set video to start at beginning and ensure it's loaded
            this.player.seekTo(0, true);
        } else {
            // If player isn't ready, set up a retry mechanism
            const checkReady = setInterval(() => {
                if (this.isPlayerReady && this.player) {
                    clearInterval(checkReady);
                    this.player.loadVideoById(videoId);
                    this.player.seekTo(0, true);
                }
            }, 100);
        }
    }

    // Method to set volume (0-100)
    setVolume(volume) {
        if (this.isPlayerReady && this.player) {
            this.player.setVolume(volume);
        }
    }

    // Method to get current time
    getCurrentTime() {
        if (this.isPlayerReady && this.player) {
            return this.player.getCurrentTime();
        }
        return 0;
    }

    // Method to seek to specific time
    seekTo(seconds) {
        if (this.isPlayerReady && this.player) {
            this.player.seekTo(seconds, true);
        }
    }
}

// Initialize the audio player when the page loads
document.addEventListener('DOMContentLoaded', function () {
    window.audioPlayer = new YouTubeAudioPlayer();

    // Set default volume
    setTimeout(() => {
        window.audioPlayer.setVolume(50); // 50% volume
    }, 2000);

    // Example: Load a specific video for each page
    // You would customize this based on your page content
    const pageVideoMap = {
        'library.html': 'XuVT7RJijAo', // Example video ID
        'highschool.html': '_fIk-MHq-dU',
        'chrysanthemum.html': '9iFDPYubUbE',
        'controller.html': 'JRlCyZRU34I',
        'hello_world.html': 'Yw6u6YkTgQ4',
        'my_world.html': 'Z0CzWoj8i5g',
        'home.html': 'yS2KyK3pqj4'
    };

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    if (currentPage in pageVideoMap) {
        window.audioPlayer.loadVideo(pageVideoMap[currentPage]);
    } else {
        // Default video for index page or other pages
        window.audioPlayer.loadVideo('dQw4w9WgXcQ'); // Example default
    }
});