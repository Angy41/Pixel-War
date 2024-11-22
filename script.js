let username = prompt("Entrez votre pseudonyme :");
if (!username) {
    username = "Joueur" + Math.floor(Math.random() * 1000);
}

const canvas = document.getElementById('canvas');
let pageId;
const drawnPixels = {};

window.onload = () => {
    pageId = Math.floor(Math.random() * 100);
    console.log(pageId);
};

const ctx = canvas.getContext('2d');
const ws = new WebSocket('ws://localhost:8080');


canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor(event.clientX - rect.left);
    const y = Math.floor(event.clientY - rect.top);
    const id = `${x},${y}`;

    if (drawnPixels[id]) {

        const eraseData = { action: 'erase', data: { id, x, y }, username };
        ws.send(JSON.stringify(eraseData));
        delete drawnPixels[id];
    } else {

        const pixelData = { action: 'draw', data: { id, x, y, color: 'black' }, id: pageId, username };
        ws.send(JSON.stringify(pixelData));
        drawnPixels[id] = { x, y, color: 'black' };
    }
});


ws.onmessage = (event) => {
    const { action, data } = JSON.parse(event.data);
    console.log(`Action reçue : ${action}, Données :`, data);

    if (action === 'draw') {
        ctx.fillStyle = data.color;
        ctx.fillRect(data.x, data.y, 10, 10);
        drawnPixels[data.id] = { x: data.x, y: data.y, color: data.color };
    } else if (action === 'erase') {
        ctx.clearRect(data.x, data.y, 10, 10);
        delete drawnPixels[data.id];
    } else if (action === 'init') {
        Object.values(data).forEach((p) => {
            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, 10, 10);
            drawnPixels[p.id] = { x: p.x, y: p.y, color: p.color };
        });
    }
};

ws.onclose = (event) => {
    console.log('WebSocket is closed: ', event.reason);
};

ws.onerror = (error) => {
    console.error('WebSocket error: ', error);
};
