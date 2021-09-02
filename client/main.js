import {Username} from "./modules/username.js";

document.addEventListener('DOMContentLoaded', () => {
  const soket = io();

  const username = new Username('#username');

  soket.on('set username', name => username.render(name));

  // так же можно передвать на сервер:
  // soket.emit('i am here to send something to server', {name: 'Den', age: 27});
});
