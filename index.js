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
    res.sendFile(new URL('./index.html', import.meta.url).pathname);
  });

  const PORT = 3000;
  server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}! 🔥`);
  });
} catch (error) {
  console.error('An error occurred:', error);
}