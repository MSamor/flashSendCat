<template>
	<view>
		<view class="top">
			<view class="head">
				闪送猫配送后台
			</view>
		</view>
		<view class="center">
			<view class="centertop">
				订 单
			</view>
			<view class="centerall">
				<view class="centerallsuccess">

					<view class="centerallicon">

					</view>
					<view class="centeralltext" @click="postSsm">
						未完成订单: {{ order2Length }}
					</view>
				</view>
				<view class="centerallsuccess">
					<view class="centerallicon" style="	background-color: green;">

					</view>
					<view class="centeralltext">
						已完成订单: {{ order1Length }}
					</view>
				</view>
			</view>
		</view>
		<view class="select">
			<view class="selectbox" @click="order">
				<view class="selectboxcenter">
					<view class="selectboximg">
						<image src="../../static/shujutongji.png" mode="" style="height:40px;width:40px;margin-top:15px;margin-left:20px;"></image>
					</view>
					<view class="selectboxtext">
						订单详情
					</view>
				</view>
			</view>
			<view class="selectbox" @click="punch">
				<view class="selectboxcenter">
					<view class="selectboximg">
						<image src="../../static/daqia.png" mode="" style="height:45px;width:45px;margin-top:15px;margin-left:20px;"></image>
					</view>
					<view class="selectboxtext">
						打卡上班
					</view>
				</view>
			</view>

		</view>
		<view class="select" style="margin-top:0px;" :data="Ssm">
			<view class="selectbox" @click="income">
				<view class="selectboxcenter">
					<view class="selectboximg">
						<image src="../../static/deposit.png" mode="" style="height:40px;width:40px;margin-top:15px;margin-left:20px;"></image>
					</view>
					<view class="selectboxtext">
						今日收益
					</view>
				</view>
			</view>
			<view class="selectbox" @click="my">
				<view class="selectboxcenter">
					<view class="selectboximg">
						<image src="../../static/wode.png" mode="" style="height:45px;width:45px;margin-top:15px;margin-left:20px;"></image>
					</view>
					<view class="selectboxtext">
						我的
					</view>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				Ssm: [],
				SsmTotal: 0,
				page: 1,
				id:[],
				n:0,
				order1:[],
				order2:[],
				order1Length:0,
				order2Length:0
			}
		},
		onLoad() {
			// this.getTotal()
			this.getOrder()
			this.getpush()
		},
		methods: {
			getOrder() {
			for(var i=1 ; i<=40 ; i++){
				uni.request({
					url: `http://localhost:3001/order?query={"page":${i}}`,
					method:"GET",
					success: (res) => {
						// this.order = res.data.data
						// this.id.push({ data : res.data.data[i].orderId })
						for (var i = 0; i < 10; i++) {
							if(res.data.data[i].userName && res.data.data[i].state==300){
										this.order1.push(res.data.data[i])
										this.order1Length = this.order1.length
									}
									else if(res.data.data[i].userName && res.data.data[i].state==200){
										this.order2.push(res.data.data[i])
										this.order2Length = this.order2.length
									}
								}
							}
						})
					}
				},
			// getTotal() {
			// 	for(var j =1 ;j<=40 ; j++){
			// 	uni.request({
			// 		url: `http://localhost:3001/order?query={"page":${j}}`,
			// 		method:"GET",
			// 		success: (res) => {
			// 			for(var i =0 ; i<10 ; i++){
			// 				this.id.push({ data : res.data.data[i].orderId })
			// 			}
			// 		}
			// 	})
				
			// 	}
			// },
			
			getpush() {
				for (this.page=1; this.page <= 40; this.page++) {
					uni.request({
						url: 'http://121.41.129.196:3000/orders/getOrderList/200?page=' + this.page,
						data: {
							text: 'uni.request'
						},
						header: {
							'auth': 'eyJhbGciOiJIUzI1NiJ9.YWRtaW4.7NDYfc1uPWmAI9UfqrMymuxW3H0OJndJPjKQO2djTz4'
						},
						success: (res) => {
							this.SsmTotal = res.data.pager.Total
							for (var i = 0; i < 10; i++) {
								var obj = eval('(' + res.data.data[i] + ')');
								// if(this.id[this.n].data != ){
									
								// }
								uni.request({

									header: {

										'Content-Type': 'application/x-www-form-urlencoded'

									},

									url: 'http://localhost:3001/order/a', //仅为示例，并非真实接口地址。

									method: 'POST',

									data: {
										_openid: obj._openid,
										address: obj.address,
										desc: obj.desc,
										num: obj.num,
										openId: obj.openId,
										orderId: obj.orderId,
										phoneNum: obj.phoneNum,
										price: obj.price,
										productId: obj.productId,
										productName: obj.productName,
										sellNum: obj.sellNum,
										state: obj.state,
										type: obj.type,
										expressGet: obj.expressGet,
										userName: obj.userName,
									},

									dataType: 'json',

									success: (res) => {


									}

								})
							}
						}

					});
				}
			},
			order() {
				uni.navigateTo({
					url: '../order/order'
				})
			},
			punch() {
				uni.navigateTo({
					url: '../punch/punch'
				})
			},
			income() {
				uni.navigateTo({
					url: '../income/income'
				})
			},
			my() {
				uni.navigateTo({
					url: '../my/my'
				})
			}
		}
	}
</script>

<style scoped>
	.top {
		height: 150px;
		width: 100%;
		background-color: #007AFF;
	}

	.head {
		text-align: center;
		height: 30px;
		width: 50%;
		font-size: 1rem;
		line-height: 30px;
		margin: 0 auto;
		font-weight: bold;
		font-family: 宋体;
		color: white;
	}

	.center {
		background-color: white;
		height: 120px;
		width: 90%;
		margin: 0 auto;
		border-radius: 10px;
		margin-top: -100px;
	}

	.centertop {
		height: 30px;
		width: 60px;
		font-weight: bold;
		font-size: 1rem;
		line-height: 30px;
		text-align: center;
	}

	.centerall {
		display: inline-block;
		width: 90%;

		display: flex;
		height: 30px;
		margin: 0 auto;
		margin-top: 15px;
		justify-content: space-between;
	}

	.centerallsuccess {
		display: flex;
		width: 50%;
		height: 100%;
		margin-top: 10px;
	}

	.centerallicon {
		height: 25px;
		width: 5px;
		margin-left: 20px;
		margin-top: 5px;
		background-color: red;
		border-radius: 20px;
	}

	.centeralltext {
		font-size: .8rem;
		font-weight: bold;
		margin-top: 6px;
		margin-left: 10px;
	}

	.select {
		display: flex;
		width: 100%;
		height: 230px;
		margin: 0 auto;
		margin-top: 30px;
		justify-content: space-around;
	}

	.selectbox {
		background-color: white;
		height: 200px;
		border-radius: 15px;
		width: 40%;
	}

	.selectboxcenter {
		margin: 0 auto;
		margin-top: 40px;
		height: 130px;
		width: 120px;
	}

	.selectboximg {
		width: 70%;
		margin: 0 auto;
		height: 70px;
	}

	.selectboxtext {
		height: 20px;
		width: 80px;
		font-size: .8rem;
		margin: 0 auto;
		font-weight: bold;
		text-align: center;
	}
</style>
