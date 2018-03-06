<template>
  <div class="container">
    <div class="title">标题栏目</div>
    <div class="content">
        <div class="left_msg">左侧消息</div>
        <div class="right_msg">右侧消息</div>
    </div>
    <div class="operate">
      <div class="left">
        <input type="text" v-model="message"/>
      </div>
      <div class="right">
        <div class="btn_Send" @click="handleSendMsg">发送</div>
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
      console.log('create client index.vue')
      this.socket = io('http://localhost:3008',
          {
            forceNew: true,
            query:{
              tokens:'client'
            }
          }
      );
      this._initMessageEvent();
    },
    methods: {
      _initMessageEvent() {
        console.log('_initMessageEvent');
        this.socket.on('receive_msg',(data)=>{
          console.log('服务端给你回消息了。', data);
        });
      },
      handleSendMsg() {
        this.socket.emit('new_msg', this.message);
        this.message = null;
      }
    }
  }
</script>

<style lang="less" scoped>
  .container {
    .title {

    }

    .content {

    }

    .operate {

    }
  }
</style>
