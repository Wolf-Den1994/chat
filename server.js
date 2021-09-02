const express = require('express');
const http = require('http');
const soketIO = require('socket.io');
const Moniker = require('moniker');

const app = express();
const server = http.Server(app);
const port = process.env.PORT || 3000;
const io = soketIO(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

app.use(express.static('./client'));

server.listen(port, () => {
  console.log('listening on *:' + port);
});

io.on('connection', soket => {
  // присвоение сокету именя
  soket.username = Moniker.choose();
  // emit отправляет сообщению только этому пользователю (c messageType set username)
  soket.emit(
    'set username', // type
    soket.username // payload (в payload можно передавать и объеты) см client 7 строка
  );
  // получение с client 30 строки объека и вывод его в консоль на сервере
  soket.on('i am here to send something to server', iAmUser => console.log(iAmUser.name, iAmUser.age));
})