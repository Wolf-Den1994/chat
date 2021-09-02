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
}
