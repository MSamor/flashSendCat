<template>
	<view>
		<view class="center" @click="punch" id="crop">
			{{ name }}
		</view>
		
	</view>
</template>

<script>

	export default {
		data() {
			return {
				name:'点击打卡',
				daka:0,
				//0是未打卡 1是打卡成功,3是未开放
				hoursTip:' ',
				my:{}
			}
		},
		onLoad(){
				this.PsFetch()
			　this.getMycount()
		},
		methods: {
			
			punch(){
				if(this.daka == 0){
						this.daka = 1
						this.name = "打卡成功"
						this.postPunch()
					}
					else if(this.daka == 3){
						this.name = "暂未开启打卡"
					
					}
			},
			PsFetch(){
				var token = localStorage.token
					uni.request({
						url: 'http://localhost:3001/auth/user',
						method:"GET",
						
						header: {
							'Authorization':"Bearer "+token
						},
						success: (res) => {
							this.my = res.data
							console.log(this.my.name)
						}
				})
				},
			postPunch(){
					const _this = this
					uni.request({
						url:'http://localhost:3001/daka',
						method:"POST",
						data:{
							daka:_this.daka,
							name:_this.my.name
						}
					})
				},
			getMycount:function(){
			　　let self=this;
			　　let date=new Date();
			　　if(date.getHours()>=11&&date.getHours()<=14){
					this.daka = 0　　　
						
			　　}else if(date.getHours()>=16&&date.getHours()<21){
					this.daka = 0
					
			　　}else{
				this.daka = 3
			　　}
		}
	},
}
</script>

<style>
	.center{
		height:200px;
		width: 200px;
		font-size: 25px;
		color:white;
		font-weight: bold;
		text-align: center;
		margin:0 auto;
		line-height: 200px;
		margin-top:150px;
		border-radius: 50%;
		background-color: #0081FF;
	}
</style>
