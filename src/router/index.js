import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import DividirPdf from '@/views/DividirPdf.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        breadcrumb: [
          { name: 'Home ' },
        ],
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        breadcrumb: [
          { name: 'Home ', link: 'home' },
          { name: 'About' },
        ],
      },
    },
    {
      path: '/dividir-pdf',
      name: 'dividirPdf',
      component: DividirPdf,
      meta: {
        breadcrumb: [
          { name: 'Home ', link: 'home' },
          { name: 'dividir-pdf' },
        ],
      },
    },
  ],
});
