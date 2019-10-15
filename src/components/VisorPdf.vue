<template>
  <div class="visor-pdf">
     <div
       v-if="loading"
       style="position:absolute">
      <v-progress-circular
         indeterminate size="64"></v-progress-circular>
     </div>
    <pdf
      :src="src"
      :class="{ oculto: loading }"
      @num-pages="numeroPaginasPdf"
      @loaded="visorCargado"
      :page="1">
    </pdf>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import pdf from 'vue-pdf';

export default {
  name: 'VisorPDF',
  components: {
    pdf,
  },
  props: {
    src: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      loading: true,
    };
  },
  watch: {
    src() {
      this.loading = true;
    },
  },
  methods: {
    visorCargado() {
      this.loading = false;
    },
    numeroPaginasPdf(numero) {
      if (numero > 0) {
        this.$emit('numero-paginas-pdf', numero);
      }
    },
  },
};
</script>

<style scoped>
.visor-pdf {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.58);
}
.oculto {
  visibility: hidden;
}
</style>
