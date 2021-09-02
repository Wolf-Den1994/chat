document.addEventListener('DOMContentLoaded', () => {
  const soket = io();

  const usernameNode = document.querySelector('#username');

  soket.on('set username', username => {
    // если передан на сервере объект, то он будет в username
    usernameNode.textContent = username;
  });

  // так же можно передвать на сервер:
  soket.emit('i am here to send something to server', {name: 'Den', age: 27});
});
