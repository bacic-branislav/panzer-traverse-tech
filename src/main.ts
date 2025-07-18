import { createApp } from 'vue';
import { pinia } from './plugins/pinia';
import App from './App.vue';
import router from './router';
import './plugins/firebase';
import './scss/main.scss';

createApp(App).use(pinia).use(router).mount('#app')
