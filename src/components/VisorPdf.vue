<template>
  <div class="visor-pdf">
     <canvas
       :class="{'canvas-pdf': true, 'oculto': loading}"
       :id="id">
     </canvas>
     <!--<div
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
    </pdf> -->
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
// import pdf from 'vue-pdf';
import pdfjs from 'pdfjs-dist';

export default {
  name: 'VisorPDF',
  components: {
    // pdf,
  },
  props: {
    src: {
      type: File,
      default: () => {},
    },
    id: {
      type: String,
      default: '',
    },
    /* src: {
      type: String,
      default: '',
    }, */
  },
  mounted() {
    this.pintarPdf();
  },
  data() {
    return {
      loading: false,
      date: Date.now(),
    };
  },
  watch: {
    src() {
      this.pintarPdf();
      // this.loading = true;
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
    async pintarPdf() {
      this.loading = true;
      const loadingTask = pdfjs.getDocument(URL.createObjectURL(this.src));
      const pdf = await loadingTask.promise;

      // Load information from the first page.
      const page = await pdf.getPage(1);

      // Apply page dimensions to the <canvas> element.
      const canvas = document.getElementById(this.id);
      const context = canvas.getContext('2d');
      canvas.height = 210;
      canvas.width = 150;

      // Render the page into the <canvas> element.
      const viewport = page.getViewport(canvas.width / page.getViewport(1.0).width);
      const renderContext = {
        canvasContext: context,
        viewport,
      };
      await page.render(renderContext);
      this.loading = false;
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
}
.oculto {
  visibility: hidden;
}
.canvas-pdf {
  border: 1px solid rgba(0, 0, 0, 0.58);
}
</style>
