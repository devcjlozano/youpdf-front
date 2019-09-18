<template>
<div class="inputPdf">
  <div
    class="inputPdf__contenedor-input">
    <v-file-input
      class="inputPdf__contenedor-input__input"
      v-model="files"
      @change="changeInputPdf"
      accept=".pdf"
      color="primary"
      counter
      label="Selección de pdf"
      placeholder="Haz click aquí para seleccionar tu archivo pdf"
      prepend-icon="mdi-paperclip"
      outlined
      :show-size="1000"
    >
      <template v-slot:selection="{ index, text }">
        <v-chip
          v-if="index < 2"
          color="primary"
          dark
          label
          small
        >
          {{ text }}
        </v-chip>

        <span
          v-else-if="index === 2"
          class="overline grey--text text--darken-3 mx-2"
        >
        +{{ files.length - 2 }} File(s)
      </span>
      </template>
    </v-file-input>
  </div>
  <span
    v-if="files!== null"
    class="inputPdf__contenedor-input__input__textoNumeroPaginas">
      El número de páginas del pdf es {{ numPages }}
  </span>
  <div>
    <pdf
      v-if="fileDocument !== '' && files !== null"
      :src="fileDocument"
      @num-pages="numeroPaginasPdf"
      :page="1"></pdf>
  </div>
</div>
</template>
<script>
// eslint-disable-next-line import/extensions
import pdf from 'vue-pdf';
import toBase64 from '@/utils/general';

export default {
  name: 'InputPdf',
  components: {
    pdf,
  },
  data() {
    return {
      files: null,
      fileDocument: '',
      numPages: 0,
    };
  },
  methods: {
    async changeInputPdf(file) {
      if (file !== null) {
        this.fileDocument = await toBase64(file);
      } else {
        this.$emit('archivo-seleccionado', '', 0);
      }
    },
    numeroPaginasPdf(numPages) {
      if (numPages > 0) {
        this.numPages = numPages;
        this.$emit('archivo-seleccionado', this.files, this.numPages);
      }
    },
  },
};
</script>

<style scoped>
.inputPdf{
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.inputPdf__contenedor-input__input__textoNumeroPaginas {
  font-size: 0.9em;
  font-weight: 500;
}
@media (min-width: 768px) {
  .inputPdf__contenedor-input {
    width: 80%;
  }
}
@media (min-width: 992px) {
  .inputPdf__contenedor-input {
    width: 60%;
  }
}
</style>
