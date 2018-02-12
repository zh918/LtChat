<template>
    <div>
        <div class="agreement-details-content">
            <iframe :src="path" class="agreement-container"></iframe>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                path:"../../../static/agreement_html/modelClauseOfBusiness.html"
            }
        },
        beforeCreate(){
            document.title = '登录'; 
        },
        created() {
            // this.path = this.$route.query.path;
        }
    }
</script>

<style lang="less" scoped>
    .agreement-details-content {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        overflow-y: scroll;
    }
    .agreement-container {
        width:100%;
        height:100%;
        border:none;
    }
</style>