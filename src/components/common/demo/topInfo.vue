<template>
	<div class="container">
		<!--展开-->
		<div class="one" v-if="!foldaway">
			<div class="left">
				<div class="label">距离{{options.date.ltDateNumber}}期截止</div>
				<div class="time_container">
					<div class="hour">{{clock.hour}}</div>
					<div class="dot">:</div>
					<div class="min">{{clock.min}}</div>
					<div class="dot">:</div>
					<div class="sec">{{clock.sec}}</div>
				</div>
			</div>
			<div class="right">
				<div class="label">余额（元）<span class="toggleMoney" @click="handleToggleMoney">eye</span></div> 
				<div class="totalMoney" v-if="showBalance">{{options.validTotalBalance}}</div>
				<div class="totalMoney" v-else>******</div>
			</div>
		</div>
		
		<!--折叠-->
		<div class="two" v-if="foldaway">
			<div class="left">
				<div class="label">距离{{options.date.ltDateNumber}}期截止</div>
				<div class="time_container">
					<div class="hour">{{clock.hour}}</div>
					<div class="dot">:</div>
					<div class="min">{{clock.min}}</div>
					<div class="dot">:</div>
					<div class="sec">{{clock.sec}}</div>
				</div>
			</div>
		</div>
		
		<!--操作按钮-->
		<div class="other" @click="handleFoldaway"></div>
	</div>
</template>

<script>
	export default {
		name:'LtGameTopInfo',
		data() {
			return {
				showBalance:true,
				foldaway:false,
				clock:{
					totalSeconed:0,
					hour:'--',
					min:'--',
					sec:'--'
				},
				intervalId:null
			}
		},
		props:['options'],
		created() {
			this.showBalance = !this.options.isHideBalance; 
			this.clock.totalSeconed = this.options.date.totalSeconed;
			this._initClock();
		},
		methods: {
			_initClock() {
				let _this = this;
				if (_this.intervalId == null) {
				_this.intervalId = setInterval(function(){
					_this.clock.totalSeconed--;
					if (_this.clock.totalSeconed >= 3600) {return;}
					if (_this.clock.totalSeconed >= 0) {
						let sec = Math.floor(_this.clock.totalSeconed % 60);
						let min = Math.floor((_this.clock.totalSeconed - sec) / 60);
						let hour = Math.floor(_this.clock.totalSeconed / 60 /60);

						_this.clock.sec = sec >= 10 ? sec : '0' + sec;
						_this.clock.min = min >= 10 ? min : '0' + min;
						_this.clock.hour = hour >= 10 ? hour : '0' + hour;

					}
					else {
						window.clearInterval(_this.intervalId);
						_this.intervalId = null;
					}
				}, 1000);
			}
			},
			handleToggleMoney() {
				// 隐藏金额
				this.showBalance = !this.showBalance;
			},
			handleFoldaway(){
				// 折叠
				this.foldaway = !this.foldaway;
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		position: relative;
		width: 100%; 
		background-color: #252932;
		color: #fff;
	
		/* 未折叠 */
		.one {
			text-align: center;

			.left {
				display: inline-block;
				width: 49%;
				height: 136/20rem;
				border-right: 1px solid #1c1a21;
				
				.label {
					margin-top: 20/20rem;
					font-size: 24/20rem;
				}

				.time_container {
					margin-top: 20/20rem;

					> div {
						display: inline-block;
					}

					.hour,.min,.sec {
						width: 40/20rem;
						height: 40/20rem;
						line-height: 40/20rem;
						background-color: #1c1a21;
						border-radius: 3/20rem; 
					}
				}
			}
			.right {
				display: inline-block;
				width: 49%; 
				
				.label {
					margin-top:20/20rem;
					font-size: 24/20rem;
				}

				.totalMoney {
					margin-top: 20/20rem;
					font-size: 24/20rem;
				}
				
			}

		}

		/* 折叠 */
		.two {
			height: 90/20rem;
			line-height: 90/20rem;

			.left {
				padding-left: 24/20rem;

				.label {
					display: inline-block;
					font-size: 24/20rem;
				}

				.time_container { 
					display: inline-block;
					margin-left: 20/20rem;

					> div {
						display: inline-block;
					}

					.hour,.min,.sec {
						text-align: center;
						width: 40/20rem;
						height: 40/20rem;
						line-height: 40/20rem;
						background-color: #1c1a21;
						border-radius: 3/20rem; 
					}
				}
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
</style>