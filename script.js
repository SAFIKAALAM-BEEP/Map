// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Draw connection lines
    drawConnections();

    // Add click event listeners to all nodes
    const nodes = document.querySelectorAll('.center-node, .outer-node');
    nodes.forEach(node => {
        node.addEventListener('click', function () {
            const pageId = this.id;
            // Navigate to the page
            window.location.href = `${pageId}.html`;
        });
    });

    function drawConnections() {
        const svg = document.getElementById('connections');
        if (!svg) return;

        // Clear existing connections
        svg.innerHTML = '';

        // Web 1 connections (Highschool web)
        drawConnection('highschool', 'friends');
        drawConnection('highschool', 'hello_world');
        drawConnection('highschool', 'dna');
        drawConnection('highschool', 'chrysanthemum');

        // Web 2 connections (Home web)
        drawConnection('home', 'cake');
        drawConnection('home', 'library');
        drawConnection('home', 'origin');
    }

    function drawConnection(node1Id, node2Id) {
        const node1 = document.getElementById(node1Id);
        const node2 = document.getElementById(node2Id);
        const svg = document.getElementById('connections');

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
        line.setAttribute('stroke', 'rgba(255, 255, 255, 0.7)');
        line.setAttribute('stroke-width', '2');
        line.setAttribute('class', 'connection-line');

        svg.appendChild(line);
    }
});