import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../../App'
import '../../common/inject'
import router from '../../router'
import store from '../../store'
import filters from '../../filters/index.js'

import bs from '../../bootstrap'


import '../../../static/iconfont/iconfont.css'
import 'normalize.css'
import '../../style/default/root.less'

Vue.use(VueRouter); 
console.log('走的这个分支')
new bs().run(router,store);
