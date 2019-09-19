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
    <v-content>
      <div class="section">
        <router-view/>
      </div>
    </v-content>
    <footer class="mensaje-principal">
       <div>
       <h1>Footer</h1>
        <div class="mensaje-principal__texto">
          <p>YouPdf es de uso gratuito creado por Carlos Javier Lozano Perez </p>
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
};
</script>

<style scoped>
.app {
  background-color: red;
}
.nav {
  display: flex;
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

.mensaje-principal__texto {
  text-align: center;
}
</style>
