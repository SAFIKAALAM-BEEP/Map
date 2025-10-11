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

    // Create web backgrounds and connections
    createWebStructures();

    // Add click event listeners to all nodes
    const nodes = document.querySelectorAll('.center-node, .outer-node');
    nodes.forEach(node => {
        node.addEventListener('click', function () {
            const pageId = this.id;
            window.location.href = `${pageId}.html`;
        });
    });

    function createWebStructures() {
        createWebBackground('web1-bg');
        createWebBackground('web2-bg');
        createWebBackground('web3-bg');

        // Draw connection lines after a brief delay to ensure DOM is ready
        setTimeout(() => {
            drawAllConnections();
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

        // Create radial lines (8 directions)
        for (let i = 0; i < 8; i++) {
            const radialLine = document.createElement('div');
            radialLine.className = 'radial-line';
            radialLine.style.transform = `translate(-50%, -50%) rotate(${i * 45}deg)`;
            webBg.appendChild(radialLine);
        }
    }

    function drawAllConnections() {
        clearExistingConnections();

        // Web 1: Highschool web connections
        connectNodes('web1', 'highschool', [
            'friends', 'hello_world', 'dna', 'chrysanthemum'
        ]);

        // Web 2: Home web connections  
        connectNodes('web2', 'home', [
            'cake', 'library', 'origin'
        ]);

        // Web 3: My World has no outer nodes
    }

    function clearExistingConnections() {
        const connections = document.querySelectorAll('.connection-line');
        connections.forEach(conn => conn.remove());
    }

    function connectNodes(webId, centerId, outerNodeIds) {
        const web = document.getElementById(webId);
        const centerNode = document.getElementById(centerId);

        if (!centerNode) return;

        outerNodeIds.forEach(outerId => {
            const outerNode = document.getElementById(outerId);
            if (outerNode) {
                drawConnectionLine(web, centerNode, outerNode);
            }
        });
    }

    function drawConnectionLine(web, node1, node2) {
        // Get positions relative to the web container
        const webRect = web.getBoundingClientRect();
        const node1Rect = node1.getBoundingClientRect();
        const node2Rect = node2.getBoundingClientRect();

        // Calculate center points of nodes relative to web
        const x1 = (node1Rect.left + node1Rect.width / 2) - webRect.left;
        const y1 = (node1Rect.top + node1Rect.height / 2) - webRect.top;
        const x2 = (node2Rect.left + node2Rect.width / 2) - webRect.left;
        const y2 = (node2Rect.top + node2Rect.height / 2) - webRect.top;

        // Calculate distance and angle
        const dx = x2 - x1;
        const dy = y2 - y1;
        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);

        // Create connection line
        const line = document.createElement('div');
        line.className = 'connection-line';
        line.style.width = `${length}px`;
        line.style.left = `${x1}px`;
        line.style.top = `${y1}px`;
        line.style.transform = `rotate(${angle}deg)`;

        web.appendChild(line);
    }

    // Alternative SVG connection approach
    function drawSVGConnections() {
        const svg = document.getElementById('web-connections');
        if (!svg) return;

        svg.innerHTML = ''; // Clear existing connections

        // Web 1 connections
        drawSVGLine('highschool', 'friends');
        drawSVGLine('highschool', 'hello_world');
        drawSVGLine('highschool', 'dna');
        drawSVGLine('highschool', 'chrysanthemum');

        // Web 2 connections
        drawSVGLine('home', 'cake');
        drawSVGLine('home', 'library');
        drawSVGLine('home', 'origin');
    }

    function drawSVGLine(node1Id, node2Id) {
        const node1 = document.getElementById(node1Id);
        const node2 = document.getElementById(node2Id);
        const svg = document.getElementById('web-connections');

        if (!node1 || !node2 || !svg) return;

        const rect1 = node1.getBoundingClientRect();
        const rect2 = node2.getBoundingClientRect();
        const svgRect = svg.getBoundingClientRect();

        const x1 = rect1.left + rect1.width / 2 - svgRect.left;
        const y1 = rect1.top + rect1.height / 2 - svgRect.top;
        const x2 = rect2.left + rect2.width / 2 - svgRect.left;
        const y2 = rect2.top + rect2.height / 2 - svgRect.top;

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute('stroke', 'rgba(255, 255, 255, 0.6)');
        line.setAttribute('stroke-width', '2');

        svg.appendChild(line);
    }

    // Call this instead of drawAllConnections in createWebStructures
    function createWebStructures() {
        createWebBackground('web1-bg');
        createWebBackground('web2-bg');
        createWebBackground('web3-bg');

        setTimeout(() => {
            drawSVGConnections();
        }, 100);
    }
});