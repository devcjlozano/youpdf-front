<template>

    <v-toolbar
      flat
      color="primary"
      dark
      class="toolbar hidden-xs-only">
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
        <v-toolbar-items>
          <v-btn
            text
            to="dividir-pdf">
            <span>Dividir pdf</span>
          </v-btn>
          <v-btn
            text
            to="about"
            class="enlace-router">
            <span>Unir pdf</span>
          </v-btn>
        </v-toolbar-items>
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
  name: 'ToolbarDesktop',
  components: {
  },
  data() {
    return {};
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
