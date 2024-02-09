class Room {
    constructor(name, topic) {
      this.name = name;
      this.topic = topic;
      this.users = []; 
      this.messages = []; 
    }
  }
  
  module.exports = Room