<template>
<div class="listTools">
  <div class="listTools__listado">
    <div
      class="listTools__listado__tool"
      v-for="(herramienta,index) in herramientasDisponibles"
      :key="index">
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
            subtitulo: 'Extraer páginas de tu pdf',
            texto: 'Extrae una o varias páginas de tu pdf.',
          },
          {
            // eslint-disable-next-line global-require
            rutaIcon: require('../assets/icons/join.png'),
            titulo: 'Unir pdf',
            subtitulo: 'Unir varios Pdfs',
            texto: 'Une Pdfs en el orden que tu prefieras.',
          },
        ],
    };
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
  padding: 8px;
}

</style>
