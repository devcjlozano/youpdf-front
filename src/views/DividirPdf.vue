<template>
  <div class="dividirPdf">
    <InputPdf
      @archivo-seleccionado="archivoSeleccionado"/>
    <RangosPdf
      :numero-paginas="numeroPaginasPdf"
      :existe-pdf="existePdf"/>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import InputPdf from '@/components/InputPdf.vue';
import RangosPdf from '@/components/RangosPdf.vue';

export default {
  name: 'DividirPdf',
  components: {
    InputPdf,
    RangosPdf,
  },
  data() {
    return {
      fileSeleccionado: '',
      numeroPaginasPdf: 0,
    };
  },
  computed: {
    existePdf() {
      if (this.fileSeleccionado !== null && this.fileSeleccionado !== '') {
        return true;
      }
      return false;
    },
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
