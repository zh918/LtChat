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
  //   socketId:null, // 会员sessionid
  //   to:null, // 客服人员
  // }
];

const servers = [
  // {
  //   socketId:null, // 客服人员
  //   member:member,
  //   clientCount:0,// 客户数量
  //   clients:[
  //     {
  //       name:'stephen1',
  //       socketId:''
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
   let member = socket.handshake.query.member;
   let serverModel = _dispatchServer({id:id,name:member.alias});

    clients.push({
      socketId:id,
      to:serverModel.socketId
    });

  }
  else if (point == 'server' && !!id) {
    // 管理员连接工作
    let member = socket.handshake.query.member;
    servers.push({
      socketId:id,
      member:member,
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
        let temp = clients.find(c=>c.socketId == socket.id);
        if (temp) toId = temp.to;
        data.socketId = socket.id;
    }
    else if (point == 'server') {
      let temp = clients.find(c=>c.to == socket.id);
      if (temp) toId = temp.socketId;
    }

    io.to(toId).emit('receive_msg', data);


  });

});


// 分配管理员
function _dispatchServer(client) {
  let serverModel = null;

  // 1.判断是否已经存在服务
  serverModel = servers.find(s=>s.clients.some(c=>c.socketId == client.id));
  if (serverModel == null) {
    // 2.不存在服务则直接分配服务
    serverModel = servers.sort((a,b)=>a.clientCount < b.clientCount)[0]; // 取客户端数量最少客服
    serverModel.clientCount += 1;
    serverModel.clients.push({socketId:client.id,name:client.name})
  }

  return serverModel;
}
