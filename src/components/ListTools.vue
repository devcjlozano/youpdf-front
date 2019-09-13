<template>
<div class="listTools">
  <div class="listTools__listado">
    <div
      class="listTools__listado__tool"
      v-for="(herramienta,index) in herramientasDisponibles"
      :key="index"
      @click="irAHerramienta(herramienta.alias)">
      <CardTool
        :herramienta="herramienta"/>
    </div>
  </div>
</div>
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
            titulo: 'Dividir pdf',
            alias: 'dividir',
            subtitulo: 'Extraer páginas de tu pdf',
            texto: 'Extrae una o varias páginas de tu pdf.',
          },
          {
            // eslint-disable-next-line global-require
            rutaIcon: require('../assets/icons/join.png'),
            titulo: 'Unir pdf',
            alias: 'unir',
            subtitulo: 'Unir varios Pdfs',
            texto: 'Une Pdfs en el orden que tu prefieras.',
          },
        ],
    };
  },
  methods: {
    irAHerramienta(tool) {
      this.$emit('abrir-herramienta', tool);
    },
  },
};
</script>

<style scoped>
.listTools__listado {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.listTools__listado__tool {
  margin: 8px;
  cursor: pointer;
}
.listTools__listado__tool:hover {
  background-color: #fafafa;
}
</style>
