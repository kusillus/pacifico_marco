<template>
  	<div class="">
		<div class="slider">
			<img :src="require('@/assets/img/slider.jpg')">
			<h1>¡Elige el diseño que mas te guste para tu foto!</h1>
		</div>
		<div class="container texto_inicial">
			<p>Con esta aplicación podrás añadirle un diseño al marco de tu foto de perfil para tu plataforma de workplace. Esperamos que te sea de utilidad.</p>
		</div>
		<div>
			<vue-marco/>
		</div>  
  	</div>
</template>

<script>
import Marco from '~/components/Marco.vue'

export default {
	// middleware: 'loginAuth',
	// layout: 'other',
	components: {
		'vue-marco': Marco
	},
	methods:{
	}
}
</script>

<style>
</style>
