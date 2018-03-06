// 数据结构

export default {
  // server 仅供管理端使用
  server:{
    msg:[
      {
        sessionId:null,
        name:'ltstephen1',
        data:[
          {msg:'这是客户发送的一条消息1', datetime:'2018年3月1日 15:15:30', isAdmin:false, isRead:false},
          {msg:'这是客户发送的一条消息2', datetime:'2018年3月1日 15:15:32', isAdmin:false, isRead:false},
          {msg:'好的，我知道了', datetime:'2018年3月1日 15:15:32', isAdmin:true, isRead:false},
        ],
        lastTime:'2018-03-01 15:15:15' // 客户发送消息后，修改该时间为最新。管理端根据该字段倒叙
      },
      {
        sessionId:null,
        name:'ltstephen2',
        data:[
          {msg:'这是客户发送的一条消息1', datetime:'2018年3月1日 15:15:30', isAdmin:false, isRead:false},
          {msg:'这是客户发送的一条消息2', datetime:'2018年3月1日 15:15:32', isAdmin:false, isRead:false},
          {msg:'好的，我知道了', datetime:'2018年3月1日 15:15:32', isAdmin:true, isRead:false},
        ],
        lastTime:'2018-03-01 15:15:10' // 客户发送消息后，修改该时间为最新。管理端根据该字段倒叙
      },
      {
        sessionId:null,
        name:'ltstephen2',
        data:[
          {msg:'这是客户发送的一条消息1', datetime:'2018年3月1日 15:15:30', isAdmin:false, isRead:false},
          {msg:'这是客户发送的一条消息2', datetime:'2018年3月1日 15:15:32', isAdmin:false, isRead:false},
          {msg:'好的，我知道了', datetime:'2018年3月1日 15:15:32', isAdmin:true, isRead:false},
        ],
        lastTime:'2018-03-01 15:15:08' // 客户发送消息后，修改该时间为最新。管理端根据该字段倒叙
      }
    ]
  },
  // client 仅供客户端使用
  client:{

  }
}
