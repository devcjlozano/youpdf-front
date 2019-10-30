<template>
  <v-app style="background: #FFFFFF">
    <nav class="nav">
      <v-navigation-drawer
        v-model="mostrarMenuDeslizante"
        fixed>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Herramientas
            </v-list-item-title>
            <v-list-item-subtitle>
              YouPdf
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list
          dense
          nav>
          <v-list-item
            :to="{ name: 'dividirPdf'}"
            link>
            <v-list-item-content>
              <v-list-item-title >
                Dividir PDF
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
             :to="{ name: 'unirPdf'}"
             link>
            <v-list-item-content>
              <v-list-item-title>
                Unir PDF
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <ToolbarDesktop/>
      <ToolbarMobile
        @mostrar-menu-deslizante="mostrarMenuDeslizante = !mostrarMenuDeslizante"/>
    </nav>
    <v-content>
      <div class="section">
        <router-view/>
      </div>
    </v-content>
    <footer class="footer">
       <div>
        <div class="footer__container">
          <div class="footer__container__texto">
            <p>Puedes enviarme un saludo escribéndome un
              <a href="mailto:carlosjlp@gmail.com">email</a> o un
              <a
                href="https://twitter.com/carlosjlp"
                target="__blank">tweet </a>. A
              demás puedes cotillear mi github en
              <a
                href="https://github.com/devcjlozano"
                target="__blank">devcjlozano</a>
            </p>
            <p class="footer__container__texto--info">
              @2019 - Web app programada y diseñada por Carlos Javier usando Vue + Vuetify
            </p>
          </div>
      </div>
      </div>
    </footer>
  </v-app>
</template>
<script>
import ToolbarDesktop from '@/components/ToolbarDesktop.vue';
import ToolbarMobile from '@/components/ToolbarMobile.vue';

export default {
  name: 'App',
  components: {
    ToolbarDesktop,
    ToolbarMobile,
  },
  data() {
    return {
      mostrarMenuDeslizante: false,
    };
  },
  methods: {
    irARuta(name) {
      this.$router.replace({ name });
    },
  },
};
</script>

<style scoped>
.nav {
  display: flex;
}
.footer {
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #fafafa;
}
.footer__container__texto {
  max-width: 600px;
  text-align: center;
}
.footer__container__texto--info{
  color: #4e4e4e;
}
.enlace-router{
  text-decoration: none;
  color: inherit
}
.nav__toolbar-desktop {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
}
.nav__toolbar_desktop-item {
  display: flex;
  align-items: center;
}
.nav__toolbar-mobile {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
