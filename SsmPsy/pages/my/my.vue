<template>
	<view>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 我的
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow" @tap="showModal" data-target="menuModal">设置</button>
			</view>
		</view>
		<view class="cu-modal" :class="modalName=='menuModal'?'show':''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop>
				<view class="cu-list menu text-left solid-top">
					<view class="cu-item">
						<view class="content">
							<text class="text-grey">短边框</text>
						</view>
						<view class="action">
							<switch @change="MenuBorder" :class="menuBorder?'checked':''" :checked="menuBorder?true:false"></switch>
						</view>
					</view>
					
					<view class="cu-item">
						<view class="content">
							<text class="text-grey">卡片</text>
						</view>
						<view class="action">
							<switch @change="MenuCard" :class="menuCard?'checked':''" :checked="menuCard?true:false"></switch>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
			<view class="cu-item" :class="menuArrow?'arrow':''">
				<view class="content">
					<text class="cuIcon-circlefill text-grey"></text>
					<text class="text-grey">姓名</text>
				</view>
			</view>
			
			<view class="cu-item" :class="menuArrow?'arrow':''">
				<button class="cu-btn content" open-type="contact">
					<text class="cuIcon-btn text-olive"></text>
					<text class="text-grey">团队地址</text>
				</button>
			</view>
			<view class="cu-item" :class="menuArrow?'arrow':''">
				<navigator class="content" hover-class="none"  open-type="redirect">
					<text class="cuIcon-discoverfill text-orange"></text>
					<text class="text-grey">联系方式</text>
				</navigator>
			</view>
		
		
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				gridCol: 3,
				gridBorder: false,
				menuBorder: false,
				menuArrow: false,
				menuCard: false,
			}
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			MenuArrow(e) {
				this.menuArrow = e.detail.value
			},
			hideModal(e) {
				this.modalName = null
			},
			MenuBorder(e) {
				this.menuBorder = e.detail.value
			},
			MenuCard(e) {
				this.menuCard = e.detail.value
			},
		}
	}
</script>

<style>

</style>
