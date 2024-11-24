const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let pixels = {};


app.use(express.static(__dirname));

wss.on('connection', (ws) => {
    ws.send(JSON.stringify({ action: 'init', data: pixels }));

    ws.on('message', (message) => {
        const { action, data } = JSON.parse(message);
        if (action === 'draw') {
            pixels[data.id] = data;
            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({ action, data }));
                }
            });
        }

        if (action === 'erase') {
            delete pixels[data.id];
            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({ action, data }));
                }
            });
        }

        if (action === 'chat') {
            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({ action: 'chat', data }));
                }
            });
        }
    });
});


server.listen(8080, () => {
    console.log('Server is listening on port 8080');
});
