<template>
  	<div class="">
		<div class="slider">
			<img :src="require('@/assets/img/slider.jpg')">
			<h1>Carga tus plantillas</h1>
		</div> 
        <div class="container py-5">
            <div class="pb-4">
                <button class="btn btn-primary" @click="modalShowHide(true)" data-toggle="modal" data-target="#exampleModalCenter">Nueva plantilla</button>
            </div>
            <div>
                <h4>
                    Listado de plantillas cargadas.
                </h4>
                <div class="d-flex overflow-auto strech-width-panel">
                    <div v-for="(item, i) in listTemplates" :key="i" class="m-2 wrapper_window">
                        <img style="width: 100%;" :src="getValidURL(item.path)" :alt="item.name">
                        <button class="btn btn-outline-danger outline w-100" @click="updateTemplates(item.id)">
                            <i class="fas fa-trash"></i>
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal" v-if="show_modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenter" aria-hidden="true" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Nueva plantilla</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="nombre_ganador">
                                <label class="file" :style="{backgroundImage: 'url(\'' + imagen + '\')' }">
                                    <input
                                        type="file"
                                        class="file-input"
                                        aria-label="Subir imagen"
                                        accept="image/x-png"
                                        @change="setNewTemplates">
                                </label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="uploadImagen(imagen)">Guardar</button>
                        <button type="button" class="btn btn-danger" ref="closemodal" data-dismiss="modal" @class="modalShowHide(false)">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
  	</div>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'
export default {
    middleware: 'loginAuth',
    // layout: 'other',
    data(){
        return {
            show_modal: false,
            file: null,
            imagen: '',
            listTemplates: [],
        }
    },
	mounted() {
        this.getListTemplates()
	},
	methods:{
        getValidURL(path) {
            return process.env.service_img + path
        },
        modalShowHide(value){
            let vm = this
            vm.imagen=''
            vm.show_modal = value
        },
        getListTemplates() {
            // TODO: Servicio para obtener la lista de plantillas cargadas.
            let vm = this
            // vm.listTemplates = vm.fake_response

            axios({
                url: process.env.service_url + 'all_plantillas',
                method: 'get',
            }).then(response => {
                let res = response.data
                vm.listTemplates =  res.data
            })

        },
        updateTemplates(id) {
            // TODO: Servicio para actualizar la plantillas seleccionada.
            let vm = this
            console.log('eliminar plantilla')
            // axios({
            //     url: process.env.service_url + 'delete_template/' + id ,
            //     method: 'delete',
            // }).then(response => {
            //     let res = response.data
            //     vm.getListTemplates()
            // })
        },
        setNewTemplates(evt) {
            let vm = this
            var reader = new FileReader();
            reader.onloadend = function() {
                vm.imagen = reader.result // TODO: base64 a enviar en el servicio
                // vm.uploadImagen(reader.result)
            }
            reader.readAsDataURL(evt.target.files[0]);
		},

		uploadImagen(file) {
            // TODO: Servicio para cargar la nueva plantillas.
            let vm = this
            if(file.length === 0) {
                Swal.fire({
                	type: 'warning',
                	title: 'Oops...',
                	html: 'Debes cargar una plantilla para poder guardar.',
                })
            } else {
                axios({
                    url: process.env.service_url + 'plantillas',
                    method: 'post',
                    data: {
                        imagen: file,
                    }
                }).then(response => {
                    let res = response.data
                    vm.$refs.closemodal.click()
                    vm.getListTemplates()
                    vm.modalShowHide(false)
                    
                })
            }

		}
	}
}
</script>

<style lang="scss">
.file {
		background: #e2e2e2;
		height: 100%;
		width: 100%;
		position: absolute;
		background-position: center;
        background-size: cover;
        position: relative;
        min-height: 300px;
        cursor: pointer;

		.file-input {
			cursor: pointer;
			opacity: 0;
			height: 100%;
			width: 100%;
		}
    }
.wrapper_window{
    width: 180px;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 1px #0000002e;
    img {
        min-width: 150px;
    }
}
</style>
