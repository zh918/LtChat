import urls from './urls'

export default class info {
    //获取验证码 
    static getValidCode(parms) {
        return $http.post(urls.getValidCode,parms);
    };
    
    //申请报价
    static applyQuote(parms) {
        return $http.post(urls.applyQuote,parms);
    };
    
    //上传行驶证图片
    static uploadPic(parms) {
        return $http.post(urls.uploadPic,parms);
    };
     
}