import Vue from 'vue'

/**
   * 日期格式重置   页面用法：{{'2017-08-22 18:30:26','yyyy-mm-dd hhmm' | formatDate}}  返回值：'2017-08-22 18:30'
   * @param {Object} value     //需要匹配的原始值
   * @param {Object} value2    //需要得到的日期格式（页面不区分大小写,可不传,不传默认返回年月日） 
   */
export default Vue.filter("formatDate", function(value) {
	if(value){ 
		let h=value.slice(11,13);
		let m=value.slice(14,16);
	    return h + "时" + m + "分";
	}
});