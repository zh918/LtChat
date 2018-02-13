const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path');
const port = process.env.PORT || 3008;
const io = require('socket.io')(server,{origins:'http://localhost:*'});

app.use(express.static(path.join(__dirname, '../public')));

server.listen(port, () => console.log('>>> http://localhost:' + port));

io.on('connection', function (socket) {
  console.log('现在开始连接',socket.id);

  socket.on('new_msg', function (data) {
    console.log('哈哈，我是服务端，感谢stephen发送来的消息===>',data);
  });

});
