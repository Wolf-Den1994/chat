/* global io */

export class Soket {
  constructor() {
    this.soket = io();
  }

  onSetUsername = handler => {
    this.soket.on('set username', handler);
  }

  onUserJoined = handler => {
    this.soket.on('user joined', handler);
  }

  onUserLeft = handler => {
    this.soket.on('user left', handler);
  }

  onChatMessage = handler => {
    this.soket.on('chat message', handler);
  }

  emitChatMessage = message => {
    this.soket.emit('chat message', message);
  }
}
