<template>
  <div class="dividirPdf">
    <InputPdf
      @archivo-seleccionado="archivoSeleccionado"/>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import InputPdf from '@/components/InputPdf.vue';

export default {
  name: 'DividirPdf',
  components: {
    InputPdf,
  },
  data() {
    return {
      fileSeleccionado: '',
      numeroPaginasPdf: 0,
    };
  },
  methods: {
    archivoSeleccionado(file, numPages) {
      this.fileSeleccionado = file;
      this.numeroPaginasPdf = numPages;
    },
  },
};
</script>

<style scoped>
.dividirPdf {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
