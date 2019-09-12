<template>
<v-layout row wrap justify-center>
  <v-flex
    xs6
    sm3
    md2
    pa-2
    v-for="(herramienta,index) in herramientasDisponibles"
    :key="index">
    <CardTool
      :herramienta="herramienta"/>
  </v-flex>
</v-layout>
</template>
<script>
import CardTool from './CardTool.vue';

export default {
  name: 'ListTools',
  components: {
    CardTool,
  },
  data() {
    return {
      herramientasDisponibles:
        [
          {
            // eslint-disable-next-line global-require
            rutaIcon: require('../assets/icons/scissors.png'),
            texto: 'Dividir Pdf',
          },
          {
            // eslint-disable-next-line global-require
            rutaIcon: require('../assets/icons/join.png'),
            texto: 'Unir Pdf',
          },
        ],
    };
  },
};
</script>

<style scoped>
</style>
