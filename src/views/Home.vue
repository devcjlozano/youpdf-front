<template>
  <div class="home">
    <ListTools @abrir-herramienta="abrirHerramienta"/>
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
          this.$router.push('dividir-pdf');
      }
    },
  },
};
</script>
<style scoped>

</style>
