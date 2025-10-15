// shared.js - Shared JavaScript for all subpages

// YouTube audio player functionality
class YouTubeAudioPlayer {
    constructor() {
        this.player = null;
        this.isPlaying = false;
        this.currentVideoId = null;

        // Create audio player elements
        this.createPlayerElements();

        // Set up event listeners
        this.setupEventListeners();
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

        // Create YouTube iframe (hidden)
        const iframe = document.createElement('iframe');
        iframe.id = 'youtube-player';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
    }

    setupEventListeners() {
        this.playBtn.addEventListener('click', () => {
            this.playMusic();
        });

        this.pauseBtn.addEventListener('click', () => {
            this.pauseMusic();
        });
    }

    playMusic() {
        // In a real implementation, this would load the YouTube iframe API
        // and play the audio from the specified video ID

        // For this placeholder, we'll just simulate the behavior
        console.log('Playing music from YouTube video');
        this.isPlaying = true;
        this.playBtn.style.display = 'none';
        this.pauseBtn.style.display = 'flex';

        // In a real implementation, you would use:
        // this.player.playVideo();
    }

    pauseMusic() {
        // For this placeholder, we'll just simulate the behavior
        console.log('Pausing music');
        this.isPlaying = false;
        this.pauseBtn.style.display = 'none';
        this.playBtn.style.display = 'flex';

        // In a real implementation, you would use:
        // this.player.pauseVideo();
    }

    loadVideo(videoId) {
        this.currentVideoId = videoId;
        console.log(`Loading YouTube video: ${videoId}`);

        // In a real implementation, you would use:
        // this.player.loadVideoById(videoId);
        // And set up the YouTube iframe API
    }
}

// Initialize the audio player when the page loads
document.addEventListener('DOMContentLoaded', function () {
    window.audioPlayer = new YouTubeAudioPlayer();

    // You would set the video ID based on the page content
    // For example: window.audioPlayer.loadVideo('dQw4w9WgXcQ');
});