// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Create web backgrounds and connections
    createWebStructures();

    function createWebStructures() {
        createWebBackground('web1-bg');
        createWebBackground('web2-bg');
        createWebBackground('web3-bg');

        // Draw connection lines after a brief delay to ensure DOM is ready
        setTimeout(() => {
            drawSVGConnections();
        }, 200);
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

    function drawSVGConnections() {
        const svg = document.getElementById('web-connections');
        if (!svg) return;

        // Clear existing connections
        svg.innerHTML = '';

        // Web 1 connections (Highschool web)
        drawSVGConnection('highschool', 'friends');
        drawSVGConnection('highschool', 'hello_world');
        drawSVGConnection('highschool', 'dna');
        drawSVGConnection('highschool', 'chrysanthemum');

        // Web 2 connections (Home web)
        drawSVGConnection('home', 'cake');
        drawSVGConnection('home', 'library');
        drawSVGConnection('home', 'origin');
    }

    function drawSVGConnection(node1Id, node2Id) {
        const node1 = document.getElementById(node1Id);
        const node2 = document.getElementById(node2Id);
        const svg = document.getElementById('web-connections');

        if (!node1 || !node2 || !svg) return;

        const rect1 = node1.getBoundingClientRect();
        const rect2 = node2.getBoundingClientRect();
        const containerRect = document.getElementById('web-container').getBoundingClientRect();

        // Calculate center points of nodes
        const x1 = rect1.left + rect1.width / 2 - containerRect.left;
        const y1 = rect1.top + rect1.height / 2 - containerRect.top;
        const x2 = rect2.left + rect2.width / 2 - containerRect.left;
        const y2 = rect2.top + rect2.height / 2 - containerRect.top;

        // Create SVG line
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute('stroke', 'rgba(255, 255, 255, 0.6)');
        line.setAttribute('stroke-width', '3');
        line.setAttribute('class', 'connection-line');

        svg.appendChild(line);
    }
});