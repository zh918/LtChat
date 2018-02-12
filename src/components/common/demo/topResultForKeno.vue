<!-- 带折叠 -->
<template>
	<div>
		<div class="container">
			<div class="date_number">{{options.ltDateNumber}}期</div>
			<div class="ball_container" v-if="isShowNumber">
				<div class="ball" v-for="(ball,index) in options.data">{{ball < 10 ? '0'+ball : ball}}</div>
			</div>
			<div class="other" @click="handleShowNumber"></div>
		</div>
		<div class="quickResult">
			<span>和值:810</span>
			<span>小|双|和|大单|木</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:'LtGameTopResultForKeno',
		data() {
			return {
				isShowNumber:true
			}
		},
		props:["options"],
		methods:{
			handleShowNumber() {
				this.isShowNumber = !this.isShowNumber;
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		position: relative;
		background-color: #252932;
		padding: 0 24/20rem;

		.date_number {
			font-size: 24/20rem;
			color: #fff;
			padding: 10/20rem 0;
		}

		.ball_container {
			.ball {
				display: inline-block;
				width: 40/20rem;
				height: 40/20rem;
				line-height: 40/20rem;
				margin-right: 5/20rem;
				margin-bottom: 5/20rem;
				text-align: center;
				background-color: #ff8600;
				border-radius: 20/20rem;
				color: #fff;
				font-size: 24/20rem;
			}
		}

		.other {
			position: absolute;
			right: 24/20rem;
			top: 20/20rem;
			width: 30/20rem;
			height: 30/20rem;
			background-color: #526d85;
			border-bottom-left-radius: 15/20rem;
			border-bottom-right-radius: 15/20rem;
		}

	}

	.quickResult {
		height: 60/20rem;
		line-height: 60/20rem;
		padding: 0 24/20rem;
		background-color: #252932;
		color: #ff8600;
		font-size: 24/20rem;

		> span {
			margin-right: 10/20rem;
		}
	}
</style>