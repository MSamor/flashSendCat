<template>
	<view>
		<view class="img" @click="getOrder">
			<image src="../../static/qian.png" mode="" style="height:140px;"></image>
		</view>
		<view class="text">
			今日收益：￥{{ price }}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order:[],
				price:0,
				price1:0,
				page:0,
				arr:[],
				arrzj:[],
				arrwp:[],
				arrtxx:[],
				arrlsz:[],
				arrsy:[],
				arrzlh:[],
				arrljj:[],
				arrsmy:[],
				i:0
			}
		},
		onShow() {
			this.getOrderTotal()
		},
		methods: {
			getOrderTotal() {
				uni.request({
					url: `http://localhost:3001/ordername`,
					method:"GET",
					success: (res) => {
						// this.order = res.data.data
						// this.id.push({ data : res.data.data[i].orderId })
							this.page = res.data.total
							}
						})
					},
		
			token(){
				var token = localStorage.token
				uni.request({
					url: 'http://localhost:3001/auth/user',
					method:"GET",
					
					header: {
						'Authorization':"Bearer "+token
					},
					success: (res) => {
						if(res.data.name == "郑纪"){
							this.price = 0
								console.log(this.arrzj)
								for(var i=0 ; i<=this.arrzj.length ; i++){
									this.price = this.arrzj[i].price/100+this.price
								}
							}
							if(res.data.name == "刘恩纶"){
								this.price = 0
									for(var i=0 ; i<=this.arr.length ; i++){
										this.price = this.arr[i].price/100+this.price
									}
								}
								if(res.data.name == "魏鹏"){
									this.price = 0
										for(var i=0 ; i<=this.arrwp.length ; i++){
											this.price = this.arrwp[i].price/100+this.price
										}
									}
									if(res.data.name == "谭兴贤"){
										this.price = 0
											for(var i=0 ; i<=this.arrtxx.length ; i++){
												this.price = this.arrtxx[i].price/100+this.price
											}
										}
										if(res.data.name == "刘燊圳"){
											this.price = 0
												for(var i=0 ; i<=this.arrlsz.length ; i++){
													this.price = this.arrlsz[i].price/100+this.price
												}
											}
											if(res.data.name == "申叶"){
												this.price = 0
													for(var i=0 ; i<=this.arrsy.length ; i++){
														this.price = this.arrsy[i].price/100+this.price
													}
												}
												if(res.data.name == "周礼豪"){
													this.price = 0
														for(var i=0 ; i<=this.arrzlh.length ; i++){
															this.price = this.arrzlh[i].price/100+this.price
														}
													}
													
														if(res.data.name == "帅明垚"){
															this.price = 0
																for(var i=0 ; i<=this.arrsmy.length ; i++){
																	this.price = this.arrsmy[i].price/100+this.price
																}
															}
															if(res.data.name == "梁家俊"){
																this.price = 0
																	for(var i=0 ; i<=this.arrljj.length ; i++){
																		this.price = this.arrljj[i].price/100+this.price
																	}
																}
																
					}
				})
			},
			
			getOrder() {
				this.i++
				if(this.i == 1){
				for(var i=1 ; i<=this.page ; i++){
				uni.request({
					url: `http://localhost:3001/ordername?query={"page":${i}}`,
					method:"GET",
					success: (res) => {
						// this.order = res.data.data
						// this.id.push({ data : res.data.data[i].orderId })
							// this.page = res.data.total
							for (var j = 0; j < 10; j++) {
								if(res.data.data[j].PsName == "刘恩纶"){
									this.arr.push(res.data.data[j])
								}
								if(res.data.data[j].PsName == "郑纪"){
									this.arrzj.push(res.data.data[j])
								}
								if(res.data.data[j].PsName == "魏鹏"){
									this.arrwp.push(res.data.data[j])
								}
								if(res.data.data[j].PsName == "谭兴贤"){
									this.arrtxx.push(res.data.data[j])
								}
								if(res.data.data[j].PsName == "刘燊圳"){
									this.arrlsz.push(res.data.data[j])
								}
								if(res.data.data[j].PsName == "申叶"){
									this.arrsy.push(res.data.data[j])
								}
								if(res.data.data[j].PsName == "周礼豪"){
									this.arrzlh.push(res.data.data[j])
								}
								if(res.data.data[j].PsName == "帅明垚"){
									this.arrsmy.push(res.data.data[j])
								}
								if(res.data.data[j].PsName == "梁家俊"){
									this.arrljj.push(res.data.data[j])
								}
							}
						}
						})
					}
					
					
						this.token()
					}
			}
	},
	}
</script>

<style>
	.img{
		width:150px;
		height:140px;
		margin:0 auto;
		margin-top:130px;
	}
	.text{
		width:150px;
		height:30px;
	
		margin:0 auto;
		text-align: center;
		font-size: 20px;
		font-weight: bold;
		margin-top:30px;
	}
</style>
