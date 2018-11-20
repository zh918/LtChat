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
  let id = socket.id; // f5时就会刷新，需要注意
  let platform = socket.handshake.query.platform;
  let token = socket.handshake.query.token; // 用户身份凭证
   
  console.log('现在开始连接',platform,id,token);
  if (platform == 'client' && !!id) {  
    // 客户端访问
    let name = socket.handshake.query.name;
    debugger
    let serverInfo = _dispatchServer({socketId:id,token:token,name:name});

    var clientInfo = clients.find(c=>c.token == token);
    if (!!clientInfo) {
      clientInfo.socketId = id;
    }
    else {
      clients.push({
        token:token,
        socketId:id,
        to:serverInfo.socketId
      });
    }
    

  }
  else if (platform == 'server' && !!id) {
    // 管理员连接工作 
    var serverInfo = servers.find(s=>s.token == token);
    if (!!serverInfo) {
      serverInfo.socketId = id;
    }
    else {
      servers.push({
        token:token,
        socketId:id, 
        clientCount:0,
        clients:[]
      });
    }

    
  }

  // console.log(clients,servers);
  // let token = socket.handshake.query.token;
  // if (isValid(token)) {
  if (true) {
    return next();
  }
  return next(new Error('authentication error'));
});

io.on('connection', function (socket) {


  socket.on('new_msg', function (data) {
    let platform = socket.handshake.query.platform;
    let toId = null;
      
    if (platform == 'client') {
        data.socketId = socket.id;
        let temp = clients.find(c=>c.socketId == socket.id);
        if (temp) toId = temp.to;
        // data.socketId = socket.id;
    }
    else if (platform == 'server') { 
      // let temp = clients.find(c=>c.to == data.socketId);
      // if (temp) toId = temp.socketId;
      toId = data.socketId;
    }

    io.to(toId).emit('receive_msg', data);


  });

});


// 分配管理员（给客服安排会员）
function _dispatchServer(client) {
  let serverModel = null;

  // 1.判断是否已经存在服务
  serverModel = servers.find(s=>s.clients.some(c=>c.token == client.token));
  if (serverModel == null) {
    // 2.不存在服务则直接分配服务
    serverModel = servers.sort((a,b)=>a.clientCount < b.clientCount)[0]; // 取客户端数量最少客服
    serverModel.clientCount += 1;
    serverModel.clients.push({socketId:client.socketId,name:client.name,token:client.token});
  }

  return serverModel;
}
