export const orderSubmit = {
    errorCode: 0,
    errorMsg: "请在2018年8月25日后再购买",
    data: {
        orderID: "121", //订单id
        orderNumber: "213454321045" //订单编号
    }
}

export const orderPay = {
    errorCode: 0,
    errorMsg: "后台逻辑异常", //错误信息
    data: {
        payOrderID: "45456456464458", //支付凭证ID
        payOrderNumber: "78932300120000", //支付凭证编号
        payAmount: 2370.574, //支付的总金额
        goodsName: "商品5", //商品名称
        lastPayDateTime: "2017-07-28 15:30:30" //最后支付时间    yyyy-MM-dd hh:mm:ss
    }
}

export const orderDetails = {
    errorCode: 0,
    errorMsg: "2018年8月25日",
    data: {
        orderID: "ID123415", //订单id
        orderNumber: "P13529527111", //订单编号
        orderStatus: "1", //订单状态
        goods: {
            goodsID: '12', //商品ID
            goodsName: '一年保商品3', //商品名称
        },
        car: {
            carID: '11', //车辆ID
            // carOwner: "车车车", //车主姓名
            ownerName:'车主姓名',
            ownerCardID: "4311021993026511", //车主身份证号
            carLicenseNO: "粤X952771", //车牌号
            modelCName: "比亚迪T", //品牌型号
            exhaustscale: "2.0L", //排量
            engineNO: "这是发动机号", //发动机号
            frameNO: "这是车架号", //车架号
            enrollDate: "2017-07-27", //初登日期
            seatsCount: "5", //座位数
        },
        insuredName: "这是被保险人的名字", //被保人姓名
        insuredCardID: "4329071114635655", //被保人身份证
        // insuranceCompany: { //保险公司
        //     companyID: "1", //保险公司ID
        //     companyName: "中国人保", //保险公司名称
        // },
        supplier:{
            supplierID:"1",
            supplierName:"中国人保"
        },
        businessInsurance: { //商业险
            premium: "1100", //商业险总保费
            startDate: "2017-07-28", //商业险起保日期
            endDate: "2018-06-18", //商业险终保日期
            sumIOP: "2510", //不计免赔总额
            kindList: [{ //保障内容
                kindID: 1, //险别ID
                kindName: "机动车辆损失险", //险别名称
                //险别保额
                amountShow: "1164.38元", //险别保额显示值
                realPrice: "1000.00", //车身实际价值（车辆损失险需要返回）
                isFree: "1", //不计免赔标识 1生效 0不生效
                premium: "1164.38", //保费
            }, { //保障内容
                //险别ID
                kindName: "车上人员责任险-司机", //险别名称
                //险别保额
                amountShow: "1164.38元", //险别保额显示值
                realPrice: "保额  100000.00元", //车身实际价值（车辆损失险需要返回）
                isFree: "1", //不计免赔标识 1生效 0不生效
                premium: "1164.38", //保费
            }, { //保障内容
                //险别ID
                kindName: "车上人员责任险-乘客", //险别名称
                //险别保额
                amountShow: "1164.38元", //险别保额显示值
                realPrice: "保额  100000.00元", //车身实际价值（车辆损失险需要返回）
                isFree: "1", //不计免赔标识 1生效 0不生效
                premium: "1164.38", //保费
            }, { //保障内容
                //险别ID
                kindName: "玻璃单独破碎险", //险别名称
                //险别保额
                amountShow: "国产玻璃", //险别保额显示值
                realPrice: "保额  100000.00元", //车身实际价值（车辆损失险需要返回）
                isFree: "1", //不计免赔标识 1生效 0不生效
                premium: "1164.38", //保费
            }, ]
        },
        trafficInsurance: { //交强险，可为空
            premium: "855.00", //交强险总保费
            vehicleTax: "360.00", //交强险车船税金额
            startDate: "2016-01-15", //交强险起保日期
            endDate: "2017-01-10", //交强险终保日期
        },
        amount: "3215.00", //订单总金额
        payAmount: "2715.00", //订单实际支付金额
        freeAmount: "500", //订单优惠金额
        coupon: { //可能会有优惠券信息
            couponID: "1212", //优惠券ID
            couponType: 1, //优惠券类型 1.折扣券 2.代金券 3.免费券 4 赠送券
            couponValue: 0.8, //couponType=1时为 0-1的两位小数值，例如0.9,0.85 couponType=2                       时为具体优惠金额couponType=3 时为免费天数 couponType=4 赠送天数
            couponTitle: "这是一枚优惠券", //优惠券标题
        },
        createTime: "2017-07-27", //订单提交时间（下单时间）
        lastPayDateTime: "16:44", //最后支付（确认）时间
    }
}

export const emailAddressData = {
    errorCode: 0,
    errorMsg: "2018年8月25日",
    data: {
        "receiverName": "那谁", //收件人姓名
        "receiverPhone": "1321548412", //收件人联系电话
        "receiverAddress": "广东省深圳市南山区粤海街道软件产业基地5D2d", //邮寄地址
    }
}

// 待支付订单
export const orderListData = {
    errorCode: 0,
    errorMsg: "2018年8月25日",
    data: [{
        orderID:"1",
        orderNumber:"alskfdjaslkdf234",
        goodsName:"商品5",
        carLicenseNO:"粤B88888",
        insuranceCompanyName:"中国人保",
        payAmount:"888.88"
    },{
        orderID:"2",
        orderNumber:"alskfdjaslkdf234",
        goodsName:"商品3",
        carLicenseNO:"粤B99999",
        insuranceCompanyName:"平安人保",
        payAmount:"9999.88"
    },{
        orderID:"3",
        orderNumber:"7636WDFASDF234",
        goodsName:"交强险",
        carLicenseNO:"粤B66666",
        insuranceCompanyName:"中国人保",
        payAmount:"66666"
    }]
}