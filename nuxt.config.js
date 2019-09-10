
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  env: {
    service_url: process.env.NODE_ENV === 'production' ? '/api/' : 'http://localhost:3003/api/',
    service_img: process.env.NODE_ENV === 'production' ? '/api/public/' : 'http://localhost:3003'
  },
  router: {
    base: process.env.NODE_ENV === 'production' ? '' : ''
  },
  head: {
    title: 'Pacífico Seguros | Marcos de Fotos',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=EDGE' },
      { 'http-equiv': 'content-type', content: 'text/html; charset=utf-8' },
      { 'http-equiv': 'ImageResize', content: 'no' },
      { 'http-equiv': 'ImageToolbar', content: 'no' },

      { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no' },
      { name: 'autor', content: 'pacifico.com.pe' },
      { name: 'publisher', content: 'pacifico.com.pe' },
      { name: 'copyright', content: 'pacifico.com.pe' },
      { name: 'host', content: 'pacifico.com.pe' },
      { hid: 'description', name: 'description', content: 'Con esta aplicación podrás añadirle un diseño al marco de tu foto de perfil para tu plataforma de workplace. Esperamos que te sea de utilidad.' },
      { hid: 'og_description', property: 'og:description', content: 'Con esta aplicación podrás añadirle un diseño al marco de tu foto de perfil para tu plataforma de workplace. Esperamos que te sea de utilidad.' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.2/css/all.css' }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js', integrity: 'sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo', crossorigin: 'anonymous' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js', integrity: 'sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1', crossorigin: 'anonymous' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', integrity: 'sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM', crossorigin: 'anonymous' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/style.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/sweet_alert.js', ssr: false},
    { src: '@/plugins/vue-cropper.js', ssr: false},
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'cookie-universal-nuxt'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
