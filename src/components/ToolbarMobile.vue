<template>
  <v-toolbar
      dark
      flat
      color="primary"
      class="toolbar hidden-sm-and-up">
      <v-btn
        text
        icon
        @click="mostrarMenuDeslizante()">
        <v-icon>mdi-view-headline</v-icon>
      </v-btn>
      <div class="toolbar__contenedor">
        <div class="toolbar__contenedor__item">
          <v-toolbar-title class="headline text-uppercase">
            <router-link
              to="/"
              class="enlace-router">
              <span>YOU</span>
              <span class="font-weight-light">PDF</span>
            </router-link>
          </v-toolbar-title>
        </div>
        <div class="toolbar__contenedor__item">
          <router-link
            to="about"
            class="enlace-router mr-2">
          <span>Sobre YouPdf</span>
          </router-link>
        </div>
      </div>
    </v-toolbar>
</template>
<script>

export default {
  name: 'ToolbarMobile',
  components: {
  },
  data() {
    return {};
  },
  methods: {
    mostrarMenuDeslizante() {
      this.$emit('mostrar-menu-deslizante');
    },
  },
};
</script>

<style scoped>
.enlace-router {
  text-decoration: none;
  color: inherit
}
.toolbar__contenedor {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
}
.toolbar__contenedor__item {
  display: flex;
  align-items: center;
}
</style>
