import urls from './urls'

export default class MemberLogic {

	/**
	 * @描述     获取前端配置地址
	 * @开发      
	 * @时间     2017-09-28
	 * @return {[type]}   [description]
	 */
	static getWXPayPath() { 
		return $http.post(urls.getWXPayPath);
	}

	/**
	 * @描述     获取验证码
	 * @开发     zh
	 * @时间     2017-09-26
	 * @param  {[type]}   parms [description]
	 * @return {[type]}         [description]
	 */
	static getValidCode(parms) {
		return $http.post(urls.getValidCode, parms);
	};

	/**
	 * @描述     注册绑定
	 * @开发     zh
	 * @时间     2017-09-26
	 * @param  {[type]}   params [description]
	 * @return {[type]}          [description]
	 */
	static register(parms) { 
        return $http.post(urls.register,parms);
    };

}