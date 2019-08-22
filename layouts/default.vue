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
import axios    from 'axios'
import Swal     from 'sweetalert2';
export default {
	mounted() {
		if(this.$cookies.get('user-token')){
			this.$store.commit('setLogin', true)
		}
	},
	data() {
		return {
		}
	},
	computed: {
		showQuitBtn() {
			return this.$store.getters.getLogin
		}
	},
	methods: {
		quitDashboard(payload) {
            let vm = this
			// TODO: Servicio para el logout
			axios({
				url: process.env.service_url + 'logout',
				method: 'post',
			}).then(response => {
				let res = response.data
				vm.$cookies.removeAll()
				this.$store.commit('setLogin', false)
				window.location.href = '/login'
			})
        }
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