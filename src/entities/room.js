class Room {
    constructor(name, topic) {
      this.name = name;
      this.topic = topic;
      this.users = []; // Pode conter a lista de usuários na sala
      this.messages = []; // Pode conter o histórico de mensagens da sala
    }
  }
  
  module.exports = Room