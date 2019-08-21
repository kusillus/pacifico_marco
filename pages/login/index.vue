<template>
    <div>
        <div class="slider slider_login">
            <img :src="require('@/assets/img/slider.jpg')">
        </div>
    <!-- formulario -->
        <div class="container contenedor_formulario">
            <div class="formulario">
                <form action="">
                    <div class="texto">
                        <label for="nombre"><i class="fas fa-user"></i></label>
                        <input type="text" name="nombre" v-model="payload.full_name" placeholder="Usuario">
                    </div>

                    <div class="texto">
                        <label for="dni"><i class="fas fa-lock"></i></label>
                        <input type="password" name="dni" v-model="payload.password" placeholder="Contraseña">
                    </div>
                    <div class="boton">
                        <input type="submit" value="Ingresar" @click.prevent="login_user(payload)">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios    from 'axios'
import Swal     from 'sweetalert2';
export default {
    // middleware: 'loginAuth',
    middleware: 'redirectLogin',
    // middleware: 'loginAuth',
    // middleware: 'redirectLogin',
    data() {
    	return {
    		show_modal: null,
			payload: {
				full_name: '',
				password: ''		
			},
			winner_info: {
				full_name: '',
				dni_number: '',
				position: 0
			}
        }
    },
    methods: {
        login_user(payload) {
            let vm = this
            if(vm.eval_payload(payload)) {
                // TODO: Servicio para el login
                // axios.get('https://pokeapi.co/api/v2/pokemon/ditto/')
                // .then(response => {
                    let token = 'Alexander-token'
                    // TODO: Seteamos el token que nos responde el servicio.
                    vm.$cookies.set('user-token', token, {
                        path: '/',
                        maxAge: 60 * 60 * 24 * 7
                    })
                    // vm.$store.commit('SET_USER',token)
                    // TODO: Redireccionamos al dashboard
                    this.$store.commit('setLogin', true)
                    window.location.href = '/'
                    // vm.$router.push('/')
                // })
            } else {
                Swal.fire({
					type: 'error',
					title: 'Oops...',
					html: 'Ingresa correctamente usuario y contraseña.',
				})
            }
        },
        send_data(value) {
            let vm = this
    
            if(!vm.eval_payload(value)) {
                Swal.fire({
                    type: 'warning',
                    title: 'Oops...',
                    html: 'Llena correctamente la información para continuar.',
                })
            } else {
                vm.resetPayload()
                Swal.fire({
                    type: 'success',
                    title: 'Listo!',
                    html: 'Ahora estas participando, mucha suerte!',
                })
    
                // Swal.fire({
                // 	type: 'error',
                // 	title: 'Oops...',
                // 	html: 'Ocurrio un problema con tu registro, intenta nuevamente.',
                // })
            }
        },
    
        eval_payload(value) {
            let valid = false
            valid = value.full_name !== null && value.password.length !== null
    
            return valid	
        },
    
        resetPayload() {
            let vm = this
            vm.payload.full_name = ''
            vm.payload.dni_number = ''
    
            vm.winner_info.full_name = ''
            vm.winner_info.dni_number = ''
            vm.winner_info.position = 0
        },
    }
}
</script>

<style lang="scss">
.swal2-title{
    display: block;
    &::after{
        display: none;
    }
}

</style>