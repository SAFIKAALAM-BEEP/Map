// script.js
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

    // Create web backgrounds and lines
    createWebStructures();

    // Add click event listeners to all nodes
    const nodes = document.querySelectorAll('.center-node, .outer-node');
    nodes.forEach(node => {
        node.addEventListener('click', function () {
            const pageId = this.id;
            // For demo purposes, we'll just show an alert
            // In a real implementation, this would navigate to the subpage
            alert(`Navigating to ${pageData[pageId].title} page`);
            // window.location.href = `${pageId}.html`;
        });
    });

    function createWebStructures() {
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

            // Draw connecting lines between nodes
            drawConnectingLines(web.id);
        });
    }

    function drawConnectingLines(webId) {
        const web = document.getElementById(webId);
        const centerNode = web.querySelector('.center-node');

        if (!centerNode) return;

        const centerRect = centerNode.getBoundingClientRect();
        const centerX = centerRect.left + centerRect.width / 2;
        const centerY = centerRect.top + centerRect.height / 2;

        const outerNodes = web.querySelectorAll('.outer-node');

        outerNodes.forEach(node => {
            const nodeRect = node.getBoundingClientRect();
            const nodeX = nodeRect.left + nodeRect.width / 2;
            const nodeY = nodeRect.top + nodeRect.height / 2;

            const length = Math.sqrt(Math.pow(nodeX - centerX, 2) + Math.pow(nodeY - centerY, 2));
            const angle = Math.atan2(nodeY - centerY, nodeX - centerX) * 180 / Math.PI;

            const line = document.createElement('div');
            line.className = 'web-line';
            line.style.width = length + 'px';
            line.style.left = centerX + 'px';
            line.style.top = centerY + 'px';
            line.style.transform = `rotate(${angle}deg)`;

            document.getElementById('web-container').appendChild(line);
        });

        // Draw additional web lines for visual effect
        drawAdditionalWebLines(centerX, centerY);
    }

    function drawAdditionalWebLines(centerX, centerY) {
        // Draw additional radial lines that don't connect to nodes
        for (let i = 0; i < 16; i++) {
            if (i % 2 === 0) continue; // Skip some to avoid overcrowding

            const angle = (i * 22.5) * Math.PI / 180;
            const length = 150 + Math.random() * 50;
            const endX = centerX + Math.cos(angle) * length;
            const endY = centerY + Math.sin(angle) * length;

            const lineLength = Math.sqrt(Math.pow(endX - centerX, 2) + Math.pow(endY - centerY, 2));
            const lineAngle = Math.atan2(endY - centerY, endX - centerX) * 180 / Math.PI;

            const line = document.createElement('div');
            line.className = 'web-line';
            line.style.width = lineLength + 'px';
            line.style.left = centerX + 'px';
            line.style.top = centerY + 'px';
            line.style.transform = `rotate(${lineAngle}deg)`;
            line.style.opacity = '0.2';

            document.getElementById('web-container').appendChild(line);
        }
    }
});