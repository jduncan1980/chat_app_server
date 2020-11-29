const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const http = require('http');
const socket = require('socket.io');
const logger = require('./middleware/logger');
const handleError = require('./middleware/handle-error-middleware');
const restricted = require('./middleware/restricted-route-middleware');
const authRouter = require('./api/auth/auth-router');

const app = express();
const server = http.createServer(app);
const io = socket(server);

io.on('connection', (server) => {
	console.log('New WS Connection.');
	socket.emit('connection', null);
});
app.use(cors()).use(helmet()).use(logger()).use(express.json());

// app.use('/api/users', restricted, userRouter);
app.use('/api/auth', authRouter);

app.use(handleError());
app.get('/', (req, res) => {
	res.status(200).json({ message: 'Server is Running.' });
});

module.exports = server;
