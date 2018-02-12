// 封装ajax请求
import axios from 'axios'  

// 地址分类
const urlType = {
    bizProxyUrl:0,
    resourceProxyUrl:1,
    commonProxyUrl:2
}

const post = (urlObj, params = {}, headers = {}) => {    
    let option = Object.assign({}, headers);
    let url = "";
    
    if (urlObj.urlType == urlType.bizProxyUrl) {
        url = $AppConfig.setApiUrl() + urlObj.url;
        console.log(url);
    } 
     

    return axios({
        method: 'post',
        url: url,
        data: params,
        headers: option
    }).then(res => { 
        // exceptionHandler(res);
        
        if (res.data && (11 <= res.data.errorCode  && res.data.errorCode <= 19)) {
            globalVue.$message({
                msg: $MessageHelper.toMsg(res.data), //"系统体力不支倒下啦，狠狠的抽醒他吧！",
                duration: 1500
            });
        }

        // globalVue.$finish();
        log('请求返回完整数据:',res.data)
        return res.data;
    }).catch((res) => {
        // globalVue.$finish(); 
        log("请求失败", res) 
        if (res.message == 'Network Error') {
            globalVue.$message({
                msg: '当前网络不可用，请检查网络设置', //"系统体力不支倒下啦，狠狠的抽醒他吧！",
                duration: 2000
            }); 
        }
         
        return Promise.resolve({errorCode:-1});
    });
 
};

const get = (urlObj) => {
    return axios.get(urlObj.url);
};

// export const injectHttp = () => {
//     if(typeof window.$http == 'undefined') {
//         window.$http = {};
//         window.$http.post = post;
//         window.$http.get = get;
//     }
// }
// 
if(typeof window.$http == 'undefined') {
    window.$http = {};
    window.$http.post = post;
    window.$http.get = get;
}

// const exceptionHandler = (res) => {
//     if ((res.status !== 200 && res.status != 304) && urlObj.noNetwork) { 
//         globalVue.$NoNetwork({el:"no-network",cb:()=>{ 
//             post(urlObj,params,headers)
//         }});             
//     }
//     else if (res.status !== 200 && res.status != 304) {
//         globalVue.$message({
//             msg: "当前网络不可用，请检查网络设置",
//             duration: 1500
//         });
//     } 
// }