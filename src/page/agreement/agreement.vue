<template>
    <div>
        <ymt-bar-nav>
            <div slot="left" @click="back"><i class="iconfont icon-back"></i></div>
            <div>委托授权及重要告知</div>
        </ymt-bar-nav>

        <div class="agreement-content">

            <div class="ymt-list">
                <div class="list-group">

                    <div class="list-item" v-for="(item,index) in agreementList" @click="goAgreementDetails(index)">
                        <div>{{item.title}}</div>
                        <i class="iconfont icon-next"></i>
                    </div>

                </div>
            </div>

        </div>

    </div>

</template>

<script>
    export default {
        data() {
            return {
                basePath:"../../../app5/static/",
                //basePath:"../../../static/",
                agreementList: [],
            }
        },
        beforeCreate(){
            document.title = '登录'; 
        },
        created() {
            this.recieveEvent();
            this.agreementList = [{
                    title: "一、用户委托授权书",
                    detailsTitle: "用户委托授权书",
                    path: `${this.basePath}agreement_html/userAuthorized.html`
                },
                {
                    title: "二、客户告知书",
                    detailsTitle: "客户告知书",
                    path: `${this.basePath}agreement_html/userNotification.html`
                },
                {
                    title: "三、重要告知及购买声明",
                    detailsTitle: "重要告知及购买声明",
                    path: `${this.basePath}agreement_html/informAndStatement.html`
                },
                {
                    title: "四、机动车综合商业保险免责事项说明书",
                    detailsTitle: "机动车综合商业保险免责事项说明书",
                    path: `${this.basePath}agreement_html/manualOfBusiness.html`
                },
                {
                    title: "五、机动车综合商业保险示范条款",
                    detailsTitle: "机动车综合商业保险示范条款",
                    path: `${this.basePath}agreement_html/modelClauseOfBusiness.html`
                },
                {
                    title: "六、机动车交通事故责任强制保险条例",
                    detailsTitle: "机动车交通事故责任强制保险条例",
                    path: `${this.basePath}agreement_html/ruleOfTraffic.html`
                },
            ];
        },

        methods: {
            back() {
                this.$router.go(-1);
            },
            goAgreementDetails(index) {
                log(index);
                this.$router.push({path:"/agreement/agreementDetails",query:{details:JSON.stringify(this.agreementList[index])}});
            },
            recieveEvent() {
                let _this = this;
                //安卓物理返回键
                if(window.Was) {
                    Easymi.app.addEventListener('onBackKeyPressed', function() {
                        log('回退键');
                        _this.back();

                    });
                }

            }
        },
    }
</script>