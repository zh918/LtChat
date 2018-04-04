// actions
import * as types from './mutationTypes'
import adminApi from '@/server/adminLogic'



export default {

  /**
   * 客服->用户
   * data:{ name: 'admin', message: 'sdf', time: '2018年03月Th日 10:12:19', isAdmin:true, isRead:true }
   */
  sendMsgForServer(context, data) {
    // todo 插入消息到redis中
    context.commit({type:types.SERVER_MSG_SEND,data:data});
  },

  /**
   * 用户->客服
   * data:{ socketId: name: 'admin', message: 'sdf', time: '2018年03月Th日 10:12:19', isAdmin:false, isRead:false }
   */
  receiveMsgForServer(context, data) {
    context.commit({type:types.SERVER_MSG_RECEIVE, data:data});
  },

  /**
   * 客服 读取用户消息
   * data:{ name: 'admin', message: 'sdf', time: '2018年03月Th日 10:12:19', isAdmin:false, isRead:true }
   */
  readMsgForServer(context, data) {
    context.commit({type:types.SERVER_MSG_READ, data:data});
  },




}
