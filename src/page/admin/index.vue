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
          <div class="message" :key="index" v-for="(msg, index) in data.msg">
            {{msg.name}}:{{msg.message}} [{{msg.time}}]
          </div>
        </div>
        <div class="send_message">
          <textarea rows="3" cols="20" v-model="message" @keypress="handleKeypress"></textarea>
          <button type="button" name="button" @click="handleSendMessage">回复消息</button>
        </div>
      </div>
    </div>
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
      this.socket = io('http://localhost:3008',
          {
            forceNew: true,
            query:{
              tokens:'server',
              member:{
                alias:'张三丰'
              }
            }
          }
      );
      this._initMessageEvent();
    },
    methods: {
      _initMessageEvent() {
        console.log('_initMessageEvent');
        this.socket.on('receive_msg',(data)=>{
          console.log(data);
          // todo 写入store 进行分类处理
          this.data.msg.push(data);
        });
      },
      handleSendMessage() {
        let name = $ParmsHelper.loadPageParms('name');

        let msg = {
            name:name,
            message:this.message,
            time:moment().format('YYYY年MM月dd日 HH:mm:ss')
        };

        if (!name) { alert('录入个name参数测试'); return; }

        this.data.msg.push(msg);

        this.socket.emit('new_msg', msg);
        this.message = null;
      },
      handleKeypress() {
        // let target = event.target || event.srcElement;
        //
        // if (event.keyCode == 13) {
        //   let button = document.getElementsByTagName('button');
        //   button.handleSendMessage();
        // }
      },
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

        .display_message {
          position: absolute;
          top: 0;
        }

        .send_message {
          position: fixed;
          right: 0;
          left: 0;
          bottom: 20/20rem;
          margin: auto;
          width: 100%;
          height: 60/20rem;
          line-height: 60/20rem;
          text-align: right;
          opacity: 0.7;

          textarea {
            width: 500/20rem;
            height: 60/20rem;
            font-size: 14/20rem;
          }
          button {
            height: 60/20rem;
            vertical-align: top;
          }
        }
      }
    }
  }
</style>
