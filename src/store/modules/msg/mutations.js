import * as types from './mutationTypes'
import initData from './initData'
import actions from './actions'

const mutations = {
  [types.SERVER_MSG_LOAD](state, data) {

  },
  [types.SERVER_MSG_RECEIVE](state, data) {
    let msg = state.server.msg.find(m=>m.name == data.name);
    if (msg) {
      msg.data.push({msg:data.msg, datetime:data.datetime, isAdmin:false, isRead:false});
      msg.lastTime = '2018-03-01 17:15:18';

    } else {
      let model = {
        sessionId:data.sessionId,
        name:data.name,
        data:[
          {msg:data.msg, datetime:data.datetime, isAdmin:false, isRead:false}
        ],
        lastTime:'2018-03-01 17:15:15'
      };

      state.server.msg.push(model);
    }

  },
  [types.SERVER_MSG_SEND](state, data) {
    let msg = state.server.msg.find(m=>m.name == data.name);
    if (msg) {
      msg.data.push({msg:data.msg, datetime:data.datetime, isAdmin:true, isRead:false, admin:'测试管理员'});
      msg.lastTime = '2018-03-01 17:15:18'; 
    }
  }
}

export default {
  namespaced: true,
  state:initData,
  mutations:mutations,
  actions:actions
}
