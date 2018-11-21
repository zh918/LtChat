<template>
  <div class="container">
    <div class="title">标题栏目</div>
    <div class="content">
        <div class="message" :key="index" v-for="(msg, index) in data.msg">
          {{msg.name}}:{{msg.content}} <span v-if="msg.time">[{{msg.time}}]</span>
        </div>
    </div>
    <div class="operate">
      <div class="left">
        <input type="text" v-model="message"/>
      </div>
      <div class="right">
        <div class="btn_Send" @click="handleSendMsg">发送</div>
      </div>
    </div>

    <!-- 声音 -->
    <video ref="btn_video" controls="" name="media" v-show="false"> 
        <source type="audio/mp3" src="../../../static/video/qq_notice.mp3">
    </video>
  </div>
</template>
<script>
  import io from 'socket.io-client';
  import * as moment from 'moment'

  export default {
    data() {
      return {
        socket:null,
        title:'hello',
        message:null,
        data:{
          msg:[]
        }
      }
    },
    beforeCreate() {

    },
    created() {
      console.log('create client index.vue')
      let token = $ParmsHelper.loadPageParms('token');
      let name = $ParmsHelper.loadPageParms('name');
       
      this.socket = io('http://localhost:3008',
          {
            forceNew: true,
            query:{
              platform:'client', 
              token:token,
              name:name
            }
          }
      );
      this._initMessageEvent();
    },
    methods: {
      _initMessageEvent() { 
        this.socket.on('receive_msg',(data)=>{ 
          this.data.msg.push(data);
          this.$refs.btn_video.play();

        });
      },
      handleSendMsg() {
        let name = $ParmsHelper.loadPageParms('name');

        let msg = {
            name:name,
            content:this.message,
            time:moment().format('YYYY年MM月dd日 HH:mm:ss')
        };

        if (!name) { alert('录入个name参数测试'); return; }

        this.data.msg.push(msg);

        this.socket.emit('new_msg', msg);
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
