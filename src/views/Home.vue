<template>
  <div class="home">
    <div class="mensaje-principal">
       <h1>Utilidades para tus PDF</h1>
       <div class="mensaje-principal__texto">
        <p>YouPdf te ofrece diversas herramientas gratuitas con las que
          podrás cortar pdf, unirlos y muchas cosas más </p>
      </div>
    </div>
    <div class="section__contenido">
      <ListTools @abrir-herramienta="abrirHerramienta"/>
    </div>
  </div>
</template>

<script>
import ListTools from '@/components/ListTools.vue';

export default {
  name: 'Home',
  components: {
    ListTools,
  },
  methods: {
    abrirHerramienta(herramienta) {
      switch (herramienta) {
        case 'dividir':
          this.$router.push('dividir-pdf');
          break;
        default:
          this.$router.push('unir-pdf');
      }
    },
  },
};
</script>
<style scoped>

</style>
