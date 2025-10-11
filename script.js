document.addEventListener('DOMContentLoaded', function () {
    // Define page data with YouTube video IDs and background colors
    const pageData = {
        highschool: {
            videoId: 'dQw4w9WgXcQ',
            bgColor: '#2c3e50',
            title: 'Highschool',
            color: '#3498db'
        },
        friends: {
            videoId: 'fJ9rUzIMcZQ',
            bgColor: '#34495e',
            title: 'Friends',
            color: '#e74c3c'
        },
        hello_world: {
            videoId: '9bZkp7q19f0',
            bgColor: '#2c3e50',
            title: 'Hello World',
            color: '#2ecc71'
        },
        dna: {
            videoId: 'kJQP7kiw5Fk',
            bgColor: '#34495e',
            title: 'DNA',
            color: '#9b59b6'
        },
        chrysanthemum: {
            videoId: 'JGwWNGJdvx8',
            bgColor: '#2c3e50',
            title: 'Chrysanthemum',
            color: '#f1c40f'
        },
        home: {
            videoId: 'n61ULEU7CO0',
            bgColor: '#16a085',
            title: 'Home',
            color: '#1abc9c'
        },
        cake: {
            videoId: 'kJQP7kiw5Fk',
            bgColor: '#c0392b',
            title: 'Cake',
            color: '#e74c3c'
        },
        library: {
            videoId: 'fJ9rUzIMcZQ',
            bgColor: '#8e44ad',
            title: 'Library',
            color: '#9b59b6'
        },
        origin: {
            videoId: 'dQw4w9WgXcQ',
            bgColor: '#27ae60',
            title: 'Origin',
            color: '#2ecc71'
        },
        my_world: {
            videoId: '9bZkp7q19f0',
            bgColor: '#2980b9',
            title: 'My World',
            color: '#3498db'
        }
    };

    // Create web backgrounds
    createWebBackgrounds();

    // Add click event listeners to all nodes
    const nodes = document.querySelectorAll('.center-node, .outer-node');
    nodes.forEach(node => {
        node.addEventListener('click', function () {
            const pageId = this.id;
            window.location.href = `${pageId}.html`;
        });
    });

    function createWebBackgrounds() {
        const webs = document.querySelectorAll('.web');

        webs.forEach(web => {
            const webBg = document.createElement('div');
            webBg.className = 'web-background';

            // Create spiral circles
            for (let i = 0; i < 3; i++) {
                const spiral = document.createElement('div');
                spiral.className = 'spiral-web';
                webBg.appendChild(spiral);
            }

            // Create radial lines
            for (let i = 0; i < 8; i++) {
                const radialLine = document.createElement('div');
                radialLine.className = 'radial-line';
                radialLine.style.transform = `translate(-50%, -50%) rotate(${i * 45}deg)`;
                webBg.appendChild(radialLine);
            }

            web.appendChild(webBg);
        });
    }
});