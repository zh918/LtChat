<!-- 该开奖处不带折叠 -->
<template>
	<div class="container">
		<div class="date_number">{{options.ltDateNumber}}期</div>
		<div class="ball_container">
			<div class="ball" v-for="(ball,index) in options.data">{{ball < 10 ? '0'+ball : ball}}</div>
		</div> 
	</div>
</template>

<script>
	export default {
		name:'LtGameTopResult',
		data() {
			return {

			}
		},
		props:["options"]
	}
</script>

<style lang="less" scoped>
	.container {
		position: relative;
		height: 90/20rem;
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
				text-align: center;
				background-color: #ff8600;
				border-radius: 20/20rem;
				color: #fff;
				font-size: 24/20rem;
			}
		} 

	}
</style>