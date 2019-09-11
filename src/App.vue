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
      </v-toolbar>
      <v-toolbar
        dark
        flat
        color="primary"
        class="toolbar hidden-xs-only">
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
.toolbar {
  background-color: rgba(255, 0, 0, 0.612);
  color: white;
}
</style>
