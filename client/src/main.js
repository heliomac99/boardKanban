import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

/* add icons to the library */
library.add(faPlus)
library.add(faPen)
library.add(faTrash)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(VueAxios, axios)
.use(router)
.mount('#app')

import "bootstrap/dist/js/bootstrap.js"
