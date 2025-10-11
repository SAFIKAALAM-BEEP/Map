// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Define page data
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

<<<<<<< HEAD
    // Create web backgrounds and connections
=======
    // Create web backgrounds and lines
>>>>>>> refs/remotes/origin/main
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
<<<<<<< HEAD
        createWebBackground('web1-bg');
        createWebBackground('web2-bg');
        createWebBackground('web3-bg');
=======
        const webs = document.querySelectorAll('.web');
>>>>>>> refs/remotes/origin/main

        // Draw connection lines after a brief delay to ensure DOM is ready
        setTimeout(() => {
            drawWebConnections();
        }, 100);
    }

    function createWebBackground(webId) {
        const webBg = document.getElementById(webId);
        if (!webBg) return;

        // Create spiral circles
        for (let i = 0; i < 3; i++) {
            const spiral = document.createElement('div');
            spiral.className = 'spiral-web';
            webBg.appendChild(spiral);
        }

<<<<<<< HEAD
        // Create radial lines (8 directions)
        for (let i = 0; i < 8; i++) {
            const radialLine = document.createElement('div');
            radialLine.className = 'radial-line';
            radialLine.style.transform = `translate(-50%, -50%) rotate(${i * 45}deg)`;
            webBg.appendChild(radialLine);
        }
    }

    function drawWebConnections() {
        // Web 1 connections (Highschool web)
        drawConnection('web1', 'highschool', 'friends');
        drawConnection('web1', 'highschool', 'hello_world');
        drawConnection('web1', 'highschool', 'dna');
        drawConnection('web1', 'highschool', 'chrysanthemum');

        // Web 2 connections (Home web)
        drawConnection('web2', 'home', 'cake');
        drawConnection('web2', 'home', 'library');
        drawConnection('web2', 'home', 'origin');

        // Web 3 has no outer nodes to connect to
    }

    function drawConnection(webId, node1Id, node2Id) {
        const web = document.getElementById(webId);
        const node1 = document.getElementById(node1Id);
        const node2 = document.getElementById(node2Id);

        if (!node1 || !node2) return;

        const rect1 = node1.getBoundingClientRect();
        const rect2 = node2.getBoundingClientRect();
        const webRect = web.getBoundingClientRect();

        // Calculate positions relative to the web container
        const x1 = rect1.left + rect1.width / 2 - webRect.left;
        const y1 = rect1.top + rect1.height / 2 - webRect.top;
        const x2 = rect2.left + rect2.width / 2 - webRect.left;
        const y2 = rect2.top + rect2.height / 2 - webRect.top;

        const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

        const line = document.createElement('div');
        line.className = 'connection-line';
        line.style.width = length + 'px';
        line.style.height = '2px';
        line.style.left = x1 + 'px';
        line.style.top = y1 + 'px';
        line.style.transform = `rotate(${angle}deg)`;

        web.appendChild(line);
=======
            web.appendChild(webBg);

            // Draw connecting lines between nodes
            drawConnectingLines(web.id);
        });
>>>>>>> refs/remotes/origin/main
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