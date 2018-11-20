<template>
  <div class="container">
    <div class="top">
      <h4>消息处理</h4>
    </div>
    <div class="main">
      <div class="left">
        <div class="item_client" :class="{active:msg.isDisplay==true}" :key="index" v-for="(msg, index) in receiveData" @click="handleChangeUserMsg(msg.socketId)">
          {{msg.name}}
        </div> 

      </div>
      <div class="right">
        <div class="display_message">
          <div class="message" :key="index" v-for="(msg, index) in receiveData.filter(r=>r.isDisplay==true)">
            <div :key="mIndex" v-for="(m,mIndex) in msg.list" :class="[m.type == 0?'right-content':'left-content']">
              {{m.name}}:{{m.content}}({{m.time}})
            </div>
          </div>
        </div>
        <div class="send_message">
          <textarea rows="3" cols="20" v-model="sendData.content" @keypress="handleKeypress"></textarea>
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
        receiveData:[
          // {
          //   socketId:null,
          //   name:null,
          //   list:[
          //     {
          //       type:null, 1:接收到的消息   0:管理员回复的消息
          //       name:null,
          //       time:null,
          //       content:null
          //     }
          //   ],
          //   isReceiveMsg:false, // 是否有新消息
          //   isDisplay:false // 是否显示
          // }
        ],
        sendData:{
          receiveSocketId:null,
          time:null,
          content:null
        }
      }
    },
    beforeCreate() {

    },
    created() {

      let token = $ParmsHelper.loadPageParms('token');
      let name = $ParmsHelper.loadPageParms('name');

      this.socket = io('http://localhost:3008',
          {
            forceNew: true,
            query:{
              platform:'server',
              token:token,
              name:name 
            }
          }
      );
      this._initMessageEvent();
    },
    methods: {
      _initMessageEvent() {
        console.log('_initMessageEvent');
        this.socket.on('receive_msg',(data)=>{
          console.log('收到消息', data);
          var rData = this.receiveData.find(r=>r.socketId == data.socketId);

          if (rData) {
            rData.list.push({
              type:1,
              name:data.name,
              time:data.time,
              content:data.content
            });
            rData.isReceiveMsg = true; 
          }
          else {
            var temp = {
              socketId:data.socketId,
              name:data.name,
              list:[
                {
                  type:1,
                  name:data.name,
                  time:data.time,
                  content:data.content
                }
              ],
              isReceiveMsg:false, // 是否有新消息
              isDisplay:false // 是否显示
            };
            this.receiveData.push(temp);
          } 
        });
      },
      handleSendMessage() {
        let name = $ParmsHelper.loadPageParms('name');

        let msg = {
            socketId:this.sendData.socketId,
            name:name,
            content:this.sendData.content,
            time:moment().format('YYYY年MM月dd日 HH:mm:ss')
        };
        console.log('发送',msg)

        if (!name) { alert('录入个name参数测试'); return; }

        this.socket.emit('new_msg', msg);
        this.sendData.content = null; 

        var rData = this.receiveData.find(r=>r.isDisplay == true);

        if (rData) {
          rData.list.push({
            type:0,
            name:name,
            time:msg.time,
            content:msg.content
          }); 
        }

      },
      handleChangeUserMsg(socketId) {
        if (!socketId) return;

        this.receiveData.map(r=>{
          r.isDisplay = false;
        });

        var rData = this.receiveData.find(r=>r.socketId == socketId);
        rData.isDisplay = true;

        this.sendData.socketId = socketId;

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
        position: absolute;
        right: 0;
        top: 0;
        width: 79%;
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

    .right-content {
      color: red;
    }
  }
</style>
