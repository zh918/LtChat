<template>
  <div class="container">
    <div class="top">
      <h4>消息处理</h4>
    </div>
    <div class="main">
      <div class="left">
        <div class="item_client"><i>icon status</i>用户1</div>

      </div>
      <div class="right">
        <div class="display_message">

        </div>
        <div class="send_message">
          <input type="text" v-model="message">
          <button type="button" name="button" @click="handleSendMessage">回复消息</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import io from 'socket.io-client';

  export default {
    data() {
      return {
        socket:null,
        title:'hello',
        message:null
      }
    },
    beforeCreate() {

    },
    created() {
      this.socket = io('http://localhost:3008',
          {
            forceNew: true,
            query:{
              tokens:'server'
            }
          }
      );
      this._initMessageEvent();
    },
    methods: {
      _initMessageEvent() {
        console.log('_initMessageEvent');
        this.socket.on('receive_msg',(data)=>{
          console.log('客户端给你回消息了。', data);
        });
      },
      handleSendMessage() {
        this.socket.emit('new_msg', this.message);
        this.message = null;
      }
    }
  }
</script>

<style lang="less" scoped>
  .container {
    .top {
      width: 100%;
      height: 100px;
      border: 1px solid red;
    }
    .main {
      position: fixed;
      top: 100px;
      bottom: 0;
      left: 0;
      right: 0;
      border: 1px solid red;

      .left {
        width: 20%;
        height: 100%;
        border: 1px solid blue;
        overflow-y: auto;

        .item_client {
          width: 100%;
          height: 30px;
          line-height: 30px;
          margin-bottom: 5px;
          text-align: center;
          background-color: red;
          font-size: 14px;
        }
      }

      .right {
        width: 78%;
        height: 100%;
        border: 1px solid yellow;
      }
    }
  }
</style>
