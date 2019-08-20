<template>
	<div class="grid_template_wrapper">
		<header class="contenedor_header">
			<nuxt-link to="/">
				<img :src="require('@/assets/img/logo_blanco.png')">
			</nuxt-link>
			<span>
				<nuxt-link v-show="!showQuitBtn" to="/login">
					<i class="fas fa-user"></i>
					Ingresar
				</nuxt-link>
				<span v-show="showQuitBtn" class="pl-2 btn-quit-app" @click="quitDashboard()" style="">
					<i class="fas fa-sign-out-alt"></i>
					Salir
				</span>
			</span>
    	</header>
    	<nuxt />
		<footer class="contenedor_footer">
			<p>Copyright © Derechos reservados <strong>Pacífico Seguros</strong> . Desarrollado por <strong><a href="https://creatosdesign.com">CREATOS DESIGN</a></strong></p>
		</footer>
	</div>
</template>

<script>
export default {
	mounted() {
		if(this.$cookies.get('user-token')){
			this.$store.commit('setLogin', true)
		}
	},
	data() {
		return {
			// showQuitBtn: false
			// rand: Math.random()
		}
	},
	computed: {
		showQuitBtn() {
			
			// return this.$store.getLogin()
			return this.$store.getters.getLogin
		}
	},
	methods: {
		quitDashboard() {
			let vm = this
			// Salimos del sistema y borramos las cookie
			vm.$cookies.removeAll()
			vm.$router.push({path: '/login/'})
			this.$store.commit('setLogin', false)
			// this.rand = Math.random()
		},
	}

}
</script>


<style>
.grid_template_wrapper{
	display: grid;
	grid-template-rows: auto 1fr auto;
	min-height: 100vh;
}
.btn-quit-app{
	color: #fff;
	text-decoration: none;
	font-weight: bold;
	cursor: pointer;
}
</style>