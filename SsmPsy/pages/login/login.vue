<template>
	<view>
		<view class="center">
			<view class="centertop">
				登 录
			</view>
			<view style="position: absolute;color: red;margin-left:100px;margin-top:10px;display: none;" id="login">
				用户名或密码不正确
			</view>
			<view class="centerusername">
				<view class="centerusername1">
					账号:
				</view>
				<view class="centerusernameinput" >
					<input type="text" value="" style="margin-left:10px;margin-top:3px;" v-model="username"/>
				</view>
			</view>
			<view class="centerusername" style="margin-top:3%;">
				<view class="centerusername1">
					密码:
				</view>
				<view class="centerusernameinput">
					<input type="password" style="margin-left:10px;margin-top:3px;" v-model="password"/>
				</view>
			</view>
			<button class="success" @click="login">
				登录
			</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:'',
				password:'',
			}
		},
		methods: {
		
			async login(){
				uni.request({
					url: `http://localhost:3001/auth/login`,
					method:"POST",
					header: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					data:{
						username:this.username,
						password:this.password
					},
					success: (res) => {
						// this.order = res.data.data
						// this.id.push({ data : res.data.data[i].orderId })
						if(res.data.message){
							document.getElementById('login').style.display="block"
						}else{
							
							document.getElementById('login').style.display="none"
							// sessionStorage.token = res.data.token
							localStorage.token = res.data.token
							uni.redirectTo({
								url:'/pages/index/index'
							})
						}
							}
						})
						// if(this.token == 1){
						// 	uni.redirectTo({
						// 		url:'/pages/index/index'
						// 	})
						// }
			}
		}
	}
</script>

<style scoped>
	page{
		background-color: #1a85ff;
	}
	.center{
		margin:0 auto;
		background-color: white;
		margin-top:130px;
		height:200px;
		width: 90%;
	}
	.centertop{
		height:30px;
		line-height: 30px;
		font-weight: bold;
		font-size: 20px;
		width:100%;
		text-align: center;
	}
	.centerusernameinput{
		height:30px;
		width:80%;
		border:1px solid #9d9d9d;
		border-radius: 20px;
	}
	.centerusername{
		display: flex;
		width:90%;
		height:30px;
		margin:0 auto;
		margin-top:10%;
	}
	.centerusername1{
		width:20%;
		text-align: center;
		height:30px;
		line-height: 30px;
	}
	.centerpassword{
		width:80%;
		height:30px;
	}
	.success{
		width:20%;
		height:30px;
		background-color: #1a85ff;
		border-radius: 5px;
		margin:0 auto;
		color:white;
		text-align: center;
		line-height: 30px;
		margin-top:5%;
	}
</style>
