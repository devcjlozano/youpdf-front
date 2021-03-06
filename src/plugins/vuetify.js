import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#ff6363',
        info: '#ff6363',
        warningCustom: '#FFB163',
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});
