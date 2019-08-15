<template>
  	<div class="">
		<div class="slider">
			<img :src="require('@/assets/img/slider.jpg')">
			<h1>¡Elige el diseño que mas te guste para tu foto!</h1>
		</div>    
		<div class="container texto_inicial">
			<p>Con esta aplicación podrás añadirle un diseño al marco de tu foto de perfil para tu plataforma de workplace. Esperamos que te sea de utilidad.</p>
		</div>
  	</div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
</style>
