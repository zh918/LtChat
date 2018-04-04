class AppConfig {

	static setApiUrl() {
		if (process.env.NODE_ENV == 'dev') {
			// 本地
			return 'http://localhost:3008';
		}
		else if (process.env.NODE_ENV == 'development') {
			// 开发
			return 'http://192.168.1.25:30006/external';
		}
		else if (process.env.NODE_ENV == 'test') {
			// 测试
			return '';//'http://192.168.1.50:30006/external';
		}
		else if (process.env.NODE_ENV == 'uat') {
			// uat
			// return 'http://www.yitianxian.com/wechatServer';
			return '';
		}
		else {
			// 线上
			return '';
		}
	}

	/**
	 * @描述    设置app配置信息，可全局使用
	 * @开发    zh
	 * @时间    2017-07-27
	 * @param {[type]}   config = {}
	 */
	static setAppConfig(...config) {
		// AppConfig.config = {};
		log(config);

		let configArray = [...config];
		configArray.forEach((c)=>{
			Object.assign(AppConfig.config,c);
		});
	}

	/**
	 * @描述    配置全局开关信息
	 * @开发    英文
	 * @时间    2017-07-27
	 * @param {[type]}   flag {log:true,error:true,...}
	 */
	static setFlag(flag={}) {
		Object.assign(AppConfig.config.flag,flag);
	}

}

if (typeof window.$AppConfig == "undefined") window.$AppConfig = AppConfig;
