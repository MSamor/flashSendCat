<template>
	<view>
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				
					<router-link class="cu-item flex-sub" style="text-decoration: none;" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in nav" :key="index" @tap="tabSelect" :to="item.to" :data-id="index">
							{{ item.name }}
					</router-link>
			</view>
		</scroll-view>
		<view class="cu-bar search bg-white">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input  :adjust-position="false" type="text" placeholder="搜索订单" confirm-type="search" @input="searchAction($event)"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow-blur round">搜索</button>
			</view>
		</view>
		
		<view class="order" v-if="searchResult.length>0">
				<view class="orderlist" v-for="(item , i) in searchResult" :key="i">
					<view class="" v-for="(itemn , i) in item.num" :key="i">
				<view class="orderlisttop" style="font-weight: bold;">
					<view class="orderlisttopleft" >
						{{ item.productName }}
					</view>
					<view class="orderlisttopright" style="color:red;">
						￥{{ item.price/100 }}
					</view>
				</view>
				<view class="orderlistname" style="color: red;">
					名字:{{ item.userName }}
				</view>
				<view class="orderlistphone" style="font-weight: bold;">
					联系方式：{{ item.phoneNum }}
				</view>
				<view class="orderlistphone" style="font-weight: bold;">
					数量：{{ item.num }}
				</view>
				<view class="orderlistphone" style="color:blue">
					地址：{{ item.address }}
				</view>
					<view class="orderlistdesc">
					备注：{{ item.desc }}
					</view>
		
				</view>
			</view>
		</view>
		
		<view class="order" v-else>
				<view class="orderlist" v-for="(item , i) in order" :key="i">
				<view class="orderlisttop" style="font-weight: bold;">
					<view class="orderlisttopleft">
						{{ item.productName }}
					</view>
					<view class="orderlisttopright" style="color:red;">
						￥{{ item.price/100 }}
					</view>
				</view>
				<view class="orderlistname" style="color: red;">
					名字:{{ item.userName }}
				</view>
				<view class="orderlistphone" style="font-weight: bold;">
					联系方式：{{ item.phoneNum }}
				</view>
				<view class="orderlistphone" style="font-weight: bold;">
					数量：{{ item.num }}
				</view>
				<view class="orderlistphone" style="color:blue">
					地址：{{ item.address }}
				</view>
					<view class="orderlistdesc">
					备注：{{ item.desc }}
					</view>
		
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
			CustomBar: this.CustomBar,
			modalName: null,
			radio: 'radio1',
				searchResult:[],
				click:0,
				TabCur: 1,
				nav:[
					{ name:'未完成订单'  , to:'/pages/order/order'},
					{  name:'已完成订单' , to:''}
				],
				scrollLeft: 0,
				order:[]
			}
		},
		onLoad(){
			this.getOrder()
			this.data()
		},
			
		methods: {
			data(){
				console.log(date.getDate())
			},		
			searchAction(e){
									const inputValue = e.target.value;
									
									this.searchResult = this.order.filter((item) => {
										if(item.userName.includes(inputValue) && inputValue != ''){
											return item
											}
									})
								
						},
						showModal(item) {
							this.modalName = e.currentTarget.dataset.target
						},
						hideModal(e) {
							this.modalName = null
							console.log(e)
						},
						RadioChange(e) {
							this.radio = e.detail.value
						},
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			
			getOrder() {
				const date=new Date();
			for(var i=1 ; i<=40 ; i++){
				uni.request({
					url: `http://localhost:3001/ordername?query={"page":${i}}`,
					method:"GET",
					success: (res) => {
						// this.order = res.data.data
						// this.id.push({ data : res.data.data[i].orderId })
						for (var i = 0; i < 10; i++) {
							if(res.data.data[i].userName && res.data.data[i].time == date.getDate()){
										this.order.push(res.data.data[i])
									}
								}
							}
						})
					}
				}
			},
		}
</script>

<style scoped>
	.order{
		width:100%;
		height:auto;
		
	}
	
	.orderlist{
		display: inline-block;
		height:auto;
		margin-top:5px;
		width:100%;
		background-color: white;
	}
	.orderlisttop{
		display: flex;
		height:30px;
		width:100%;
		line-height: 30px;
		border-bottom: #b8b8b8;
	}
	.orderlistname{
		height:20px;
		width: 100%;
		
	}
	.orderlistphone{
		height:20px;
		width:100%;
	
	}
	.orderlistdesc{
		height:auto;
		width:100%;
			
	}
	.orderlisttopleft{
		width:85%;
		height:100%;
	}
	.orderlisttopright{
		width:15%;
		text-align: center;
		line-height: 32px;
	
		height:100%;
	}
	.button{
		background-color: #18B566;
		height:30px;
		width:60px;
		margin-top:10px;
		margin-bottom: 10px;
		text-align: center;
		margin-left:80%;
		line-height:35px;
		color:white;
	}
	
</style>