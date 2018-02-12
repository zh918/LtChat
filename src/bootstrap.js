import Vue from 'vue'
import DispatchRouter from './dispatchRouter'
import resetRootFontSize from './common/rem'
import App from './App'

export default class Bootstrap {
    constructor() {
        this.dispatchRouter = new DispatchRouter();
    }

    run(router, store) {
        let _this = this;
        _this.appListener(function() {
            _this.initVue(router, store).then(result => {
                _this.dispatchRouter.dispatch();
            });
        });
    }

    // 先发起请求，后加载vue
    initVue(router, store) {
      return new Promise(function(resolve,reject){
            window.globalVue = new Vue({
                router,
                store,
                template: '<App />',
                components: {
                    App
                }
            }).$mount('#app');
            resolve(true);
      });
        // return import('./App').then((App) => {
        //     window.globalVue = new Vue({
        //         router,
        //         store,
        //         template: '<App />',
        //         components: {
        //             App
        //         }
        //     }).$mount('#app'); 
        // });
    }

    appListener(cb) {
      cb();
    }

}
