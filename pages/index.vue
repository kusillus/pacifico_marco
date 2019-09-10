<template>
  	<div class="">
		<div class="slider">
        	<img :src="require('@/assets/img/slider.jpg')">
        	<h1>¡Personaliza tu foto! </h1>
    	</div>
		<div class="container texto_inicial">
			<p>Sigamos viviendo nuestro propósito. Elige uno de estos marcos para tu foto de perfil de Workplace</p>
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
