import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignOut, faCalculator, faList, faComment, faCat, faCloud, faCogs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

library.add(faSignOut, faCalculator, faList, faComment, faCat, faCloud, faCogs)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(VueFire, {
    firebaseApp,
    modules: [
        VueFireAuth()
    ]
})

app.mount('#app')
