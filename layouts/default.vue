<template>
	<div class="grid_template_wrapper">
		<header class="contenedor_header">
			<nuxt-link to="/">
				<img :src="require('@/assets/img/logo_blanco.png')">
			</nuxt-link>
			<nuxt-link to="/login">
				<i class="fas fa-user"></i>
				Ingresar
			</nuxt-link>
    	</header>
    	<nuxt />
		<footer class="contenedor_footer">
			<p>Copyright © Derechos reservados <strong>Pacífico Seguros</strong> . Desarrollado por <strong><a href="https://creatosdesign.com">CREATOS DESIGN</a></strong></p>
		</footer>
	</div>
</template>

<style>
.grid_template_wrapper{
	display: grid;
	grid-template-rows: auto 1fr auto;
	min-height: 100vh;
}
</style>
