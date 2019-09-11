<template>
  <v-app>
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
      <v-toolbar
        dark
        flat
        color="primary"
        class="toolbar hidden-sm-and-up">
        <v-btn
          text
          icon
          @click="mostrarMenuDeslizante = !mostrarMenuDeslizante">
          <v-icon>mdi-view-headline</v-icon>
        </v-btn>
        <div class="nav__toolbar-mobile">
          <v-toolbar-title class="headline text-uppercase">
            <router-link
              to="/"
              class="enlace-router">
              <span>YOU</span>
              <span class="font-weight-light">PDF</span>
            </router-link>
          </v-toolbar-title>
          <v-toolbar-items>
            <v-btn text>
              <router-link
                to="about"
                class="enlace-router mr-2">
              <span>Sobre YouPdf</span>
              </router-link>
          </v-btn>
          </v-toolbar-items>
        </div>
      </v-toolbar>
      <v-toolbar
        flat
        color="primary"
        dark
        class="toolbar hidden-xs-only">
        <div class="nav__toolbar-desktop">
          <div class="nav__toolbar_desktop-item">
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
            <v-btn text>
              <router-link
                to="about"
                class="enlace-router">
                <span>Dividir pdf</span>
              </router-link>
            </v-btn>
            <v-btn text>
              <router-link
                to="about"
                class="enlace-router">
                <span>Unir pdf</span>
              </router-link>
            </v-btn>
          </v-toolbar-items>
          <div class="nav__toolbar_desktop-item">
            <router-link
              to="about"
              class="enlace-router mr-2">
            <span>Sobre YouPdf</span>
            </router-link>
          </div>
      </div>
      </v-toolbar>
    </nav>
    <v-content>
      <v-container class="section">
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      mostrarMenuDeslizante: false,
    };
  },
};
</script>

<style scoped>
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
</style>
