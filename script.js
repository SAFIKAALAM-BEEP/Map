// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Define page data with YouTube video IDs and background colors
    const pageData = {
        highschool: {
            videoId: 'dQw4w9WgXcQ', // Example: Rick Astley - Never Gonna Give You Up
            bgColor: '#FF6B6B',
            title: 'Highschool'
        },
        friends: {
            videoId: 'fJ9rUzIMcZQ', // Example: Queen - Bohemian Rhapsody
            bgColor: '#4ECDC4',
            title: 'Friends'
        },
        hello_world: {
            videoId: '9bZkp7q19f0', // Example: PSY - GANGNAM STYLE
            bgColor: '#45B7D1',
            title: 'Hello World'
        },
        dna: {
            videoId: 'kJQP7kiw5Fk', // Example: Luis Fonsi - Despacito
            bgColor: '#96CEB4',
            title: 'DNA'
        },
        chrysanthemum: {
            videoId: 'JGwWNGJdvx8', // Example: Ed Sheeran - Shape of You
            bgColor: '#FECA57',
            title: 'Chrysanthemum'
        },
        home: {
            videoId: 'n61ULEU7CO0', // Example: Journey - Don't Stop Believin'
            bgColor: '#6A0572',
            title: 'Home'
        },
        cake: {
            videoId: 'kJQP7kiw5Fk', // Example: Luis Fonsi - Despacito
            bgColor: '#AB83A1',
            title: 'Cake'
        },
        library: {
            videoId: 'fJ9rUzIMcZQ', // Example: Queen - Bohemian Rhapsody
            bgColor: '#F0C987',
            title: 'Library'
        },
        origin: {
            videoId: 'dQw4w9WgXcQ', // Example: Rick Astley - Never Gonna Give You Up
            bgColor: '#5C6BC0',
            title: 'Origin'
        },
        my_world: {
            videoId: '9bZkp7q19f0', // Example: PSY - GANGNAM STYLE
            bgColor: '#2A9D8F',
            title: 'My World'
        }
    };

    // Add click event listeners to all nodes
    const nodes = document.querySelectorAll('.center-node, .outer-node');
    nodes.forEach(node => {
        node.addEventListener('click', function () {
            const pageId = this.id;
            showPage(pageId);
        });
    });

    // Add event listener to back button
    document.getElementById('back-button').addEventListener('click', function () {
        hidePage();
    });

    // Function to show a page
    function showPage(pageId) {
        const data = pageData[pageId];
        if (!data) return;

        // Hide web container
        document.getElementById('web-container').style.display = 'none';

        // Show page content
        const pageContent = document.getElementById('page-content');
        pageContent.classList.remove('hidden');

        // Set background color
        document.body.style.backgroundColor = data.bgColor;

        // Set page title
        document.getElementById('page-title').textContent = data.title;

        // Set page text (lorem ipsum)
        document.getElementById('page-text').textContent = generateLoremIpsum();

        // Load YouTube video
        loadYouTubeVideo(data.videoId);
    }

    // Function to hide page and return to web view
    function hidePage() {
        // Show web container
        document.getElementById('web-container').style.display = 'block';

        // Hide page content
        document.getElementById('page-content').classList.add('hidden');

        // Reset background color
        document.body.style.backgroundColor = '#1a1a2e';
    }

    // Function to load YouTube video
    function loadYouTubeVideo(videoId) {
        const playerContainer = document.getElementById('youtube-player');
        playerContainer.innerHTML = `
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
    }

    // Function to generate lorem ipsum text
    function generateLoremIpsum() {
        return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    }
});