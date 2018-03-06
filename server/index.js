const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path');
const port = process.env.PORT || 3008;
const io = require('socket.io')(server,{origins:'http://localhost:*'});

app.use(express.static(path.join(__dirname, '../public')));

server.listen(port, () => console.log('>>> http://localhost:' + port));

// 内存结构
const clients = [
  // {
  //   from:null, // 会员sessionid
  //   to:null, // 客服人员
  // }
];

const servers = [
  // {
  //   from:null, // 客服人员
  //   clientCount:0,// 客户数量
  //   clients:[
  //     {
  //       name:'stephen1',
  //
  //     }
  //   ]
  // }
];

// 校验
io.use((socket, next) => {
  let id = socket.id;
  let point = socket.handshake.query.tokens;
  console.log('现在开始连接',point,id);
  if (point == 'client' && !!id) { // 这里的判断没有这么简单，是需要变化加密处理的。
    // 客户端访问
   console.log('======',id,servers[0].from);
    clients.push({
      from:id,
      to:servers[0].from
    });
  }
  else if (point == 'server' && !!id) {
    // 管理员连接工作
    servers.push({
      from:id,
      clientCount:0,
      clients:[]
    });
  }

  console.log(clients,servers);
  // let token = socket.handshake.query.token;
  // if (isValid(token)) {
  if (true) {
    return next();
  }
  return next(new Error('authentication error'));
});

io.on('connection', function (socket) {


  socket.on('new_msg', function (data) {
    console.log(socket.id,'发送了消息：',data);
    let point = socket.handshake.query.tokens;
    let toId = null;

    if (point == 'client') {
        let temp = clients.find(c=>c.from == socket.id);
        if (temp) toId = temp.to;
    }
    else if (point == 'server') {
      let temp = clients.find(c=>c.to == socket.id);
      if (temp) toId = temp.from;
    }

    io.to(toId).emit('receive_msg', data);  // 已通


  });

});
