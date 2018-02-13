<template>
  <div class="container">
    <div class="title">标题栏目</div>
    <div class="content">
        <div class="left_msg">左侧消息</div>
        <div class="right_msg">右侧消息</div>
    </div>
    <div class="operate">
      <div class="left">
        <input type="text" />
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
        title:'hello'
      }
    },
    beforeCreate() {

    },
    created() {
      console.log('create client index.vue')
      this.socket = io('http://localhost:3008', { forceNew: true });
    },
    methods: {
      handleSendMsg() {
        console.log('发送消息');
        this.socket.emit('new_msg', '这是stephen 在客户端发送的一条消息，请注意查收！');
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
