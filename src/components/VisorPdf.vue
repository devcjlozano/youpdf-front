<template>
  <div
     class="visor-pdf">
     <canvas
       :class="{'canvas-pdf': true, 'oculto': loading}"
       :id="id">
     </canvas>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
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
  computed: {
    heightVisor() {
      return document.querySelector('.visor-pdf').offsetHeight;
    },
    widthVisor() {
      return document.querySelector('.visor-pdf').offsetWidth;
    },
  },
  watch: {
    src() {
      this.pintarPdf();
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
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      // Render the page into the <canvas> element.
      const viewport = page.getViewport(canvas.width / page.getViewport(1.0).width);
      const renderContext = {
        canvasContext: context,
        viewport,
      };
      await page.render(renderContext);
      this.loading = false;
      this.$emit('numero-paginas-pdf', pdf.numPages);
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
