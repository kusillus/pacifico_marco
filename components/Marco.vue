<template>
    <div class="container py-5">
        <div class="">
            <h4>
                1. Selecciona una plantilla para continuar
            </h4>
            <div class="d-flex overflow-auto">
                <div v-for="(item, i) in list_window" :key="i" @click="setNewWindow(item)" class="m-2 wrapper_window" :class="getClassActive(item)">
                    <img style="width: 100%;" :ref="item.name" :src="item.path" :alt="item.name">
                </div>
            </div>
        </div>
        <div class="pt-5">
            <h4>
                2. Carga tu imagen de perfil
            </h4>
            <form>
                <div class="custom-file">
                    <input class="custom-file-input" type="file" name="image" accept="image/*"
                        style="font-size: 1.2em; padding: 10px 0;"
                        @change="setImage" />
                    <label class="custom-file-label" for="customFile">Selecciona imagen</label>
                </div>
            </form>
        </div>
        <div v-if="imgSrc != ''" class="py-5">
            <vue-cropper
                ref='cropper'
                :guides="true"
                :view-mode="1"
                :aspect-ratio="1"
                drag-mode="crop"
                :auto-crop-area="0.5"
                :min-container-width="250"
                :min-container-height="180"
                :background="true"
                :rotatable="true"
                :src="imgSrc"
                alt="Source Image"
                :img-style="{ 'width': '400px', 'height': '400px' }">
            </vue-cropper>
        </div>
        <div class="text-center" v-if="imgSrc != ''">
            <div class="pb-5">
                <button class="btn btn-primary " @click="cropImage">Recortar Imagen</button>
                <a v-if="cropImg" :href="cropImg" download class="btn btn-primary">
                    Descargar Imagen
                </a>
            </div>
            <div v-if="cropImg">
                <img :src="cropImg" style="width: 200px; border: 1px solid gray" alt="Cropped Image" />        
            </div>
        </div>
        <img class="" ref='marco' :src="base_image">
  </div>

</template>

<script>
  import VueCropper from 'vue-cropperjs';
  import 'cropperjs/dist/cropper.css';
  import Swal from 'sweetalert2'
	import axios from 'axios'
  export default {
    //   layout: 'other',
    components: {
      VueCropper,
    },
    data() {
      return {
        imgSrc: '',
        cropImg: '',
        list_window: [
            // { id: 'mod_1',name: 'Marco Uno', base_image: require('@/assets/img/marco.png')},
            // { id: 'mod_2',name: 'Marco Uno', base_image: require('@/assets/img/marco.png')},
            // { id: 'mod_3',name: 'Marco Uno', base_image: require('@/assets/img/marco.png')},
            // { id: 'mod_4',name: 'Marco Uno', base_image: require('@/assets/img/marco.png')},
            // { id: 'mod_5',name: 'Marco Uno', base_image: require('@/assets/img/marco.png')}
        ],
        base_image: '',
        active_window: null,
      };
	},
	mounted(){
		this.getListTemplates()	
	},
    methods: {
		getListTemplates() {
            // TODO: Servicio para obtener la lista de plantillas cargadas.
            let vm = this
            // vm.listTemplates = vm.fake_response

            axios({
                url: process.env.service_url + 'all_plantillas',
                method: 'get',
            }).then(response => {
                let res = response.data
                vm.list_window =  res.data.map(item => {
					item.path = process.env.service_img + item.path
					return item
				})
            })

        },
        getClassActive(item) {
            let vm = this
            return vm.active_window === item.id ? 'active_window': ''
        },
        setNewWindow(item) {
			let vm = this
			
			// var canvas = document.createElement('canvas')
			// var ctx = canvas.getContext('2d')
			// var img = this.$refs[item.name]

			// canvas.width = img.width
			// canvas.height = img.height
			// // console.log(this.$refs[item.name])

			// ctx.drawImage(img, 0, 0)



            vm.active_window = item.id
            vm.base_image = item.path

        },
      setImage(e) {
        const file = e.target.files[0];
        if (!file.type.includes('image/')) {
          alert('Please select an image file');
          return;
        }
        if (typeof FileReader === 'function') {
          const reader = new FileReader();
          reader.onload = (event) => {
            this.imgSrc = event.target.result;
            // rebuild cropperjs with the updated source
            this.$refs.cropper.replace(event.target.result);
          };
          reader.readAsDataURL(file);
        } else {
          alert('Sorry, FileReader API not supported');
        }
      },
      cropImage() {
        // get image data for post processing, e.g. upload or setting image src
        // this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
        this.cropImg = this.getRoundedCanvas(this.$refs.cropper.getCroppedCanvas()).toDataURL()
      },
        getRoundedCanvas(sourceCanvas) {
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            var width = sourceCanvas.width;
            var height = sourceCanvas.height;
            var img = this.$refs.marco
            canvas.width = width;
            canvas.height = height;
            context.imageSmoothingEnabled = true;
            context.drawImage(sourceCanvas, 0, 0, width, height);
            // context.globalCompositeOperation = 'destination-in';
            // context.beginPath();
            // context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
            context.drawImage(img, 0, 0,width, height);
            // context.fill();
            
            return canvas;
        },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.cropper-crop-box, .cropper-view-box {
    border-radius: 50%;
}

.cropper-view-box {
    box-shadow: 0 0 0 1px #39f;
    outline: 0;
}
.wrapper_window{
  width: 180px;
  border-radius: 10px;
  box-shadow: 1px 1px 2px 1px #0000002e;
  img {
    min-width: 150px;
  }
  &.active_window{
    border: solid 2px #0082c3;
  }
}
</style>

