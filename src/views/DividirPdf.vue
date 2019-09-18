<template>
  <div class="dividirPdf">
    <div class="mensaje-principal">
       <h1>Dividir Pdf</h1>
       <div class="mensaje-principal__texto">
        <p>Para dividir pdf </p>
      </div>
    </div>
    <div class="dividirPdf__section section__contenido">
      <InputPdf
        @archivo-seleccionado="archivoSeleccionado"/>
      <RangosPdf
        :numero-paginas="numeroPaginasPdf"
        :existe-pdf="existePdf"/>
    </div>
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
.dividirPdf__section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
