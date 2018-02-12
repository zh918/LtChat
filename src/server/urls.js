import appConfig from '../config/env'

// 地址分类
const urlType = {
    bizProxyUrl:0,
    resourceProxyUrl:1,
    commonProxyUrl:2
}

const encryptType = {
    noEncrypt: 0,
    userEncrypt: 1,
};

const setEncrypt = (type) => {
    if(process.env.NODE_ENV == 'development') {
        return 0;
    } else {
        return type;
    }
}

export default {
    // 申请报价
    applyQuote: {
        urlType:urlType.bizProxyUrl,
        url:'/api/marketchannel/quote/applyQuote', 
    },

    // 获取验证码
    getValidCode: {
        urlType:urlType.bizProxyUrl,
        url:'/api/marketchannel/sms/getValiCode', 
    }, 

    // 上传行驶证图片接口
    uploadPic: {
        urlType:urlType.bizProxyUrl,
        url:'/api/marketchannel/userinfo/travelInfoUpload', 
    }, 
}