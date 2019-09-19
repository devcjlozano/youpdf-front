<template>
  <div class="dividirPdf">
    <div class="mensaje-principal">
       <h1>Dividir Pdf</h1>
       <div class="mensaje-principal__texto">
        <p>Extrae una o varias páginas del PDF que selecciones  </p>
      </div>
    </div>
    <div class="section__contenido">
      <div class="dividirPdf__input">
        <InputPdf
          @archivo-seleccionado="archivoSeleccionado"/>
      <span v-if="!existePdf">
        Cuando selecciones tu pdf, aparecerán las herramientas
        para que puedas seleccionar las páginas </span>
      </div>
      <div
       v-if="existePdf"
       class="dividirPdf__section__pdf-rangos">
       <div class="dividirPdf__section__pdf-rangos--pdf">
        <pdf
          v-if="fileDocumentBase64 !== ''"
          :src="fileDocumentBase64"
          @num-pages="numeroPaginasPdf"
          :page="1">
        </pdf>
      </div>
      <div class="dividirPdf__section__pdf-rangos--rangos">
        <RangosPdf
          :numero-paginas="numeroPaginas"
          :existe-pdf="existePdf"/>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import pdf from 'vue-pdf';
import InputPdf from '@/components/InputPdf.vue';
import RangosPdf from '@/components/RangosPdf.vue';
import toBase64 from '@/utils/general';

export default {
  name: 'DividirPdf',
  components: {
    InputPdf,
    RangosPdf,
    pdf,
  },
  data() {
    return {
      fileSeleccionado: '',
      numeroPaginas: 0,
      fileDocumentBase64: '',
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
    async archivoSeleccionado(file) {
      if (file !== '') {
        this.fileDocumentBase64 = await toBase64(file);
      } else {
        this.fileDocumentBase64 = '';
      }
      this.fileSeleccionado = file;
    },
    numeroPaginasPdf(numero) {
      if (numero > 0) {
        this.numeroPaginas = numero;
      }
    },
  },
};
</script>

<style scoped>
.dividirPdf__input {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dividirPdf__section__pdf-rangos {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
}
.dividirPdf__section__pdf-rangos--pdf {
  border: 1px solid rgba(0, 0, 0, 0.58);
  width: 200px;
  height: 282px;
}

@media (max-width: 766px) {
  .dividirPdf__section__pdf-rangos--rangos {
     margin-top: 20px;
  }
}

@media (min-width: 767px) {
  .dividirPdf__section__pdf-rangos {
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: flex-start;
     flex-wrap: wrap;
  }
  .dividirPdf__section__pdf-rangos--rangos {
     margin-left: 35px;
  }
  .dividirPdf__section__pdf-rangos--pdf {
   width: 300px;
   height: 423px;
  }
}
@media (min-width: 991px) {
  .dividirPdf__section__pdf-rangos--rangos {
     margin-left: 80px;
  }
}
</style>
