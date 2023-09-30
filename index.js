import http from 'http';
import express from 'express';
import { Server } from 'socket.io';
import { socketRoutes } from './src/routes/socketRoutes.js'

const app = express();
const server = http.createServer(app);
const io = new Server(server);

try {
  socketRoutes(io);

  app.get('/chat', (req, res) => {
    //TODO: res.sendFile -- create an html page to simulate chat
  });

  const PORT = 3000;
  server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}! 🔥`);
  });
} catch (error) {
  console.error('An error occurred:', error);
}