const express = require('express');
const roomController = require('../controllers/roomController');

const router = express.Router();

router.post('/rooms', roomController.createRoom);
router.get('/rooms', roomController.getAllRooms);

module.exports = router;