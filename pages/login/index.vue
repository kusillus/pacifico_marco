<template>
    <div>
        <div class="slider slider_login">
            <img :src="require('@/assets/img/slider.jpg')">
        </div>
        <div class="container contenedor_formulario">
            <div class="formulario">
                <form action="">
                    <div class="texto">
                        <label for="nombre"><i class="fas fa-user"></i></label>
                        <input type="text" name="nombre" v-model="payload.dni" placeholder="DNI">
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
    middleware: 'redirectLogin',
    data() {
    	return {
    		show_modal: null,
			payload: {
				dni: '',
				password: ''		
			},
        }
    },
    methods: {
        login_user(payload) {
            let vm = this
            if(vm.eval_payload(payload)) {
                // TODO: Servicio para el login
                axios({
                    url: process.env.service_url + 'auth',
                    method: 'post',
                    data: {
                        dni: payload.dni,
                        password: payload.password
                    }
                }).then(response => {
                    let res = response.data
                    if(res.status) {
                        let token = 'Alexander-token'
                        // TODO: Seteamos el token que nos responde el servicio.
                        vm.$cookies.set('user-token', token, {
                            path: '/',
                            maxAge: 60 * 60 * 24 * 7
                        })
                        // TODO: Redireccionamos al dashboard
                        window.location.href = '/plantillas'
                        vm.resetPayload()
                    } else {
                        Swal.fire({
                            type: 'error',
                            title: 'Ops!',
                            html: res.message,
                        })
                    }

                })
            } else {
                Swal.fire({
					type: 'error',
					title: 'Oops...',
					html: 'Ingresa correctamente usuario y contraseña.',
				})
            }
        },
    
        eval_payload(value) {
            let valid = false
            valid = value.dni.length === 8 && value.password.length !== null
    
            return valid	
        },
    
        resetPayload() {
            let vm = this
            vm.payload.dni = ''
            vm.payload.dni_number = ''
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