import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../../App'
import '../../common/inject'
import adminRouter from '../../router/admin'
import store from '../../store'
import filters from '../../filters/index.js'

import bs from '../../bootstrap'


import '../../../static/iconfont/iconfont.css'
import 'normalize.css'
import '../../style/default/root.less'

Vue.use(VueRouter);
console.log('管理员分支');
new bs().run(adminRouter,store);
