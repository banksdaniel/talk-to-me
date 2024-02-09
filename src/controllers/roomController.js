const roomRepository = require('../repositories/roomRepository');

exports.createRoom = (req, res) => {
  try {
    const { name, topic } = req.body;

    const newRoom = roomRepository.createRoom(name, topic);

    res.status(201).json(newRoom);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating room' });
  }
};

exports.getAllRooms = (req, res) => {
  try {
    const allRooms = roomRepository.getAllRooms();

    res.status(200).json(allRooms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching rooms' });
  }
};
