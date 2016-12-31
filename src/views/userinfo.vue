<template>
	<div>
		Hello Kitty!
		<a @click="show = true">show</a>
		<modal :show.sync="show"></modal>
	</div>
</template>
<script>
	import modal from './../components/modal.vue';
	export default{
		components:{
			modal
		},
		data(){
			return{
				show :false,

			};
		},
		ready(){
		},
		watch:{
			show(val){
				if(val){
					document.getElementsByTagName('html')[0].className = "body-tanchulai";
					document.getElementsByTagName('body')[0].className = "body-tanchulai"; 
				}else{
					document.getElementsByTagName('html')[0].className = "";
					document.getElementsByTagName('body')[0].className = "";
				}
			}
		},
		computed:{
		},
		methods:{
		}
	};
</script>
<style type="text/css">
	.body-tanchulai{
		height: 100%;
		overflow:hidden;
	}
</style>
