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
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title> Cortar PDF </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>  Unir PDF </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <ToolbarDesktop/>
      <ToolbarMobile
        @mostrar-menu-deslizante="mostrarMenuDeslizante = !mostrarMenuDeslizante"/>
    </nav>
    <div class="mensaje-principal">
       <h1>Utilidades para tus PDF</h1>
       <div class="mensaje-principal__texto">
        <p>YouPdf te ofrece diversas herramientas gratuitas con las que
          podrás cortar pdf, unirlos y muchas cosas más </p>
      </div>
     </div>
    <v-content>
      <div class="section">
        <router-view/>
      </div>
    </v-content>
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
};
</script>

<style scoped>
.app {
  background-color: red;
}
.nav {
  display: flex;
}
.section {
  padding: 20px;
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
.mensaje-principal {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  background-color: #fafafa;
}
.mensaje-principal__texto {
  text-align: center;
}
</style>
