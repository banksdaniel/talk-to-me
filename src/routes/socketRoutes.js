export function socketRoutes(io) {
    io.on('connection', (socket) => {
        try {
            console.log('User has been connected');

            socket.on('chat message', (msg) => {
                io.emit('chat message', msg);
                console.log('message: ' + msg);
            });

            socket.on('disconnect', () => {
                console.log('User has been disconnected');
            });
        } catch (error) {
            console.error('An error occurred:', error);
        }
    });
}
