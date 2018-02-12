
class ParmsHelper {
	/**
	 * @描述     获取页面query 参数
	 * @开发     zh
	 * @时间     2017-09-25
	 * @param  {[type]}   key [description]
	 * @return {[type]}       [description]
	 */
	static loadPageParms(key,searchType = "hash") {
		let searchVal =  window.location.hash;
		if (searchType == "query") searchVal = window.location.search;
		return decodeURI(searchVal.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
	}

	static getParms(url,key) {
		return decodeURI(url.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
	}
}

if(typeof window.$ParmsHelper == "undefined") window.$ParmsHelper = ParmsHelper;
