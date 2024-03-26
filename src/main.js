import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import BootstrapVue from 'bootstrap-vue';
import './assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// import 'bootstrap-vue/dist/bootstrap-vue-icons.css';
import 'bootstrap-vue/dist/bootstrap-vue.js';

createApp(App).use(router).mount('#app');
