const Room = require('../entities/room');

const rooms = []; 

exports.createRoom = (name, topic) => {
  const newRoom = new Room(name, topic);
  rooms.push(newRoom);
  return newRoom;
};

exports.getAllRooms = () => rooms;