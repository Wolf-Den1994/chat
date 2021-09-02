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
  // отправить всем пользователям, кроме user, что он присоеденился
  soket.broadcast.emit('user joined', soket.username);

  soket.on('disconnect', () => {
    soket.broadcast.emit('user left', soket.username);
  });
})