<template>
  <div class="dividirPdf">
    <DialogoLoad
      texto-cargando='Preparando tus pdf, un momento por favor'
      :dialogo-visible="loadingDescargaPdf"/>
    <div class="mensaje-principal">
       <h1>Dividir Pdf</h1>
       <div class="mensaje-principal__texto">
        <p>Extrae una o varias páginas del PDF que selecciones  </p>
      </div>
    </div>
    <div>
      <MigasDePan/>
    </div>
    <div class="section__contenido">
      <div class="dividirPdf__input">
        <InputPdf
          @archivos-seleccionados="archivoSeleccionado"/>
      <span v-if="!existePdf">
        Cuando selecciones tu pdf, aparecerán las herramientas
        para que puedas seleccionar las páginas </span>
      </div>
      <div
       v-if="existePdf"
       class="dividirPdf__section__pdf-rangos">
         <div class="dividirPdf__section__pdf-rangos--pdf">
           <VisorPdf
             :src="fileDocumentBase64"
             @numero-paginas-pdf="numeroPaginasPdf"/>
         </div>
         <div class="dividirPdf__section__pdf-rangos--rangos">
           <RangosPdf
            :numero-paginas="numeroPaginas"
            :existe-pdf="existePdf"
            :rangos-seleccionados="rangosSeleccionados"
            :nuevo-pdf-cargado="nuevoPdfCargado"
            @anadir-rango="anadirRango"
            @borrar-rango="borrarRango"
            @dividir-pdf="dividirPdf"/>
       </div>
    </div>
    </div>
  </div>
</template>

<script>
import InputPdf from '@/components/InputPdf.vue';
import RangosPdf from '@/components/RangosPdf.vue';
import DialogoLoad from '@/components/DialogoLoad.vue';
import VisorPdf from '@/components/VisorPdf.vue';
import MigasDePan from '@/components/MigasDePan.vue';
import toBase64 from '@/utils/general';
import api from '@/api/index';

export default {
  name: 'DividirPdf',
  components: {
    InputPdf,
    RangosPdf,
    DialogoLoad,
    VisorPdf,
    MigasDePan,
  },
  data() {
    return {
      fileSeleccionado: '',
      numeroPaginas: 0,
      fileDocumentBase64: '',
      nuevoPdfCargado: false,
      nombrePdf: '',
      loadingVisorPdf: false,
      loadingDescargaPdf: false,
      arrayUrlsDescargas: [],
      rangosSeleccionados: [],
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
    async archivoSeleccionado(file, tamanio, nombrePdf) {
      if (file !== '') {
        if (this.rangosSeleccionados.length > 0) {
          this.rangosSeleccionados = [];
          this.numeroPaginas = 0;
        }
        this.nombrePdf = nombrePdf;
        this.loadingVisorPdf = true;
        this.nuevoPdfCargado = true;
        this.fileDocumentBase64 = await toBase64(file);
        this.nuevoPdfCargado = false;
      } else {
        this.fileDocumentBase64 = '';
        this.numeroPaginas = 0;
        this.loadingVisorPdf = false;
      }
      this.fileSeleccionado = file;
    },
    numeroPaginasPdf(numero) {
      if (numero > 0) {
        this.numeroPaginas = numero;
      }
    },
    anadirRango(objetoRango) {
      this.rangosSeleccionados.push(objetoRango);
    },
    borrarRango(posBorrar) {
      this.rangosSeleccionados.splice(posBorrar, 1);
    },
    async dividirPdf() {
      this.loadingDescargaPdf = true;
      const promesas = [];
      const promesasUrls = [];
      let results = [];
      let resultsUrls = [];
      for (let i = 0; i < this.rangosSeleccionados.length; i += 1) {
        const formData = new FormData();
        formData.append('filePDF', this.fileSeleccionado);
        formData.append('rango', JSON.stringify(this.rangosSeleccionados[i]));
        promesas.push(api.dividirPdf(formData));
      }

      results = await Promise.all(promesas);
      results.forEach((promesa) => {
        promesasUrls.push(this.prepararDescargaPdf(promesa.data));
      });
      resultsUrls = await Promise.all(promesasUrls);
      resultsUrls.forEach((url) => {
        this.arrayUrlsDescargas.push(url);
      });
      this.descargarArchivos();
      this.arrayUrlsDescargas = [];
      this.loadingDescargaPdf = false;
    },
    prepararDescargaPdf(pdfData) {
      return new Promise((resolve) => {
        const blob = new Blob([pdfData], { type: 'data:application/pdf' });
        const url = window.URL || window.webkitURL;
        const downloadUrl = url.createObjectURL(blob);
        resolve(downloadUrl);
      });
    },
    visorCargado() {
      this.loadingVisorPdf = false;
    },
    descargarArchivos() {
      const a = document.createElement('a');
      for (let i = 0; i < this.arrayUrlsDescargas.length; i += 1) {
        a.download = `${this.nombrePdf}_${this.rangosSeleccionados[i].desde}_${this.rangosSeleccionados[i].hasta}.pdf`;
        document.body.appendChild(a);
        a.href = this.arrayUrlsDescargas[i];
        a.click();
      }
      document.body.removeChild(a);
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
  width: 200px;
  height: 282px;
}
.overlay__contenido {
  display: flex;
  flex-direction: column;
  align-items: center;
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
