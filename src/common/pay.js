
// class Pay {

// 	static wechatPay(options) {
// 		if (!wx) alert('wx不存在，js引用存在问题');


// 		let payOptions = {
// 			timeStamp: options.timestamp,
// 			nonceStr: options.noncestr,
// 			package: options.package1,
// 			signType: options.signType,  
// 			paySign: options.sign,
// 			success:function() {
// 				alert('支付成功回调')
// 			}
// 		}

// 		wx.config({
// 		    debug: true,
// 		    appId: options.appid,
// 		    timeStamp: options.timestamp,
// 		    nonceStr: options.noncestr,
// 		    signature: options.sign,
// 		    jsApiList: [
// 		        'checkJsApi', 
// 		        'chooseWXPay' 
// 		      ]
// 		});

// 		wx.error(function(res){
// 			alert(JSON.stringify(res));
// 		    // config信息验证失败会执行error函数，如签名过期导致验证失败，
// 		    // 具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
// 		});

// 		// wx.chooseWXPay(payOptions);

// 		// wx.config({
// 		//     debug: false,
// 		//     appId: 'wxf8b4f85f3a794e77',
// 		//     timestamp: 1506049530,
// 		//     nonceStr: 'WUsheur3Jt3TkX45',
// 		//     signature: '85e558a3921baf6a8d2eb594e01bdb2ea6e83444',
// 		//     jsApiList: [
// 		//         'checkJsApi', 
// 		//         'chooseWXPay' 
// 		//       ]
// 		// });

// 		wx.ready(function(){
// 		    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，
// 		    // config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，
// 		    // 则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，
// 		    // 不需要放在ready函数中。
		    
// 			wx.chooseWXPay(payOptions);
// 		});

		

// 		// wx.chooseWXPay({
// 	 //      timestamp: 1414723227,
// 	 //      nonceStr: 'noncestr',
// 	 //      package: 'addition=action_id%3dgaby1234%26limit_pay%3d&bank_type=WX&body=innertest&fee_type=1&input_charset=GBK&notify_url=http%3A%2F%2F120.204.206.246%2Fcgi-bin%2Fmmsupport-bin%2Fnotifypay&out_trade_no=1414723227818375338&partner=1900000109&spbill_create_ip=127.0.0.1&total_fee=1&sign=432B647FE95C7BF73BCD177CEECBEF8D',
// 	 //      signType: 'SHA1',  
// 	 //      paySign: 'bd5b1933cda6e9548862944836a9b52e8c9a2b69'
// 	 //    });


// 		// wx.checkJsApi({
// 		//     jsApiList: ['chooseWXPay'],  
// 		//     success: function(res) {
// 		//         // 以键值对的形式返回，可用的api值true，不可用为false
// 		//         // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
// 		//         if (res.checkResult.chooseWXPay) {
// 		//         	// 拉起支付

// 		//         }
// 		//         else {
// 		//         	alert('不支持wx支付');
// 		//         }
// 		//     }
// 		// });
// 	}
// }

// if (typeof window.$pay === 'undefined') window.$pay = Pay;


class Pay {

	static wechatPay(options) {
		if (typeof WeixinJSBridge == "undefined"){ 
			if( document.addEventListener){
			  document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
			}else if (document.attachEvent){
			  document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
			  document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
			}
		}else{ 
			onBridgeReady();
		}


	    function onBridgeReady(){
		  WeixinJSBridge.invoke(
		      'getBrandWCPayRequest', { 
		          // "appId":appid,     //公众号名称，由商户传入     
		          // "timeStamp":timeStamp,         //时间戳，自1970年以来的秒数     
		          // "nonceStr":nonceStr, //随机串     
		          // "package":package1,     
		          // "signType":"MD5",         //微信签名方式：     
		          // "paySign":paySign //微信签名  
		          // 
		          	appId: options.appid,
		            timeStamp: options.timestamp,
					nonceStr: options.noncestr,
					package: options.package1,
					signType: options.signType,  
					paySign: options.sign
		      },
		      function(res) {  
		        if (options.cb && res.err_msg == "get_brand_wcpay_request:ok") options.cb();     
		      }
		  ); 
		} 
	}
}

if (typeof window.$pay === 'undefined') window.$pay = Pay;


  
   




