// actions
import * as types from './mutationTypes'


export default {
  /**
   * 加载消息
   */
  loadMsgForServer(context, data) {

  },

  /**
   * 管理员发送消息给客户
   */
  sendMsgForServer(context, data) {
    // todo 插入消息到redis中
    context.commit({type:types.SERVER_MSG_SEND,data:data});
  },

  /**
   * 管理员接收到客户发送消息
   */
  receiveForServer(context, data) {

  }
}
